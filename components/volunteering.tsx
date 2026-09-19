import { volunteering } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { BriefcaseIcon } from "./icons";

export function Volunteering() {
  return (
    <section
      id="volunteering"
      className="border-y border-zinc-200/70 bg-white py-20 dark:border-zinc-800/70 dark:bg-zinc-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={volunteering.eyebrow}
              title={volunteering.heading}
              description="A few ways I give back to the communities that helped me grow."
            />
          </div>

          <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[21px] before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
            {volunteering.items.map((item) => (
              <div key={`${item.org}-${item.role}`} className="relative flex gap-5 pl-0">
                <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-indigo-400">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50">
                  <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                    {item.period}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {item.org}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}