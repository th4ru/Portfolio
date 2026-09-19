"use client";

import { useEffect, useState } from "react";
import { FileTextIcon, XIcon } from "./icons";

export function OfferingLetterDialog({ url }: { url: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-950/80"
      >
        <FileTextIcon className="h-4 w-4" />
        View offering letter
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Offering letter"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl dark:bg-zinc-900 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Offering Letter
              </h3>
              <button
                type="button"
                aria-label="Close offering letter"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto rounded-xl bg-zinc-100 dark:bg-zinc-950">
              <iframe src={url} title="Offering letter" className="h-[75vh] w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}