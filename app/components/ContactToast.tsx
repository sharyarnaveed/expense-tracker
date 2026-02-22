"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ContactToastProps = { status: "success" | "error" | null };

export function ContactToast({ status }: ContactToastProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!status) return;
    setVisible(true);
    setExiting(false);

    const hide = () => {
      setExiting(true);
      setTimeout(() => {
        setVisible(false);
        router.replace("/#contact", { scroll: false });
      }, 320);
    };

    const t = setTimeout(hide, 4200);
    return () => clearTimeout(t);
  }, [status, router]);

  if (!status || (!visible && !exiting)) return null;

  const isSuccess = status === "success";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`contact-toast fixed right-4 top-4 z-50 max-w-sm sm:right-6 sm:top-6 ${
        exiting ? "contact-toast-exit" : "contact-toast-enter"
      }`}
    >
      <div
        className={`flex items-start gap-4 rounded-2xl border px-5 py-4 shadow-lg backdrop-blur-xl ${
          isSuccess
            ? "border-emerald-200/80 bg-emerald-50/95 text-emerald-900 shadow-emerald-200/30"
            : "border-red-200/80 bg-red-50/95 text-red-900 shadow-red-200/30"
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            isSuccess ? "bg-emerald-500/20" : "bg-red-500/20"
          }`}
        >
          {isSuccess ? (
            <svg
              className="h-5 w-5 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="font-semibold">
            {isSuccess ? "Message sent" : "Something went wrong"}
          </p>
          <p className="mt-1 text-sm opacity-90">
            {isSuccess
              ? "Thanks! We'll get back to you soon."
              : "Please try again or email us at hello@moneylynx.app."}
          </p>
        </div>
      </div>
    </div>
  );
}
