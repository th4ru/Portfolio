import { ProfileImage } from "./profile-image";
import { RoleRotator } from "./role-rotator";
import { profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  DownloadIcon,
  ArrowDownIcon,
} from "./icons";

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: MailIcon,
  phone: PhoneIcon,
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-pink-400/15 blur-3xl dark:bg-purple-600/15" />

      <div className="mx-auto grid max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-36 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pb-1 text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            <RoleRotator />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-sm">{profile.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.03] hover:shadow-indigo-500/40"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              download
              target={profile.resumeUrl.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:scale-[1.03] hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-500/60 dark:hover:text-indigo-400"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Follow me
            </span>
            <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex gap-2.5">
              {profile.socials.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap] ?? GithubIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-indigo-500/60 dark:hover:text-indigo-400"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center animate-fade-in lg:mt-0">
          <ProfileImage size={240} />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 animate-bounce text-zinc-400 transition-colors hover:text-indigo-500 lg:block dark:text-zinc-600 dark:hover:text-indigo-400"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </a>
    </section>
  );
}