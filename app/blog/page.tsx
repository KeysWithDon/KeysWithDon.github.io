export default function BlogPage() {
  return (
    <section style={{ padding: "30px 6px" }}>
      {/* PAGE TITLE */}
      <h1 style={{ margin: "0 0 12px", fontSize: 46, fontWeight: 800 }}>
        Important Resources
      </h1>

      <p
        style={{
          fontSize: 19,
          lineHeight: 1.6,
          maxWidth: 900,
          marginBottom: 28,
          opacity: 0.9,
        }}
      >
        Many buyers assume homeownership is out of reach without realizing that
        special programs exist to make purchasing a home more achievable.
        Resources like the programs below can open doors sooner than expected.
      </p>

      {/* GRID CONTAINER */}
      <div style={{ display: "grid", gap: 30 }}>
        
        {/* ================= FIRST RESOURCE ================= */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <img
            src="/images/fnb-preview.png"
            alt="First National Bank Community Uplift Program"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />

          <div style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <img
                src="/images/fnb-logo.png"
                alt="First National Bank"
                style={{ width: 70, objectFit: "contain" }}
              />

              <h2 style={{ margin: 0 }}>
                First National Bank Community Uplift Program
              </h2>
            </div>

            <p style={{ lineHeight: 1.7, opacity: 0.9, maxWidth: 850 }}>
              The Community Uplift Program is designed to support eligible buyers
              through specialized lending opportunities and education that may
              reduce common barriers to homeownership.
            </p>

            <ul style={{ marginTop: 14, lineHeight: 1.6 }}>
              <li>✔ Down payment assistance opportunities</li>
              <li>✔ Flexible qualification guidelines</li>
              <li>✔ Designed for first-time buyers</li>
            </ul>

            <a
              href="https://www.fnb-online.com/landing/community-uplift"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 18,
                padding: "12px 18px",
                borderRadius: 14,
                background: "#3b5bff",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              View Program →
            </a>
          </div>
        </div>

        {/* ================= SECOND RESOURCE ================= */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <img
            src="/images/community-one-preview.png"
            alt="Community One Grant Program"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />

          <div style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <img
                src="/images/cmg-logo.png"
                alt="CMG Home Loans"
                style={{ width: 70, objectFit: "contain" }}
              />

              <h2 style={{ margin: 0 }}>
                Community One Grant Program
              </h2>
            </div>

            <p style={{ lineHeight: 1.7, opacity: 0.9, maxWidth: 850 }}>
              The Community One Grant Program offers eligible homebuyers grant
              assistance that can be used toward down payment or closing costs,
              helping reduce the upfront financial burden.
            </p>

            <ul style={{ marginTop: 14, lineHeight: 1.6 }}>
              <li>✔ Grant funds may not require repayment</li>
              <li>✔ Can be applied toward closing costs</li>
              <li>✔ Helps reduce upfront cash needed</li>
            </ul>

            <a
              href="https://www.cmghomeloans.com/mysite/jay-york/loan-programs/community-one-grant"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 18,
                padding: "12px 18px",
                borderRadius: 14,
                background: "#3b5bff",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              View Program →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}