"use client";

import { useState } from "react";

type ContactType = "phone" | "email";

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
      <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ContactIcon({ type }: { type: ContactType }) {
  return type === "phone" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.4 2.1a15.8 15.8 0 0 1-9.7-9.7L8 7 7 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<{ type: ContactType; success: boolean } | null>(null);

  function copyContact(type: ContactType, value: string) {
    const finish = (success: boolean) => {
      setStatus({ type, success });
      window.setTimeout(() => setStatus(null), 2200);
    };
    const onCopy = (event: ClipboardEvent) => {
      event.clipboardData?.setData("text/plain", value);
      event.preventDefault();
    };

    document.addEventListener("copy", onCopy);
    const copied = document.execCommand("copy");
    document.removeEventListener("copy", onCopy);

    if (copied) {
      finish(true);
      return;
    }

    navigator.clipboard?.writeText(value).then(() => finish(true), () => finish(false));
  }

  const copyLabel = (type: ContactType) => {
    if (status?.type !== type) return "Copy";
    return status.success ? "Copied!" : "Copy failed";
  };

  return (
    <section className="page-shell">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Let’s connect</p>
          <h1>A quick conversation can clarify your next move.</h1>
          <p className="lede">
            Reach out with a question, tell me where you are in the process, or
            schedule time to build your homebuying plan.
          </p>
          <div className="contact-promise card">
            <span>What to expect</span>
            <strong>Clear answers. No pressure. A practical next step.</strong>
          </div>
        </div>

        <div className="contact-options">
          <button className="contact-card card card-hover" type="button" onClick={() => copyContact("phone", "980-331-4331")}>
            <span className="contact-icon"><ContactIcon type="phone" /></span>
            <span className="contact-details">
              <small>Phone</small>
              <strong>980-331-4331</strong>
              <span>Click to copy phone number</span>
            </span>
            <span className="copy-action"><CopyIcon /> {copyLabel("phone")}</span>
          </button>

          <button className="contact-card card card-hover" type="button" onClick={() => copyContact("email", "Keyswithdon@gmail.com")}>
            <span className="contact-icon"><ContactIcon type="email" /></span>
            <span className="contact-details">
              <small>Email</small>
              <strong>Keyswithdon@gmail.com</strong>
              <span>Click to copy email address</span>
            </span>
            <span className="copy-action"><CopyIcon /> {copyLabel("email")}</span>
          </button>

          <a className="instagram-card card-hover" href="https://www.instagram.com/keyswithdon/" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="48" height="48" fill="none">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.7" cy="6.4" r="1.2" fill="currentColor" />
            </svg>
            <span>
              <small>Instagram</small>
              <strong>@keyswithdon</strong>
              <span>Follow for real estate guidance and updates</span>
            </span>
            <b>Visit profile ↗</b>
          </a>
        </div>
      </div>
    </section>
  );
}
