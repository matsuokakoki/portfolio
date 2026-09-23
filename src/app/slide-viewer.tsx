"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Deck = "hayo" | "attendance";

export function SlideViewer({
  deck,
  title,
  lang,
}: {
  deck: Deck;
  title: string;
  lang: "ja" | "en";
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const [page, setPage] = useState(1);
  const total = deck === "hayo" ? 9 : 17;
  const isJapanese = lang === "ja";

  const move = (direction: number) => {
    setPage((current) => Math.min(total, Math.max(1, current + direction)));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        className="mt-5 inline-flex items-center gap-2 border border-black/40 bg-white px-3 py-2 text-sm font-bold text-black transition hover:border-blue-950 hover:bg-blue-950/5"
      >
        {isJapanese ? "説明スライドを見る" : "View presentation slides"}
        <span aria-hidden="true">↗</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} ${isJapanese ? "説明スライド" : "presentation slides"}`}
        onClose={() => setPage(1)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        className="max-h-[92vh] w-[min(96vw,1100px)] max-w-none overflow-y-auto border-2 border-blue-950 bg-white p-0 text-black backdrop:bg-black/75"
      >
        <div className="flex items-center justify-between gap-4 border-b border-black/10 px-4 py-3 sm:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-950">
              {isJapanese ? "説明スライド" : "Presentation slides"}
            </p>
            <h3 className="mt-1 text-base font-bold sm:text-lg">{title}</h3>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={isJapanese ? "閉じる" : "Close"}
            className="border border-black px-3 py-2 text-sm font-bold transition hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <div
          className="bg-gray-100"
          onTouchStart={(event) => {
            touchStart.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0]?.clientX - touchStart.current;
            if (Math.abs(delta) > 55) move(delta < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <Image
            src={`/slides/${deck}/${String(page).padStart(2, "0")}.jpg`}
            width={1600}
            height={900}
            sizes="(max-width: 1100px) 96vw, 1100px"
            alt={`${title} — ${isJapanese ? "スライド" : "slide"} ${page}/${total}`}
            className="mx-auto h-auto max-h-[calc(92vh-185px)] w-full object-contain"
          />
        </div>

        <div className="flex items-center gap-3 border-t border-black/10 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={page === 1}
            className="border border-black px-3 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isJapanese ? "前へ" : "Previous"}
          </button>
          <label className="min-w-0 flex-1">
            <span className="sr-only">{isJapanese ? "ページを選ぶ" : "Choose slide"}</span>
            <input
              type="range"
              min={1}
              max={total}
              value={page}
              onChange={(event) => setPage(Number(event.target.value))}
              className="w-full accent-blue-950"
            />
          </label>
          <span className="shrink-0 text-sm font-bold tabular-nums">{page} / {total}</span>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={page === total}
            className="border border-black px-3 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isJapanese ? "次へ" : "Next"}
          </button>
        </div>
        <p className="px-4 pb-3 text-xs text-black/65 sm:px-6">
          {isJapanese
            ? "個人情報保護のため、一部の画面例を非表示にしています。"
            : "Some app screenshots are hidden to protect personal information."}
        </p>
      </dialog>
    </>
  );
}
