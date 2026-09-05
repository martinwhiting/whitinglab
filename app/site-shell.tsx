import Link from "next/link";

const nav = [
  ["Research", "/research/"],
  ["People", "/people/"],
  ["Publications", "/publications/"],
  ["News", "/news/"],
  ["Contact", "/contact/"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell identity-row">
        <Link className="lab-brand" href="/" aria-label="The Lizard Lab home">
          <img src="/images/lizard-lab-logo.png" alt="" width="862" height="805" />
          <span>
            <strong>The Lizard Lab</strong>
            <small>Behaviour · Ecology · Evolution</small>
          </span>
        </Link>
        <a className="mq-brand" href="https://www.mq.edu.au/" aria-label="Macquarie University website">
          <img src="/images/macquarie-university-logo.png" alt="Macquarie University, Sydney Australia" width="1490" height="556" />
        </a>
      </div>
      <div className="nav-row">
        <nav className="page-shell" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-identity">
          <img src="/images/lizard-lab-logo.png" alt="" width="862" height="805" />
          <div><strong>The Lizard Lab</strong><p>School of Natural Sciences<br />Macquarie University</p></div>
        </div>
        <p className="acknowledgement">
          We acknowledge the Wallumattagal clan of the Dharug Nation, the
          Traditional Custodians of the land on which Macquarie University is
          situated, and pay our respects to Elders past and present.
        </p>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro page-shell"><p className="eyebrow">{kicker}</p><h1>{title}</h1><div className="intro-copy">{children}</div></section>;
}
