import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* ✅ CENTERED SINGLE-LINE NAVBAR */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.30)",
            borderBottom: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <nav
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "14px 28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            {/* ✅ BRANDING */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              {/* HEADSHOT */}
              <img
                src="/images/headshot.png"
                alt="Donovan Teasley"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid white",
                }}
              />

              {/* COMPANY LOGO */}
              <img
                src="/images/logo.png"
                alt="The Next Level Realty Plus"
                style={{
                  width: 70,
                  height: 70,
                  objectFit: "contain",
                }}
              />

              {/* NAME */}
              <div style={{ lineHeight: 1.2 }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 16,
                    color: "#0b1b3a",
                  }}
                >
                  Donovan Teasley, NC Realtor
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#0b1b3a",
                    opacity: 0.85,
                  }}
                >
                  The Next Level Realty Plus
                </div>
              </div>
            </div>

            {/* ✅ NAV BUTTONS (INLINE WITH BRANDING) */}
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <a href="/" style={navBtn}>Home</a>
              <a href="/blog" style={navBtn}>Blog</a>
              <a href="/credentials" style={navBtn}>Credentials</a>
              <a href="/consult" style={navBtnPrimary}>Schedule</a>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: 18 }}>
          {children}
        </main>
      </body>
    </html>
  );
}

const navBtn: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 700,
  color: "#0b1b3a",
  background: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(255,255,255,0.75)",
};

const navBtnPrimary: React.CSSProperties = {
  ...navBtn,
  background: "#3b5bff",
  color: "white",
  border: "none",
};