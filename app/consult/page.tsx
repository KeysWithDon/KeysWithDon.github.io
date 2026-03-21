export default function ConsultPage() {
  return (
    <section style={{ padding: "30px 6px" }}>
      <h1 style={{ margin: "0 0 12px", fontSize: 46, fontWeight: 800 }}>
        Schedule a Free Consultation
      </h1>

      <p
        style={{
          fontSize: 20,
          lineHeight: 1.6,
          maxWidth: 850,
          opacity: 0.9,
          margin: "0 0 24px",
        }}
      >
        If you’ve ever thought “I can’t buy a home,” you’re not alone. Let’s talk through
        your situation and map out a simple, realistic path toward homeownership.
      </p>

      <div
        style={{
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <iframe
          src="https://calendly.com/donovanteasley1999/free-30-minute-consultation"
          title="Schedule a Free Consultation"
          style={{
            width: "100%",
            height: 780,
            border: "none",
          }}
        />
      </div>
    </section>
  );
}