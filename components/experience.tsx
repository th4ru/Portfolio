import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { BriefcaseIcon, MapPinIcon } from "./icons";
import { OfferingLetterDialog } from "./offering-letter-dialog";

function getOfferingLetter(): string | null {
  const dir = path.join(process.cwd(), "public", "experience");
  try {
    if (!existsSync(dir)) return null;
    const file = readdirSync(dir).find((f) => /offer/i.test(f));
    return file ? `/experience/${encodeURIComponent(file)}` : null;
  } catch {
    return null;
  }
}

export function Experience() {
  const offeringUrl = getOfferingLetter();

  return (
    <section
      id="experience"
      className="border-y border-zinc-200/70 bg-white py-20 dark:border-zinc-800/70 dark:bg-zinc-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.heading}
          description="Where I currently work and grow."
        />

        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50">
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/30">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {experience.role}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                  {experience.period}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <BriefcaseIcon className="h-4 w-4" />
                  {experience.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" />
                  {experience.location}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {experience.description.map((point) => (
                  <li
                    key={point.slice(0, 24)}
                    className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                    {point}
                  </li>
                ))}
              </ul>

              {offeringUrl ? (
                <div className="mt-6">
                  <OfferingLetterDialog url={offeringUrl} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}