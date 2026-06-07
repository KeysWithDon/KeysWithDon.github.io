import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-brand">Keys With Don</p>
          <p className="footer-note">
            Clear guidance for your path to homeownership.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/credentials">Credentials</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/consult">Schedule</Link>
          <a
            href="https://www.instagram.com/keyswithdon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
