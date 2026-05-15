import * as cheerio from "cheerio";
import { todayReflection, type Reflection } from "@/data/reflections";

const AARJ_REFLECTION_URL = "https://aarj.org.br/reflexao-diaria";
const SOURCE_TIMEZONE = "America/Sao_Paulo";

export type ReflectionFetchResult = {
  reflection: Reflection;
  sourceUrl: string;
  fetchedAt: string;
  fromFallback: boolean;
};

function cleanText(value: string) {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n+/g, " ")
    .trim();
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getCurrentYearInSourceTimezone() {
  return Number(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: SOURCE_TIMEZONE,
      year: "numeric",
    }).format(new Date()),
  );
}

function dateLabelToFullDate(dateLabel: string) {
  const [day, month] = dateLabel.split("/").map(Number);
  const year = getCurrentYearInSourceTimezone();

  if (!day || !month) {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: SOURCE_TIMEZONE,
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: SOURCE_TIMEZONE,
  }).format(new Date(Date.UTC(year, month - 1, day, 12)));
}

function createQuote(body: string[], excerpt: string) {
  const firstParagraph = body[0] ?? excerpt;
  const firstSentence = firstParagraph.match(/[^.!?]+[.!?]/)?.[0];
  return cleanText(firstSentence ?? firstParagraph).replace(/^“|”$/g, "");
}

function parseAarjReflection(html: string): Reflection {
  const $ = cheerio.load(html);

  const title = cleanText($("h3.text-primary.text-center").first().text());

  const dateLabel = cleanText(
    $("h3.text-primary")
      .filter((_, element) =>
        /^\d{2}\/\d{2}$/.test(cleanText($(element).text())),
      )
      .first()
      .text(),
  );

  const contentBlocks = $(".col-lg-12.col-md-12 .text-primary")
    .map((_, element) => cleanText($(element).text()))
    .get()
    .filter(Boolean)
    .filter((text) => text !== title && text !== dateLabel);

  const [excerpt = "", source = "", ...body] = contentBlocks;

  if (!title || !dateLabel || !excerpt || body.length === 0) {
    throw new Error(
      "Não foi possível extrair título, data, chamada ou corpo da reflexão da AARJ.",
    );
  }

  const year = getCurrentYearInSourceTimezone();
  const [day, month] = dateLabel.split("/");

  return {
    id: `${year}-${month}-${day}`,
    slug: slugify(title),
    title: title
      .toLocaleLowerCase("pt-BR")
      .replace(/^./, (letter) => letter.toLocaleUpperCase("pt-BR")),
    dateLabel,
    fullDate: dateLabelToFullDate(dateLabel),
    excerpt,
    source,
    quote: createQuote(body, excerpt),
    body,
    tags: ["Reflexão diária", "Só por hoje", "A.A."],
  };
}

export async function getDailyReflection(): Promise<ReflectionFetchResult> {
  try {
    const response = await fetch(AARJ_REFLECTION_URL, {
      cache: "no-store",
      headers: {
        "user-agent":
          "Mozilla/5.0 ReflexaoDiariaModern/1.0 (+https://vercel.app)",
        accept: "text/html;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error(`AARJ respondeu com HTTP ${response.status}.`);
    }

    const html = await response.text();
    const reflection = parseAarjReflection(html);

    return {
      reflection,
      sourceUrl: AARJ_REFLECTION_URL,
      fetchedAt: new Date().toISOString(),
      fromFallback: false,
    };
  } catch (error) {
    console.error("[getDailyReflection] usando fallback local:", error);

    return {
      reflection: todayReflection,
      sourceUrl: AARJ_REFLECTION_URL,
      fetchedAt: new Date().toISOString(),
      fromFallback: true,
    };
  }
}

export const aarjReflectionSourceUrl = AARJ_REFLECTION_URL;
