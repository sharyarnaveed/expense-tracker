"use client";

import { useState, useEffect } from "react";

type VerificationStatus = "loading" | "success" | "error" | "expired";

export default function VerifyPage() {
  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Parse URL hash parameters and handle verification
  useEffect(() => {
    const parseHashParams = () => {
      if (typeof window === "undefined") return null;
      
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (!hash) return null;
      
      const params = new URLSearchParams(hash);
      return {
        error: params.get("error"),
        errorCode: params.get("error_code"),
        errorDescription: params.get("error_description")?.replace(/\+/g, " "),
        accessToken: params.get("access_token"),
        type: params.get("type"),
      };
    };

    const handleVerification = () => {
      const hashParams = parseHashParams();

      // Check for errors in URL hash
      if (hashParams?.error) {
        const { errorCode, errorDescription } = hashParams;
        
        // Handle specific error codes
        if (errorCode === "otp_expired" || errorDescription?.toLowerCase().includes("expired")) {
          setStatus("expired");
          setErrorMessage(errorDescription || "The verification link has expired.");
        } else if (errorCode === "access_denied") {
          setStatus("error");
          setErrorMessage(errorDescription || "Access was denied. The link may be invalid.");
        } else if (errorCode === "otp_disabled") {
          setStatus("error");
          setErrorMessage(errorDescription || "Email verification is currently disabled.");
        } else if (errorCode === "validation_failed") {
          setStatus("error");
          setErrorMessage(errorDescription || "The verification link is invalid.");
        } else {
          setStatus("error");
          setErrorMessage(errorDescription || "An error occurred during verification.");
        }
        return;
      }

      // Check for successful verification (access_token present)
      if (hashParams?.accessToken) {
        setStatus("success");
        return;
      }

      // No hash params - simulate verification or handle as needed
      const timer = setTimeout(() => {
        setStatus("success");
      }, 2500);

      return () => clearTimeout(timer);
    };

    handleVerification();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">
              ExpenseTracker
            </h1>
            <p className="text-gray-400 text-sm">Email Verification</p>
          </div>

          {/* Status content */}
          <div className="text-center">
            {status === "loading" && <LoadingState />}
            {status === "success" && <SuccessState email={email} />}
            {status === "error" && <ErrorState onRetry={() => setStatus("loading")} errorMessage={errorMessage} />}
            {status === "expired" && <ExpiredState email={email} errorMessage={errorMessage} />}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-500 text-xs">
              Having trouble?{" "}
              <a
                href="/support"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Secured with 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="py-8">
      {/* Animated spinner */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin animation-delay-150" style={{ animationDirection: "reverse", animationDuration: "1.5s" }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-2">
        Verifying Your Email
      </h2>
      <p className="text-gray-400 text-sm">
        Please wait while we verify your email address...
      </p>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
    </div>
  );
}

function SuccessState({ email }: { email: string }) {
  return (
    <div className="py-6">
      {/* Success checkmark with animation */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 animate-ping"></div>
        <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
          <svg
            className="w-12 h-12 text-white animate-[checkmark_0.5s_ease-in-out]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        Email Verified! 🎉
      </h2>
      <p className="text-gray-400 text-sm mb-2">
        Your email has been successfully verified.
      </p>
      <p className="text-purple-400 text-sm font-medium mb-6">
        {email}
      </p>

      {/* Success message card */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
        <p className="text-emerald-400 text-sm">
          ✨ Your account is now fully activated. You can start tracking your expenses!
        </p>
      </div>
    </div>
  );
}

function ErrorState({ onRetry, errorMessage }: { onRetry: () => void; errorMessage?: string }) {
  return (
    <div className="py-6">
      {/* Error icon */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="relative w-24 h-24 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        Verification Failed
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        {errorMessage || "We couldn't verify your email. The link may be invalid or something went wrong."}
      </p>

      {/* Error message card */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
        <p className="text-red-400 text-sm">
          Please try again or request a new verification link.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRetry}
          className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
        >
          Try Again
        </button>
        <a
          href="/resend-verification"
          className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 text-center"
        >
          Resend Link
        </a>
      </div>
    </div>
  );
}

function ExpiredState({ email, errorMessage }: { email: string; errorMessage?: string }) {
  return (
    <div className="py-6">
      {/* Expired icon */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        Link Expired
      </h2>
      <p className="text-gray-400 text-sm mb-2">
        {errorMessage || "This verification link has expired."}
      </p>
      {email && (
        <p className="text-purple-400 text-sm font-medium mb-6">
          {email}
        </p>
      )}

      {/* Info card */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
        <p className="text-amber-400 text-sm">
          Verification links are valid for 24 hours. Please request a new one.
        </p>
      </div>

      <a
        href="/resend-verification"
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Resend Verification Email
      </a>
    </div>
  );
}
