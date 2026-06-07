import Image from "next/image";
import Link from "next/link";

const steps = [
  ["01", "Understand your position", "We start with your goals, questions, and current buying readiness."],
  ["02", "Build a clear plan", "Get practical next steps for credit, buying power, and financing."],
  ["03", "Move with confidence", "Navigate the buying process with an advocate in your corner."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="home-hero-image"
          src="/images/hero.png"
          alt="A welcoming modern home"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="eyebrow hero-eyebrow">North Carolina real estate guidance</p>
          <h1>Your path home starts with a clear plan.</h1>
          <p>
            Practical guidance, honest answers, and a strategy built around
            where you are today.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/consult">
              Schedule a free consultation
            </Link>
            <Link className="button button-outline hero-outline" href="/blog">
              Explore buyer resources
            </Link>
          </div>
        </div>
        <div className="hero-trust card">
          <Image src="/images/headshot.png" alt="Donovan Teasley" width={88} height={88} />
          <div>
            <span className="pill">Your local advocate</span>
            <h3>Donovan Teasley</h3>
            <p>NC Realtor · The Next Level Realty Plus</p>
          </div>
        </div>
      </section>

      <section className="page-shell home-intro">
        <div className="split-heading">
          <div>
            <p className="eyebrow">A better first step</p>
            <h2>Homeownership should feel possible, not confusing.</h2>
          </div>
          <p className="lede">
            I help first-time buyers understand their options, prepare with
            purpose, and make informed decisions without pressure.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map(([number, title, copy]) => (
            <article className="step-card card card-hover" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="home-cta">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s turn “maybe someday” into a real plan.</h2>
          </div>
          <Link className="button button-light" href="/contact">
            Contact Donovan
          </Link>
        </div>
      </section>
    </>
  );
}
