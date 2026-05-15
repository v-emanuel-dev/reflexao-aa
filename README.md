# Reflexão Diária — Redesign Premium

Projeto Next.js 14 com App Router, TypeScript, Tailwind CSS e Framer Motion para uma experiência moderna de leitura meditativa.

A página principal busca a reflexão diária diretamente da página pública da AARJ no servidor, extrai o conteúdo textual, aplica cache com revalidação e usa fallback local caso a fonte externa falhe ou mude de estrutura.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Como a reflexão diária é carregada

O fluxo atual está em `lib/aarj-reflection.ts`:

1. O servidor faz `fetch` de `https://aarj.org.br/reflexao-diaria`.
2. O HTML é processado com `cheerio`.
3. O parser extrai título, data, chamada, fonte e corpo.
4. O Next.js usa `revalidate = 21600`, ou seja, tenta revalidar a cada 6 horas.
5. Se a fonte falhar, a página usa `data/reflections.ts` como fallback local.

Também existe uma rota JSON:

```txt
/api/reflection
```

Ela retorna a reflexão extraída, metadados da coleta e se o conteúdo veio de fallback.

## Vercel Cron

O arquivo `vercel.json` inclui um cron diário:

```json
{
  "path": "/api/reflection",
  "schedule": "5 8 * * *"
}
```

Isso aquece/revalida a rota todos os dias às 08:05 UTC. Ajuste o horário se quiser alinhar com o horário do Brasil.

## Estrutura

```txt
app/
  layout.tsx
  page.tsx
  loading.tsx
  globals.css
  api/
    reflection/
      route.ts
components/
  app-footer.tsx
  focus-mode-toggle.tsx
  hero-reflection.tsx
  motion-provider.tsx
  reading-panel.tsx
  reflection-navigation.tsx
  related-reflections.tsx
  scroll-progress.tsx
  share-actions.tsx
  site-header.tsx
  theme-provider.tsx
  theme-toggle.tsx
data/
  reflections.ts
lib/
  aarj-reflection.ts
  reading-time.ts
  utils.ts
public/
  manifest.webmanifest
```

## Deploy na Vercel

1. Suba o repositório para GitHub/GitLab/Bitbucket.
2. Importe na Vercel.
3. Use os padrões detectados para Next.js.
4. Faça o deploy.

## Observações técnicas

- O scraping é feito server-side, nunca no navegador.
- O conteúdo é cacheado por ISR/fetch revalidation.
- A UI continua funcionando com fallback se a AARJ mudar o HTML.
- A navegação anterior/próxima ainda usa exemplos locais; o próximo passo seria persistir histórico diário em banco ou CMS.

## Evolução sugerida

- Persistir cada reflexão diária em Supabase, Vercel KV ou Postgres.
- Criar histórico real em `/reflexoes/[slug]`.
- Adicionar monitoramento quando o parser usar fallback.
- Criar sitemap/RSS baseado no histórico persistido.
- Gerar imagens Open Graph dinâmicas.
- Transformar em PWA com cache offline.
# reflexao-aa
