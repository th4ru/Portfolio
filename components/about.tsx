import { about, profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { CodeIcon, WrenchIcon, UsersIcon, BookIcon } from "./icons";

const highlightIconMap = {
  wrench: WrenchIcon,
  users: UsersIcon,
  book: BookIcon,
} as const;

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              {profile.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {role}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/70 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {about.highlights.map((item) => {
              const Icon = highlightIconMap[item.icon as keyof typeof highlightIconMap] ?? CodeIcon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}