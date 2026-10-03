import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedinIn, FaFileArrowDown } from "react-icons/fa6";

const projects = [
  { number: "01", title: "Core Banking System", type: "Academic prototype", description: "A full-stack banking simulation covering authentication, transactions, loan management, role-based access, and audit logging.", stack: ["React", "Node.js", "Express", "PostgreSQL"], href: "https://github.com/Mainul21/Core-Banking-System", live: "https://core-banking-system-850t.onrender.com" },
  { number: "02", title: "Meme Generator", type: "Full-stack application", description: "A React and Node application for creating, customizing, saving, downloading, and sharing memes with MongoDB-backed storage.", stack: ["React", "Node.js", "Express", "MongoDB"], href: "https://github.com/Mainul21/The-Meme-Project" },
  { number: "03", title: "NPS Dashboard", type: "Dashboard / API project", description: "A dashboard with email-based business-unit filtering, personalized views, NPS metrics, sentiment trends, and a small Node API layer.", stack: ["JavaScript", "Node.js", "REST API", "Corteza"], href: "https://github.com/Mainul21/nps_dashboard" },
];

const capabilities = [
  { title: "Business analysis", text: "Requirements validation, functional thinking, stakeholder communication, and translating business rules into implementable behaviour." },
  { title: "Software development", text: "JavaScript-based applications, REST APIs, React interfaces, Node.js services, and relational or document databases." },
  { title: "Quality & testing", text: "API testing, functional and regression testing, defect identification, test cases, and working across the SDLC." },
  { title: "Systems & documentation", text: "Technical documentation, process flows, system visuals, workflow automation, and making complex processes easier to follow." },
];

const experience = [
  { period: "Jan 2026 — Present", role: "Associate Software Engineer", company: "SELISE Digital Platforms", points: ["Own development of a Bhutan payroll module covering salary calculation, tax deduction, and payslip generation.", "Translate country-specific tax and compensation rules into working calculation logic with business-analyst validation.", "Build REST APIs with JavaScript and Corteza and test endpoints with Postman."] },
  { period: "Oct 2025 — Dec 2025", role: "Intern Developer — Finance & Legal", company: "SELISE Digital Platforms", points: ["Built the Payroll Bangladesh system on Corteza, including yearly employee review and promotion workflows.", "Automated internal finance workflows and reduced manual processing steps."] },
  { period: "Feb 2025 — May 2025", role: "Intern — Information Technology", company: "City Bank PLC", points: ["Gathered requirements from developers, business analysts, and independent research for 3–5 systems.", "Created process flow diagrams and system visuals and maintained technical documentation in Word and SharePoint."] },
];

function SectionHeading({ eyebrow, title, intro }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>; }

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="site-shell">
      <header className="site-header"><div className="container header-inner">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">MHC<span>.</span></button>
        <nav className="desktop-nav" aria-label="Primary navigation">{["work", "experience", "about", "contact"].map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}</nav>
        <a className="header-link" href="https://github.com/Mainul21" target="_blank" rel="noreferrer">GitHub <FaArrowUpRightFromSquare /></a>
      </div></header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Associate Software Engineer · Dhaka, Bangladesh</p>
            <h1>Mainul Hossain<span>Chisty.</span></h1>
            <p className="hero-summary">Associate Software Engineer building internal systems, workflow automation, and web applications.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo("work")}>See selected work <FaArrowDown /></button><a className="text-link" href="https://drive.google.com/file/d/1rz3JM5ebBLyUKEB0BOWlOZV-D0YyfhRK/view?usp=drive_link" target="_blank" rel="noreferrer"><FaFileArrowDown /> Resume</a></div>
          </div>
          <aside className="hero-note"><div className="portrait-frame"><img src="/src/assets/images/Mainul.jpg" alt="Mainul Hossain Chisty" /></div><div className="hero-note-copy"><span>Currently</span><strong>Building payroll & workflow systems</strong><small>SELISE Digital Platforms</small></div></aside>
        </section>
        <div className="container rule" />

        <section id="work" className="section container">
          <SectionHeading eyebrow="Selected work" title="A few things I have actually built." intro="No inflated case studies. Just a short selection of projects that show how I approach applications, APIs, data, and business logic." />
          <div className="project-list">{projects.map((project) => <article className="project-row" key={project.title}><span className="project-number">{project.number}</span><div className="project-main"><div className="project-title-line"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><div className="project-links"><a href={project.href} target="_blank" rel="noreferrer" aria-label={project.title + " on GitHub"}><FaGithub /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={project.title + " live demo"}><FaArrowUpRightFromSquare /></a>}</div></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          <div className="section-footer-link"><a href="https://github.com/Mainul21?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <FaArrowUpRightFromSquare /></a></div>
        </section>

        <section id="experience" className="section section-muted"><div className="container"><SectionHeading eyebrow="Experience" title="Where I have worked." intro="My professional work sits between implementation, business rules, testing, and documentation." /><div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.company + item.period}><div className="experience-period">{item.period}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></div></section>

        <section id="about" className="section container"><div className="about-grid"><SectionHeading eyebrow="About" title="More interested in useful software than impressive-sounding software." /><div className="about-copy"><p>My background is in Computer Science, but my recent work has pushed me closer to the space between technology and business. I enjoy understanding how a process is supposed to work, finding the gaps, and then building or testing the system around it.</p><p>That has meant working with developers, business analysts, finance and HR stakeholders, country-specific payroll rules, APIs, technical documentation, and quality checks—not just writing UI code.</p></div></div><div className="capability-grid">{capabilities.map((item, index) => <article key={item.title} className="capability"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

        <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Tools & technologies" title="The stack I actually use." intro="A compact view of the technologies that show up across my projects and professional work." /><div className="skills-list">{["JavaScript","React","Node.js","Express","PostgreSQL","MongoDB","REST APIs","Corteza","Postman","Git & GitHub","HTML & CSS","Tailwind CSS"].map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

        <section className="section section-muted"><div className="container education-strip"><div><p className="eyebrow">Education</p><h2>B.Sc. in Computer Science</h2></div><div className="education-meta"><strong>BRAC University</strong><span>2021 — 2025 · CGPA 3.36 / 4.00</span></div></div></section>

        <section id="contact" className="contact-section container"><div><p className="eyebrow">Contact</p><h2>Have a project, role, or problem worth discussing?</h2></div><div className="contact-side"><a className="contact-email" href="mailto:mainul.hossain.chisty@gmail.com">mainul.hossain.chisty@gmail.com <FaArrowUpRightFromSquare /></a><div className="social-links"><a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a><a href="https://github.com/Mainul21" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="mailto:mainul.hossain.chisty@gmail.com"><FaEnvelope /> Email</a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Mainul Hossain Chisty</span><button onClick={() => scrollTo("top")}>Back to top <FaArrowUp /></button></div></footer>
    </div>
  );
}

export default App;