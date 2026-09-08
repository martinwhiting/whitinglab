import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const sections = [
  ["Martin Whiting", "martin-whiting"],
  ["Postdocs", "postdocs"],
  ["PhD and MRes students", "students"],
  ["Visiting researchers", "visiting-researchers"],
  ["Undergrads, interns, volunteers", "undergrads-interns-volunteers"],
  ["Hall of fame", "hall-of-fame"],
];

const postdocs = ["Ben Ashton", "Yorick Lambreghts"];
const students = ["Ko-Huan Lee", "Victoria Russell", "Maddi Holmes", "Cooper Van Der Wal"];

function NameList({ names }: { names: string[] }) {
  return <div className="people-name-list">{names.map((name) => <p key={name}>{name}</p>)}</div>;
}

export default function People() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro kicker="People" title="The people behind the research">
          <p>The Lizard Lab brings together students, researchers and collaborators interested in behaviour, ecology and evolution.</p>
        </PageIntro>
        <nav className="page-shell people-index" aria-label="People sections">
          {sections.map(([label, id], index) => (
            <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
          ))}
        </nav>
        <section className="section page-shell people-sections">
          <article className="people-section people-section-featured" id="martin-whiting">
            <p className="eyebrow">Lab head</p>
            <div className="people-section-layout"><h2>Martin Whiting</h2><div><p>Professor of Animal Behaviour and behavioural ecologist. Martin leads research on animal communication, cognition, social evolution and behavioural diversity in lizards.</p><a className="text-link" href="https://researchers.mq.edu.au/en/persons/martin-whiting">Macquarie University profile <ArrowRight aria-hidden="true" size={17} /></a></div></div>
          </article>
          <article className="people-section" id="postdocs">
            <p className="eyebrow">Current team</p>
            <div className="people-section-layout"><h2>Postdocs</h2><NameList names={postdocs} /></div>
          </article>
          <article className="people-section" id="students">
            <p className="eyebrow">Current team</p>
            <div className="people-section-layout"><h2>PhD and MRes students</h2><NameList names={students} /></div>
          </article>
          <article className="people-section" id="visiting-researchers">
            <p className="eyebrow">Collaborators</p>
            <div className="people-section-layout"><h2>Visiting researchers</h2><p>Researchers from Australia and around the world regularly join the lab to collaborate, analyse data and carry out field and laboratory projects.</p></div>
          </article>
          <article className="people-section" id="undergrads-interns-volunteers">
            <p className="eyebrow">Getting involved</p>
            <div className="people-section-layout"><h2>Undergrads, interns, volunteers</h2><p>Undergraduate researchers, interns and volunteers make an important contribution to lab and field projects while gaining hands-on research experience.</p></div>
          </article>
          <article className="people-section" id="hall-of-fame">
            <p className="eyebrow">Lab alumni</p>
            <div className="people-section-layout"><h2>Hall of fame</h2><div><p>Former students, postdoctoral researchers and research visitors form a global network of Lizard Lab alumni.</p><Link className="text-link" href="/gallery/">See visitors and group photos <ArrowRight aria-hidden="true" size={17} /></Link></div></div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
