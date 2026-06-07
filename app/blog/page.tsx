import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Buyer Resources" };

const resources = [
  {
    title: "First National Bank Community Uplift Program",
    provider: "First National Bank",
    preview: "/images/fnb-preview.png",
    previewWidth: 2560,
    previewHeight: 748,
    logo: "/images/fnb-logo.png",
    logoWidth: 2000,
    logoHeight: 1545,
    copy: "Specialized lending opportunities and education designed to reduce common barriers to homeownership.",
    benefits: ["Down payment assistance opportunities", "Flexible qualification guidelines", "Designed for first-time buyers"],
    href: "https://www.fnb-online.com/landing/community-uplift",
  },
  {
    title: "Community One Grant Program",
    provider: "CMG Home Loans",
    preview: "/images/community-one-preview.png",
    previewWidth: 1864,
    previewHeight: 670,
    logo: "/images/cmg-logo.png",
    logoWidth: 1602,
    logoHeight: 464,
    copy: "Grant assistance for eligible buyers that can help reduce the upfront cost of purchasing a home.",
    benefits: ["Grant funds may not require repayment", "Can be applied toward closing costs", "Helps reduce upfront cash needed"],
    href: "https://www.cmghomeloans.com/mysite/jay-york/loan-programs/community-one-grant",
  },
];

export default function BlogPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Buyer advantage</p>
        <h1>Resources that can bring homeownership closer.</h1>
        <p className="lede">
          Explore programs created to help qualified buyers overcome common
          financial barriers and move forward with confidence.
        </p>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <article className="resource-card card card-hover" key={resource.title}>
            <div className="resource-preview">
              <Image
                src={resource.preview}
                alt=""
                width={resource.previewWidth}
                height={resource.previewHeight}
                sizes="(max-width: 760px) 100vw, 560px"
              />
              <span className="pill">Featured program</span>
            </div>
            <div className="resource-body">
              <div className="resource-provider">
                <div className="logo-frame">
                  <Image
                    src={resource.logo}
                    alt={`${resource.provider} logo`}
                    width={resource.logoWidth}
                    height={resource.logoHeight}
                    sizes="64px"
                  />
                </div>
                <span>{resource.provider}</span>
              </div>
              <h2>{resource.title}</h2>
              <p>{resource.copy}</p>
              <ul className="check-list">
                {resource.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
              <a className="button" href={resource.href} target="_blank" rel="noopener noreferrer">
                View program details <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="resource-note">
        Program eligibility and availability may change. Contact the lender
        directly for current terms and qualification requirements.
      </p>
    </section>
  );
}
