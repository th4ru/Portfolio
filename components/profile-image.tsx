import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/lib/data";

const CANDIDATES = [
  "Profile.jpeg",
  "profile.jpg",
  "profile.png",
  "profile.jpeg",
  "profile.webp",
];

function getProfileImage(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  for (const name of CANDIDATES) {
    if (existsSync(path.join(publicDir, name))) return `/${name}`;
  }
  return null;
}

export function ProfileImage({ size = 176 }: { size?: number }) {
  const src = getProfileImage();

  if (src) {
    return (
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-2xl" />
        <Image
          src={src}
          alt={`${profile.name} profile photo`}
          width={size}
          height={size}
          priority
          className="rounded-full border-4 border-white object-cover shadow-2xl shadow-indigo-500/20 dark:border-zinc-900"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-2xl" />
      <div
        className="flex items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 font-bold text-white shadow-2xl shadow-indigo-500/20 dark:border-zinc-900"
        style={{ width: size, height: size, fontSize: size * 0.28 }}
      >
        {profile.monogram}
      </div>
    </div>
  );
}