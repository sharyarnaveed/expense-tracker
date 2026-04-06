"use client";

import { useEffect } from "react";

function scrollToCurrentHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ block: "start", behavior: "auto" });
}

export function HashScrollFix() {
  useEffect(() => {
    const run = () => {
      scrollToCurrentHash();

      // Some route transitions restore scroll before layout fully settles.
      requestAnimationFrame(scrollToCurrentHash);
      setTimeout(scrollToCurrentHash, 120);
    };

    run();
    window.addEventListener("hashchange", run);
    window.addEventListener("popstate", run);
    window.addEventListener("pageshow", run);

    return () => {
      window.removeEventListener("hashchange", run);
      window.removeEventListener("popstate", run);
      window.removeEventListener("pageshow", run);
    };
  }, []);

  return null;
}
