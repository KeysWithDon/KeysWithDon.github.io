import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Free Homebuyer Consultation",
  description:
    "Schedule a free 30-minute homebuyer consultation with North Carolina Realtor Donovan Teasley and leave with clear next steps.",
  alternates: { canonical: "/consult" },
};

export default function ConsultPage() {
  return (
    <section className="page-shell">
      <div className="schedule-layout">
        <div className="schedule-copy">
          <p className="eyebrow">Complimentary consultation</p>
          <h1>Let’s map out your next move.</h1>
          <p className="lede">
            In 30 minutes, we’ll talk through your goals, where you stand, and
            the most useful next steps toward homeownership.
          </p>
          <div className="schedule-points">
            <div><strong>01</strong><span>Talk through your situation</span></div>
            <div><strong>02</strong><span>Clarify your best next steps</span></div>
            <div><strong>03</strong><span>Leave with a practical plan</span></div>
          </div>
        </div>
        <div className="calendar-card card">
          <iframe
            src="https://calendly.com/donovanteasley1999/free-30-minute-consultation"
            title="Schedule a free consultation with Donovan Teasley"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
