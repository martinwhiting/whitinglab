import Link from "next/link";
import { ArrowRight, BookOpen, Brain, MessageCircle, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-shell";

const themes = [
  { icon: MessageCircle, title: "Animal communication", text: "How visual, chemical and dynamic signals evolve, what information they carry, and how receivers use them." },
  { icon: Brain, title: "Cognition", text: "How lizards learn, solve problems and respond flexibly to social and environmental challenges." },
  { icon: Users, title: "Social evolution", text: "How family living, cooperation, social complexity and parental care arise in vertebrates." },
];

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero page-shell">
      <div className="hero-copy"><p className="eyebrow">Macquarie University · Sydney, Australia</p><h1>The Lizard Lab</h1><p className="hero-lead">We investigate the behaviour, ecology and evolution of lizards—from colourful signals and flexible minds to the origins of family living.</p><div className="hero-actions"><Link className="button button-primary" href="/research/">Explore our research <ArrowRight aria-hidden="true" size={18}/></Link><Link className="button button-quiet" href="/people/">Meet the lab</Link></div></div>
      <div className="hero-art"><div className="hero-orbit" aria-hidden="true"/><img src="/images/imperator-copy.jpg" alt="Illustration of a colourful flat lizard" width="2500" height="500"/><span className="image-credit">Illustration: Erin Walsh</span></div>
    </section>
    <section className="section section-ink"><div className="page-shell"><div className="section-heading inverse"><p className="eyebrow">What we study</p><h2>Behaviour in an evolutionary world</h2><p>We combine fieldwork, experiments and comparative approaches, working mainly with lizards and occasionally with frogs, birds and other vertebrates.</p></div><div className="theme-grid">{themes.map(({icon: Icon,title,text},i)=><article className="theme-card" key={title}><span className="theme-number">0{i+1}</span><Icon aria-hidden="true" size={28}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section page-shell split-feature"><div className="feature-image"><img src="/images/field_montage_karidan2-2048x1140.jpg" alt="Lizard Lab researchers conducting fieldwork in arid environments" width="2048" height="1140"/></div><div className="feature-copy"><p className="eyebrow">From field to lab</p><h2>Questions shaped by natural behaviour</h2><p>Our work ranges from long-term studies in Australia, Africa and Asia to controlled behavioural experiments in large, semi-natural enclosures and cognition facilities.</p><Link className="text-link" href="/research/">Research themes and study systems <ArrowRight size={17}/></Link></div></section>
    <section className="section page-shell latest-strip"><div><p className="eyebrow">Research outputs</p><h2>Publications and lab stories</h2></div><div className="latest-actions"><Link className="mini-card" href="/publications/"><BookOpen/><span><strong>Publications</strong><small>Profiles, papers and metrics</small></span><ArrowRight/></Link><Link className="mini-card" href="/news/"><MessageCircle/><span><strong>Lab news</strong><small>Research stories from the archive</small></span><ArrowRight/></Link></div></section>
  </main><SiteFooter /></>;
}
