"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AwardIcon, ArrowUpRightIcon, XIcon } from "./icons";

export type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  media?: string;
};

function isImage(media: string) {
  return /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(media);
}

export function CertificateCard({ cert }: { cert: CertificateItem }) {
  const [open, setOpen] = useState(false);
  const hasMedia = Boolean(cert.media);

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
        onClick={() => (hasMedia ? setOpen(true) : window.open(cert.credentialUrl, "_blank", "noopener"))}
        className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-pink-500/20 text-amber-500 transition-transform group-hover:scale-110 dark:text-amber-400">
            <AwardIcon className="h-5 w-5" />
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors group-hover:text-indigo-500 dark:text-zinc-500">
            {hasMedia ? "View" : "Verify"}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <h3 className="mt-4 text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {cert.title}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {cert.issuer}
          </span>
          <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {cert.year}
          </span>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl dark:bg-zinc-900 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close certificate"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto rounded-xl bg-zinc-100 dark:bg-zinc-950">
              {cert.media && isImage(cert.media) ? (
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={cert.media}
                    alt={cert.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : cert.media ? (
                <iframe
                  src={cert.media}
                  title={cert.title}
                  className="h-[70vh] w-full"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}