export default function CredentialsPage() {
  return (
    <section style={{ padding: "30px 6px" }}>
      <h1 style={{ margin: "0 0 16px", fontSize: 44 }}>
        Credentials
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
          alignItems: "start",
        }}
      >
        {/* LEFT: PHOTO + BIO */}
        <div
          style={{
            borderRadius: 18,
            padding: 18,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <img
            src="/images/headshot.png"
            alt="Donovan Teasley"
            style={{
              width: "100%",
              maxWidth: 520,
              height: "auto",
              borderRadius: 18,
              display: "block",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          />

          <h2 style={{ margin: "18px 0 6px" }}>Donovan Teasley, NC Realtor</h2>
          <p style={{ margin: 0, opacity: 0.85 }}>
            The Next Level Realty Plus
          </p>

          <p style={{ marginTop: 14, lineHeight: 1.7, opacity: 0.9 }}>
            I help first-time home buyers turn “maybe someday” into a real plan with clear
            guidance on credit, buying power, and the steps that move you from curious to confident.
          </p>
        </div>

        {/* RIGHT: CREDENTIALS */}
        <div
          style={{
            borderRadius: 18,
            padding: 18,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <h2 style={{ margin: "0 0 10px" }}>Professional Credentials</h2>

          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, opacity: 0.9 }}>
            <li>NC Realtor</li>
            <li>The Next Level Realty Plus</li>
            <li>First-time buyer strategy & guidance</li>
          </ul>

          <h3 style={{ margin: "18px 0 10px" }}>License</h3>

          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              padding: 14,
              maxWidth: 640,
            }}
          >
            <img
              src="/images/license.png"
              alt="Real Estate License"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                display: "block",
                background: "white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile friendly tweak */}
      <style>{`
        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}