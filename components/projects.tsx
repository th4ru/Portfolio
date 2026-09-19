import { projects, profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import {
  FolderIcon,
  ArrowUpRightIcon,
  GithubIcon,
  SparklesIcon,
} from "./icons";

const githubUrl =
  profile.socials.find((s) => s.icon === "github")?.href ?? "#";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.heading}
          description={
            <>
              A selection of things I&apos;ve designed, built and shipped. For
              more project details, follow me on{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                GitHub ↗
              </a>
              .
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.items.map((project) => {
            const hasDemo = Boolean(project.demo && project.demo !== "#");
            const hasCode = Boolean(project.code);
            return (
              <article
                key={project.name}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400">
                    <FolderIcon className="h-6 w-6" />
                  </div>
                  {project.featured ? (
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {hasDemo || hasCode ? (
                  <div className="mt-5 flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    {hasDemo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Demo
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {hasCode ? (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        Source
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <div className="mt-5 flex items-center gap-2 border-t border-zinc-100 pt-4 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                    <SparklesIcon className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    Research in progress
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}