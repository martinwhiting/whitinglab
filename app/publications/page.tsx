import { ExternalLink, FileText } from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";
import publications from "./publications-data.json";

type Publication = { year: number; authors: string; title: string; venue: string; doi: string; pdf: string; kind: "research" | "other" };

const profiles = [
  ["Google Scholar", "Citation metrics", "https://scholar.google.com.au/citations?user=viy_8MgAAAAJ&hl=en&oi=ao"],
  ["ORCID", "0000-0002-4662-0227", "https://orcid.org/0000-0002-4662-0227"],
  ["Macquarie University", "Institutional profile", "https://researchers.mq.edu.au/en/persons/martin-whiting"],
];

function PublicationList({ items }: { items: Publication[] }) {
  const years = [...new Set(items.map((item) => item.year))];
  return <div className="publication-years">{years.map((year) =>
    <section className="publication-year" key={year}>
      <h3>{year}</h3>
      <div className="publication-records">{items.filter((item) => item.year === year).map((item) =>
        <article className="publication-record" key={`${item.year}-${item.title}`}>
          <h4>{item.title}</h4>
          <p>{item.authors}{item.venue ? <> · <em>{item.venue}</em></> : null}</p>
          <div className="publication-actions">
            {item.doi && <a href={`https://doi.org/${item.doi}`}>Full text <ExternalLink aria-hidden="true" size={14} /></a>}
            <a href={`/papers/${item.pdf}`}>PDF <FileText aria-hidden="true" size={14} /></a>
            {item.doi && <a href={`https://doi.org/${item.doi}`}>doi</a>}
          </div>
        </article>
      )}</div>
    </section>
  )}</div>;
}

export default function Publications() {
  const items = publications as Publication[];
  const research = items.filter((item) => item.kind === "research");
  const other = items.filter((item) => item.kind === "other");
  return <><SiteHeader /><main className="publications-page">
    <PageIntro kicker="Publications" title="Research and written work">
      <p>Journal articles, reviews, chapters and other publications from the Lizard Lab. Available papers can be opened or downloaded using the PDF link.</p>
    </PageIntro>
    <section className="publication-profile-strip"><div className="page-shell publication-profiles">{profiles.map(([title, detail, href]) =>
      <a href={href} key={title}><strong>{title}</strong><span>{detail}</span><ExternalLink aria-hidden="true" size={17} /></a>
    )}</div></section>
    <section className="section page-shell publication-catalogue">
      <div className="publication-section-heading"><p className="eyebrow">Academic publications</p><h2>Research papers</h2><p>{research.length} publications</p></div>
      <PublicationList items={research} />
    </section>
    <section className="section section-soft"><div className="page-shell publication-catalogue">
      <div className="publication-section-heading"><p className="eyebrow">Reviews, chapters and reports</p><h2>Other written work</h2><p>{other.length} publications</p></div>
      <PublicationList items={other} />
    </div></section>
  </main><SiteFooter /></>;
}
