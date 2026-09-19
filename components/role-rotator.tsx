"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const ROLES = profile.roles;

export function RoleRotator() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[index % ROLES.length];
    let timeout: ReturnType<typeof setTimeout>;

    const step = () => {
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % ROLES.length);
        } else {
          setText(word.substring(0, text.length - 1));
        }
        timeout = setTimeout(step, 40);
        return;
      }

      if (text === word) {
        timeout = setTimeout(() => setDeleting(true), 1700);
        return;
      }

      setText(word.substring(0, text.length + 1));
      timeout = setTimeout(step, 80);
    };

    timeout = setTimeout(step, 60);
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {text}
      </span>
      <span
        className="ml-1 inline-block h-6 w-[3px] animate-pulse rounded-full bg-indigo-500 dark:bg-indigo-400"
        aria-hidden="true"
      />
    </span>
  );
}