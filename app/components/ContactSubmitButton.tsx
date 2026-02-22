"use client";

import { useFormStatus } from "react-dom";

export function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base disabled:pointer-events-none disabled:opacity-70"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Sending…
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}
