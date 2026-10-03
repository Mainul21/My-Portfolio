import { FaArrowDown, FaArrowUp, FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedinIn, FaFileArrowDown } from "react-icons/fa6";

const projects = [
  { number: "01", title: "Core Banking System", type: "Full-stack application", description: "A banking simulation with authentication, transactions, loan management, role-based access and audit logging.", stack: ["React", "Node.js", "PostgreSQL"], href: "https://github.com/Mainul21/Core-Banking-System", live: "https://core-banking-system-850t.onrender.com", image: "https://opengraph.githubassets.com/1/Mainul21/Core-Banking-System" },
  { number: "02", title: "Meme Generator", type: "Full-stack application", description: "A web app for creating, customizing, saving, downloading and sharing memes with MongoDB-backed storage.", stack: ["React", "Node.js", "MongoDB"], href: "https://github.com/Mainul21/The-Meme-Project", image: "https://opengraph.githubassets.com/1/Mainul21/The-Meme-Project" },
  { number: "03", title: "NPS Dashboard", type: "Dashboard / API", description: "Business-unit filtering, personalized dashboards, NPS metrics, sentiment trends and a Node API layer.", stack: ["JavaScript", "Node.js", "Corteza"], href: "https://github.com/Mainul21/nps_dashboard", image: "https://opengraph.githubassets.com/1/Mainul21/nps_dashboard" },
];

const experience = [
  { period: "2026 — now", role: "Associate Software Engineer", company: "SELISE Digital Platforms", text: "Building payroll systems, calculation logic and REST APIs around country-specific compensation rules." },
  { period: "2025", role: "Intern Developer · Finance & Legal", company: "SELISE Digital Platforms", text: "Built Payroll Bangladesh workflows and automated internal finance processes on Corteza." },
  { period: "2025", role: "IT Intern", company: "City Bank PLC", text: "Worked on requirements, process flows, system visuals and technical documentation across multiple systems." },
];

const skills = ["JavaScript", "React", "Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Corteza", "Postman", "Git & GitHub", "Tailwind CSS"];

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">MHC<span>.</span></button>
          <nav aria-label="Primary navigation">
            <button onClick={() => scrollTo("work")}>Work</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("about")}>About</button>
          </nav>
          <a className="header-cta" href="https://github.com/Mainul21" target="_blank" rel="noreferrer">GitHub <FaArrowUpRightFromSquare /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-left">
            <p className="eyebrow">Associate Software Engineer · Dhaka</p>
            <h1>Mainul<br /><em>Hossain Chisty.</em></h1>
            <p className="hero-copy">I build software around real business problems — from payroll logic and workflow automation to APIs and full-stack web applications.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("work")}>Explore my work <FaArrowDown /></button>
              <a className="resume-link" href="https://drive.google.com/file/d/1rz3JM5ebBLyUKEB0BOWlOZV-D0YyfhRK/view?usp=drive_link" target="_blank" rel="noreferrer"><FaFileArrowDown /> Resume</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="portrait">
              <img src="/src/assets/images/Mainul.jpg" alt="Mainul Hossain Chisty" />
              <span>01 / 01</span>
            </div>
            <div className="hero-caption"><span>Currently</span><strong>Payroll & workflow systems</strong><small>SELISE Digital Platforms</small></div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="container">
            <div className="section-top"><div><p className="eyebrow">Selected work</p><h2>Things I've built.</h2></div><span className="section-index">01 — 03</span></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <a className="project-image" href={project.href} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} />
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
            <div className="section-top"><div><p className="eyebrow">Experience</p><h2>Where I've worked.</h2></div></div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.period + item.role}>
                  <span className="timeline-date">{item.period}</span>
                  <div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <div><p className="eyebrow">How I work</p><h2>From business rules to working systems.</h2></div>
            <div className="about-text">
              <p>My work sits between technology and business. I like understanding the real workflow first, then turning requirements into something people can actually use.</p>
              <p>That has meant payroll logic, APIs, internal automation, testing, documentation and plenty of conversations with developers and business stakeholders.</p>
              <div className="process"><span>01 Understand</span><span>02 Build</span><span>03 Test</span><span>04 Explain</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container skills-layout">
            <div><p className="eyebrow">Tools</p><h2>The stack.</h2></div>
            <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section className="education-section">
          <div className="container education-layout">
            <div><p className="eyebrow">Education</p><h2>B.Sc. in Computer Science</h2></div>
            <div><strong>BRAC University</strong><span>2021 — 2025</span><small>CGPA 3.36 / 4.00</small></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h2>Let's make something<br /><em>useful.</em></h2>
            <div className="contact-row">
              <a href="mailto:mainul.hossain.chisty@gmail.com">mainul.hossain.chisty@gmail.com <FaArrowUpRightFromSquare /></a>
              <div><a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a><a href="https://github.com/Mainul21" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="mailto:mainul.hossain.chisty@gmail.com"><FaEnvelope /> Email</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container"><span>© {new Date().getFullYear()} Mainul Hossain Chisty</span><button onClick={() => scrollTo("top")}>Back to top <FaArrowUp /></button></div></footer>
    </div>
  );
}

export default App;
