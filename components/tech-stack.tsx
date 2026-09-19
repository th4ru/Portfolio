import { techStack } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { CodeIcon, ServerIcon, DatabaseIcon, WrenchIcon } from "./icons";

const groups = [
  { title: "Frontend", skills: techStack.frontend, icon: CodeIcon },
  { title: "Backend", skills: techStack.backend, icon: ServerIcon },
  { title: "Databases & ORMs", skills: techStack.databases, icon: DatabaseIcon },
  { title: "Tools & DevOps", skills: techStack.tools, icon: WrenchIcon },
] as const;

export function TechStack() {
  return (
    <section
      id="tech"
      className="border-y border-zinc-200/70 bg-white py-20 dark:border-zinc-800/70 dark:bg-zinc-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={techStack.eyebrow}
          title={techStack.heading}
          description="Technologies I work with day to day and enjoy building with."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/30 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-indigo-950/60 dark:group-hover:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}