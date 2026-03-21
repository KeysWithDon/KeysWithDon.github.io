export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: 650,
          backgroundImage: "url(/images/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* FROSTED GLASS BRANDING BOX */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 22,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: 18,
            padding: "16px 20px",
            borderRadius: 18,
            background: "rgba(255,255,255,0.30)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
          }}
        >
          {/* HEADSHOT */}
          <img
            src="/images/headshot.png"
            alt="Donovan Teasley"
            style={{
              width: 80,
              height: 80,
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
              width: 80,
              height: 80,
              objectFit: "contain",
            }}
          />

          {/* NAME + BROKERAGE */}
          <div style={{ color: "#0b1b3a", lineHeight: 1.25 }}>
            <div style={{ fontWeight: 800, fontSize: 20 }}>
              Donovan Teasley, NC Realtor
            </div>
            <div style={{ fontSize: 15 }}>
              The Next Level Realty Plus
            </div>
          </div>
        </div>

        {/* HERO TEXT */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "240px 60px 80px",
            maxWidth: 850,
            color: "white",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 60,
              lineHeight: 1.05,
              fontWeight: 800,
            }}
          >
            Yes, you can buy a home.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 22,
              lineHeight: 1.6,
              maxWidth: 700,
              opacity: 0.92,
            }}
          >
            The right guidance today can open the door to homeownership sooner than you think.
          </p>
        </div>
      </section>
    </>
  );
}