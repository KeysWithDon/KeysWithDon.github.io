import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Credentials" };

export default function CredentialsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Professional background</p>
        <h1>Guidance grounded in service and clarity.</h1>
        <p className="lede">
          Meet the Realtor behind Keys With Don and review the credentials that
          support your buying journey.
        </p>
      </div>

      <div className="credentials-grid">
        <article className="profile-card card">
          <div className="profile-image">
            <Image
              src="/images/headshot.png"
              alt="Donovan Teasley"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 430px"
            />
          </div>
          <div className="profile-copy">
            <span className="pill">NC Realtor</span>
            <h2>Donovan Teasley</h2>
            <p className="profile-company">The Next Level Realty Plus</p>
            <p>
              I help first-time home buyers turn “maybe someday” into a real
              plan with clear guidance on credit, buying power, and the steps
              that move you from curious to confident.
            </p>
            <Link className="button" href="/contact">Start a conversation</Link>
          </div>
        </article>

        <aside className="credential-stack">
          <div className="credential-summary card">
            <p className="eyebrow">At a glance</p>
            <h2>Professional credentials</h2>
            <ul className="check-list">
              <li>Licensed North Carolina Realtor</li>
              <li>The Next Level Realty Plus</li>
              <li>First-time buyer strategy and guidance</li>
            </ul>
          </div>
          <div className="license-card card">
            <div>
              <span className="pill">Current through 06/30/27</span>
              <h3>North Carolina license pocket card</h3>
            </div>
            <Image
              src="/images/nc-real-estate-pocketcard-2027.png"
              alt="North Carolina real estate license pocket card"
              width={654}
              height={412}
              sizes="(max-width: 850px) 100vw, 560px"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
