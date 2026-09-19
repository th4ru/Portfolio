import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon } from "./icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: MailIcon,
  phone: PhoneIcon,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>Made </span>
          
          <span>
            by <span className="font-medium text-zinc-900 dark:text-zinc-100">{profile.name}</span>
            {" · "}© {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap] ?? MailIcon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-indigo-500/60 dark:hover:text-indigo-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <a
          href="#home"
          className="text-sm text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}