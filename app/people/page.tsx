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

const alumniPostdocs = [
  ["Simon Clulow", "2018–2020"], ["Simon Baeckens", "2019–2020"], ["Julia Riley", "2017"],
  ["Sergio Naretto", "2017"], ["Naïla Even", "2016–2017"], ["Daniel Noble", "2013–2015"],
  ["Pau Carazo", "2011"], ["Phil Byrne", "2006–2007 · Wits"], ["Lydia Du Toit", "2005 · Wits"],
  ["Jessica Stapley", "2004–2005 · Wits"], ["Devi Stuart-Fox", "2003–2006 · Wits"], ["Adnan Moussalli", "2003–2005 · Wits"],
];

const alumniStudents = [
  ["Kathy Potter", "MRes 2023"], ["Liam Agnew", "MRes 2022"], ["Levi Brown", "MRes 2023"], ["Ko-Huan Lee", "PhD 2022"],
  ["Kari Soennichsen", "MRes 2021"], ["Stephanie Deering", "MRes 2021"], ["James Madden", "MRes 2021"], ["Angela Simms", "MRes 2019"],
  ["Birgit Szabo", "PhD 2019"], ["Isabel Damas Moreira", "PhD 2019"], ["James Baxter-Gilbert", "PhD 2018"], ["Jodie Gruber", "PhD 2018"],
  ["Arnaud Badiane", "PhD 2018"], ["Julia Riley", "PhD 2017"], ["Fonti Kar", "MRes 2015"], ["Daniel Hoops", "PhD 2015"],
  ["Siobhan Dennison", "PhD 2015"], ["Marco Barquero", "PhD 2014"], ["Dan Noble", "PhD 2014"], ["Grant Webster", "Honours 2012 · Masters 2016"],
  ["Ben Clark", "Honours 2012"], ["Renata Kopena", "Visiting PhD 2012"], ["Mitch Scott", "Honours 2011–2012"], ["Kerrie Wechmann", "Honours 2011"],
  ["Martin van der Meer", "Honours 2007"], ["Melanie Ferreira-Martins", "Honours 2007"], ["Helen Place", "Honours 2006 · PhD 2012"],
  ["Trevor McIntyre", "MSc 2006"], ["Toby Hibbitts", "PhD 2006"], ["Luke Schutz", "Honours 2005"], ["Walter Reisinger", "Honours 2004"],
  ["Jörg Melzheimer", "Diploma 2003"], ["Kinesh Chetty", "Honours 2003"], ["Belinda Lewis", "Honours 2003 · MSc 2007"],
  ["Tasmin Rymer", "Honours 2002"], ["Kathy Hernstad", "Honours 2001"], ["Sue McConnachie", "Honours 2000 · PhD 2006"],
  ["Simon Lailvaux", "MSc 2002"], ["Leann Reaney", "MSc 2002"], ["Rhett Smart", "MSc 2001"], ["Monica Wyman", "Diploma 2001"],
  ["Lanral Ruddock", "MSc 2000"], ["Pius Korner", "Diploma 1999"],
];

const alumniHelpers = [
  ["2010–2012", "Viviana · Yian Yian Dam · Sebastian Schwarz · Marc Nardini · Ferdy Timmerman · Danny Boerrigter · Grant Napier · David Hamilton · Laura Hagemann · Moniek Poppe · Nicolas Butruille · Nicolas Villain · Martin Rossmanith · Suead Zamut · Yee Wah Lau · Sam Tesoriero · Stephanie Muenchau · Nathalie Lallemand De Driesen · Kathi Hinz · Aljoscha Kubassa"],
  ["2013–2017", "Stephanie Wilson · Tim Maher · Shanna Rose · Yvonne Skrzypczak · Floriane Passas · Maribel DeGuzman · Peta Vine · Elijah Elias · Lorene Chieze · Marie Favre · James Baxter-Gilbert · Côme Guidou · Caroline Fryns · Anna Küchler · Théo Damasio · Mitchell Francis · Jo Ocock · Sam Perkins · Dena Paris · Sarah Deventer · Josh Cunningham · Sam Ramsay · Beatrice Baraldi · Roxy Sultana · Matthieu Monserand · Max Mühlenhaupt · Maiana Lenoir"],
  ["2018–2023", "Sebastian Hoefer · Victorien Durand · Rebecca Loiseleur · Levin Wiedenroth · Victor Frichot · Jane Mademann · Faustine Degottex · Jordan Steele · Jonathan Ogle · Marco Monteiro · Kaitlin McCloghry · Constant Perry · Harry Fryer · Sam Brennan · Sami Richardson · Levi Brown · Sophie Hall · Jarrad Prangell · Phil Topham · Sébastien Chiasson D’Herbomez · Yieh Shing Tan · James Blackie · Clément Gourjade-Goselin · Kylian Miklos · Marlene Völker · Shane Lombardo · Millie Clark · Nik Desmet · Erik Ferraro · Liz Peni-Pearson · Will Bailes"],
  ["Husbandry team", "Peta Vine · Courtney Walcott · Heather Fisher · Michelle Lucietto · Kailyn Mclennan · Jarrad Barnes · Clare Ottaviano · Michelle Chan · Greg Everden · Li Levi · Laura Auckett · Jared Martin · Taylor Wilkinson · Jack Westacott · Teagan Parker Kielniacz · Luke Jeffery · Jordan Theobold · Joshua Cunningham · Ann Ching · Megan Johnson · Pandelitsa Yiasemides · Marco Monteiro · Daniel Ali · Tian Xing Yang"],
];

function NameList({ names }: { names: string[] }) {
  return <div className="people-name-list">{names.map((name) => <p key={name}>{name}</p>)}</div>;
}

export default function People() {
  return (
    <>
      <SiteHeader />
      <main className="people-page">
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
          <article className="people-section hall-of-fame" id="hall-of-fame">
            <p className="eyebrow">Lab alumni</p>
            <div className="people-section-layout"><h2>Hall of fame</h2><div><p>Former postdoctoral researchers, students, interns and volunteers form a global network of Lizard Lab alumni.</p><Link className="text-link" href="/gallery/">See visitors and group photos <ArrowRight aria-hidden="true" size={17} /></Link></div></div>
            <div className="alumni-group"><h3>Postdocs</h3><div className="alumni-list">{alumniPostdocs.map(([name, detail]) => <p key={name}><strong>{name}</strong><span>{detail}</span></p>)}</div></div>
            <div className="alumni-group"><h3>Students</h3><div className="alumni-list">{alumniStudents.map(([name, detail]) => <p key={`${name}-${detail}`}><strong>{name}</strong><span>{detail}</span></p>)}</div></div>
            <div className="alumni-group"><h3>Undergrads, volunteers and interns</h3><div className="alumni-years">{alumniHelpers.map(([period, names]) => <section key={period}><h4>{period}</h4><p>{names}</p></section>)}</div></div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
