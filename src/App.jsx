import { useState } from "react";
import TechHeading from "./Components/TechHeading";
import { FaArrowDown, FaArrowUp, FaArrowUpRightFromSquare, FaChevronDown, FaEnvelope, FaGithub, FaLinkedinIn, FaFileArrowDown } from "react-icons/fa6";

const projects = [
  { number: "01", title: "Core Banking System", type: "Full-stack application", description: "A banking simulation with authentication, transactions, loan management, role-based access and audit logging.", stack: ["React", "Node.js", "PostgreSQL"], href: "https://github.com/Mainul21/Core-Banking-System", live: "https://core-banking-system-850t.onrender.com", image: "/projects/Core-Banking-System.webp" },
  { number: "02", title: "Meme Generator", type: "Full-stack application", description: "A web app for creating, customizing, saving, downloading and sharing memes with MongoDB-backed storage.", stack: ["React", "Node.js", "MongoDB"], href: "https://github.com/Mainul21/The-Meme-Project", image: "/projects/The-Meme-Project.webp" },
  { number: "03", title: "NPS Dashboard", type: "Dashboard / API", description: "Business-unit filtering, personalized dashboards, NPS metrics, sentiment trends and a Node API layer.", stack: ["JavaScript", "Node.js", "Corteza"], href: "https://github.com/Mainul21/nps_dashboard", image: "/projects/nps_dashboard.webp" },
  { number: "04", title: "Snake Game", type: "Browser game", description: "Classic snake with easy wrap-around and hard wall modes, score tracking and pause — compiled to WebAssembly to play in the browser.", stack: ["Python", "Pygame", "WebAssembly"], href: "https://github.com/Mainul21/Snake-Game", live: "https://mainul21.github.io/Snake-Game/", image: "/projects/Snake-Game.webp" },
];

const experience = [
  { period: "Jan 2026 — now", role: "Associate Software Engineer", company: "SELISE Digital Platforms", text: "Building payroll systems, calculation logic and REST APIs around country-specific compensation rules.", points: [
    "Owned the Bhutan payroll module — salary calculation, tax deduction and payslip generation — validating country-specific tax and compensation rules with a business analyst before implementation.",
    "Implemented country-specific payroll logic reconciling Bangladesh and Bhutan tax and compensation rules, turning regulatory requirements into working calculation logic.",
    "Built REST APIs (JavaScript, Corteza) to automate payroll workflows, testing endpoints with Postman as part of ongoing quality checks.",
  ] },
  { period: "Oct — Dec 2025", role: "Intern Developer · Finance & Legal", company: "SELISE Digital Platforms", text: "Built Payroll Bangladesh workflows and automated internal finance processes on Corteza.", points: [
    "Took primary ownership of building the Payroll Bangladesh system on Corteza, including yearly employee review and promotion workflow modules — from requirements to a working system.",
    "Automated internal finance workflows for the Finance & Legal division, reducing manual processing steps in existing operations.",
  ] },
  { period: "Feb — May 2025", role: "IT Intern", company: "City Bank PLC", text: "Worked on requirements, process flows, system visuals and technical documentation across multiple systems.", points: [
    "Gathered and consolidated requirements from developers, business analysts and independent research into accurate technical documentation for 3–5 systems.",
    "Created process flow diagrams and system visuals in Draw.io to communicate system architecture to development teams.",
    "Organised documentation in Microsoft Word and SharePoint, maintaining version control and access across teams.",
  ] },
];

const skills = [
  { group: "Languages & frameworks", items: ["JavaScript", "React", "Node.js", "Express", "Tailwind CSS"] },
  { group: "Data & APIs", items: ["REST APIs", "PostgreSQL", "MongoDB"] },
  { group: "Platforms & tools", items: ["Corteza", "Postman", "Git & GitHub"] },
];

const education = [
  { degree: "B.Sc. in Computer Science", school: "BRAC University", place: "Merul Badda, Dhaka", period: "2021 — 2025", result: "CGPA 3.36 / 4.00", image: "/education/brac.jpg" },
  { degree: "Higher Secondary Certificate", school: "Government Tolaram College", place: "Chashara, Narayanganj", period: "2020", result: "GPA 4.50 / 5.00", image: "/education/tolaram.jpg" },
  { degree: "Secondary School Certificate", school: "Titas Gas Adarsha High School", place: "Demra, Dhaka", period: "2018", result: "GPA 4.67 / 5.00", image: "/education/titas.jpg" },
];

const EMAIL = "mainul.hossain.chisty@gmail.com";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const socials = [
  { Icon: FaEnvelope, name: "Email", handle: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: FaLinkedinIn, name: "LinkedIn", handle: "in/mainulhossainchisty", href: "https://www.linkedin.com/in/mainulhossainchisty/" },
  { Icon: FaGithub, name: "GitHub", handle: "@Mainul21", href: "https://github.com/Mainul21" },
];

function ContactForm() {
  const [status, setStatus] = useState("idle");
  if (!WEB3FORMS_KEY) return <p className="form-note">The contact form isn&apos;t available right now. Please email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.</p>;

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...data, botcheck: form.botcheck.checked }) });
      if (!(await res.json()).success) throw new Error("rejected");
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Contact form failed:", err);
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New message from portfolio" />
      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>Name<input name="name" type="text" required maxLength={100} autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label>Message<textarea name="message" required maxLength={2000} rows={6} /></label>
      <button className="primary-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
      <p className="form-status" data-state={status} aria-live="polite">
        {status === "success" && "Thanks, your message was sent. I'll reply soon."}
        {status === "error" && `Something went wrong. Please try again or email ${EMAIL}.`}
      </p>
    </form>
  );
}

function App() {
  const [openJob, setOpenJob] = useState(null);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">MHC<span>.</span></button>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="https://github.com/Mainul21" target="_blank" rel="noreferrer">GitHub <FaArrowUpRightFromSquare /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-left">
            <p className="eyebrow">Associate Software Engineer · Dhaka</p>
            <TechHeading as="h1" text="Mainul" accent="Hossain Chisty." />
            <p className="hero-copy">I build software around real business problems — from payroll logic and workflow automation to APIs and full-stack web applications.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("work")}>Explore my work <FaArrowDown /></button>
              <a className="resume-link" href="/Mainul_Hossain_Chisty_Resume.pdf" target="_blank" rel="noreferrer"><FaFileArrowDown /> Resume</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="portrait">
              {/* eslint-disable-next-line react/no-unknown-property -- React 18 only passes lowercase fetchpriority */}
              <img src="/formal-photo.webp" alt="Mainul Hossain Chisty" width="600" height="822" fetchpriority="high" />
              <span>01 / 01</span>
            </div>
            <div className="hero-caption"><span>Currently</span><strong>Payroll & workflow systems</strong><small>SELISE Digital Platforms</small></div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="container">
            <div className="section-top"><div><p className="eyebrow">Selected work</p><TechHeading text="Things I've built." /></div><span className="section-index">01 — 04</span></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <a className="project-image" href={project.href} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" width="1200" height="600" />
                    <span>View project <FaArrowUpRightFromSquare /></span>
                  </a>
                  <div className="project-meta"><span>{project.number} / {project.type}</span><div>{project.stack.map((tag) => <b key={tag}>{tag}</b>)}</div></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom"><a href={project.href} target="_blank" rel="noreferrer">GitHub <FaGithub /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <FaArrowUpRightFromSquare /></a>}</div>
                </article>
              ))}
            </div>
            <a className="all-work" href="https://github.com/Mainul21?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <FaArrowUpRightFromSquare /></a>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="container">
            <div className="section-top"><div><p className="eyebrow">Experience</p><TechHeading text="Where I've worked." /></div></div>
            <div className="timeline">
              {experience.map((item, i) => (
                <article className="timeline-item" key={item.period + item.role}>
                  <span className="timeline-date">{item.period}</span>
                  <div>
                    <h3>{item.role}</h3><p className="company">{item.company}</p><p className="timeline-summary">{item.text}</p>
                    <button className="contrib-toggle" aria-expanded={openJob === i} aria-controls={`job-${i}`} onClick={() => setOpenJob(openJob === i ? null : i)}>Contributions <FaChevronDown /></button>
                    <div className="contrib" id={`job-${i}`} data-open={openJob === i}><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <div><p className="eyebrow">How I work</p><TechHeading text="From business rules to working systems." /></div>
            <div className="about-text">
              <p>My work sits between technology and business. I like understanding the real workflow first, then turning requirements into something people can actually use.</p>
              <p>That has meant payroll logic, APIs, internal automation, testing, documentation and plenty of conversations with developers and business stakeholders.</p>
              <div className="process"><span>01 Understand</span><span>02 Build</span><span>03 Test</span><span>04 Explain</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container skills-layout">
            <div><p className="eyebrow">Tools</p><TechHeading text="The stack." /></div>
            <div className="skill-groups">
              {skills.map(({ group, items }) => (
                <div className="skill-group" key={group}><h3>{group}</h3><div className="skills">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="container">
            <div className="section-top"><div><p className="eyebrow">Education</p><TechHeading text="Where I studied." /></div></div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <span className="timeline-date">{item.period}</span>
                  <div><h3>{item.degree}</h3><p className="company">{item.school}</p><small>{item.place}</small></div>
                  <strong>{item.result}</strong>
                  <img className="education-photo" src={item.image} alt="" loading="lazy" decoding="async" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <TechHeading text="Let's make something" accent="useful." />
            <div className="contact-grid">
              <div>
                <h3 className="contact-sub">Connect with me</h3>
                <ul className="social-list">
                  {socials.map(({ Icon, name, handle, href }) => (
                    <li key={name}><a href={href} {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}><Icon aria-hidden="true" /><span><strong>{name}</strong><small>{handle}</small></span></a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="contact-sub">Send a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container"><span>© {new Date().getFullYear()} Mainul Hossain Chisty</span><button onClick={() => scrollTo("top")}>Back to top <FaArrowUp /></button></div></footer>
    </div>
  );
}

export default App;
