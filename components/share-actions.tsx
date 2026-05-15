"use client";

import { Heart, Share2 } from "lucide-react";
import { useState } from "react";

export function ShareActions() {
  const [favorite, setFavorite] = useState(false);

  async function share() {
    const shareData = {
      title: "Reflexão Diária",
      text: "Leia a reflexão diária de hoje.",
      url: window.location.href,
    };
    if (navigator.share) await navigator.share(shareData);
    else await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <div id="compartilhar" className="flex flex-wrap gap-3">
      <button
        onClick={share}
        className="inline-flex items-center gap-2 rounded-full bg-ocean-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-ocean-500"
      >
        <Share2 size={16} /> Compartilhar
      </button>
    </div>
  );
}
