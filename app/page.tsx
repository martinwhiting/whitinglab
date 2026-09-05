import Link from "next/link";
import { ArrowRight, Brain, MessageCircle, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-shell";

const themes = [
  {
    icon: MessageCircle,
    title: "Animal communication",
    text: "We study how visual, chemical and behavioural signals evolve, what information they carry, and how animals respond to them.",
  },
  {
    icon: Brain,
    title: "Cognition",
    text: "We investigate how lizards learn, solve problems and adjust their behaviour when social and environmental conditions change.",
  },
  {
    icon: Users,
    title: "Social evolution",
    text: "We examine the evolution of family living, cooperation, social complexity and parental care in lizards and other vertebrates.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <img
            className="home-hero-image"
            src="/images/field_montage_karidan2-2048x1140.jpg"
            alt="Lizard Lab field research in arid environments"
            width="2048"
            height="1140"
          />
          <div className="home-hero-shade" />
          <div className="page-shell home-hero-content">
            <p className="eyebrow hero-eyebrow">Behaviour · Ecology · Evolution</p>
            <h1>The Lizard Lab</h1>
            <p>
              We investigate animal behaviour and evolution, with a particular
              focus on the colourful signals, flexible minds and social lives
              of lizards.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/research/">
                Explore our research <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-light" href="/people/">
                Meet the lab
              </Link>
            </div>
          </div>
        </section>

        <section className="section page-shell welcome-section">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>Understanding behaviour in an evolutionary world</h2>
          </div>
          <div className="welcome-copy">
            <p>
              The Lizard Lab is a behavioural ecology research group based at
              Macquarie University in Sydney, Australia. We combine fieldwork,
              behavioural experiments and comparative approaches to understand
              why animals look and behave the way they do.
            </p>
            <p>
              Our research takes us from Australia to Africa and Asia, working
              mainly with lizards and occasionally with frogs, birds and other
              vertebrates.
            </p>
          </div>
        </section>

        <section className="section themes-section">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow">What we study</p>
              <h2>Three connected research themes</h2>
            </div>
            <div className="theme-grid">
              {themes.map(({ icon: Icon, title, text }) => (
                <article className="theme-card" key={title}>
                  <span className="theme-icon"><Icon aria-hidden="true" size={27} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link className="text-link" href="/research/">
                    Learn more <ArrowRight aria-hidden="true" size={17} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell field-section">
          <div className="field-copy">
            <p className="eyebrow">From field to lab</p>
            <h2>Research grounded in natural behaviour</h2>
            <p>
              We study animals in the environments where their behaviour
              evolved, then bring those observations into carefully designed
              experiments in the field and laboratory.
            </p>
            <Link className="text-link" href="/research/">
              Discover our projects <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="field-image">
            <img
              src="/images/imperator-copy.jpg"
              alt="Colourful flat lizard"
              width="2500"
              height="500"
            />
            <p className="caption">Illustration: Erin Walsh</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
