import { useEffect, useState } from 'react'
import {
  House, UserRound, Code2, Layers3, GraduationCap, Mail,
  Github, Instagram, Linkedin, ExternalLink, ArrowUpRight, Menu, X,
  MapPin, BriefcaseBusiness, Sparkles
} from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home', Icon: House },
  { id: 'about', label: 'About', Icon: UserRound },
  { id: 'projects', label: 'Projects', Icon: Code2 },
  { id: 'skills', label: 'Skills', Icon: Layers3 },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    category: 'WEB DEVELOPMENT',
    description: 'A personal portfolio website created to present personal information, skills, and projects using React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS'],
    accent: 'linear-gradient(135deg, rgba(34,211,238,.20), rgba(37,99,235,.05))',
  },
  {
    number: '02',
    title: 'Computer Course Management System',
    category: 'WEB APPLICATION',
    description: 'A Laravel-based web application developed as a learning project to manage courses, registrations, and administrative activities.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    accent: 'linear-gradient(135deg, rgba(167,139,250,.20), rgba(79,70,229,.05))',
  },
  {
    number: '03',
    title: 'E-Commerce Website',
    category: 'WEB DEVELOPMENT',
    description: 'A simple e-commerce website built with HTML, CSS, and JavaScript, then deployed using GitHub.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    accent: 'linear-gradient(135deg, rgba(52,211,153,.20), rgba(13,148,136,.05))',
  },
]

const technologies = ['React', 'Tailwind CSS', 'Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
const tools = ['Unity', 'GitHub']

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={() => goTo('home')}>
          <span className="brand-mark">R</span>
          <span>RAFFA<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`top-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <button key={id} className={active === id ? 'top-link active' : 'top-link'} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>
        <a className="top-contact" href="mailto:mraffa2905@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <span className="availability"><span className="status-dot" /> INFORMATICS ENGINEERING STUDENT</span>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Muhammad<br /><span>Raffa.</span></h1>
            <h2>Web Developer <span>&amp;</span> Tech Enthusiast</h2>
            <p className="hero-description">
              I’m an Informatics Engineering student at Universitas Budi Luhur with an interest in building modern web applications and exploring technology.
            </p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => goTo('projects')}>Explore my work <ArrowUpRight size={17} /></button>
              <button className="button-ghost" onClick={() => goTo('contact')}>Contact me</button>
            </div>
            <div className="hero-socials">
  <a href="https://github.com/MuhammadRaffa29" target="_blank" rel="noreferrer" aria-label="GitHub">
    <Github />
  </a>

  <a href="https://www.linkedin.com/in/muhammad-raffa-34648344b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
    <Linkedin />
  </a>

  <a href="https://www.instagram.com/mraffale_/" target="_blank" rel="noreferrer" aria-label="Instagram">
    <Instagram />
  </a>

  <a href="mailto:mraffa2905@gmail.com" aria-label="Email">
    <Mail />
  </a>
</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-glow" />
            <div className="portrait-ring">
              <img src="/profile.png" alt="Portrait of Muhammad Raffa" />
            </div>
            <div className="floating-card card-student"><GraduationCap size={18} /><span>Informatics<br />Engineering</span></div>
            <div className="floating-card card-location"><MapPin size={17} /><span>Indonesia</span></div>
            <div className="visual-caption">CREATIVE MINDSET <span>✳</span> CONTINUOUS LEARNING</div>
          </div>
          <button className="scroll-cue" onClick={() => goTo('about')}>SCROLL TO EXPLORE <span>↓</span></button>
        </section>

        <section id="about" className="content-section section-wrap">
          <SectionHeading eyebrow="01 / GET TO KNOW ME" title="About Me" description="A little introduction about who I am and what I enjoy learning." />
          <div className="about-grid">
            <div className="about-main glass-card">
              <span className="card-icon"><UserRound /></span>
              <h3>Curious by nature.<br /><span>Driven by technology.</span></h3>
              <p>I am a student of Informatics Engineering at Universitas Budi Luhur. I enjoy learning how digital products are designed and developed, especially websites and interactive applications.</p>
              <p>Through coursework and personal projects, I have explored web development, database management, and game development. I’m continuously building my knowledge one project at a time.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span>01</span><div><strong>Web Development</strong><small>Building responsive web experiences</small></div></div>
              <div className="fact-card"><span>02</span><div><strong>Game Development</strong><small>Exploring Unity and interactive ideas</small></div></div>
              <div className="fact-card"><span>03</span><div><strong>Always Learning</strong><small>Growing through practice and projects</small></div></div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section section-wrap">
          <SectionHeading eyebrow="02 / SELECTED WORK" title="Featured Projects" description="Some projects I have worked on while learning and practicing development." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-art" style={{ background: project.accent }}>
                  <span className="project-number">{project.number} / PROJECT</span>
                  <Code2 size={54} strokeWidth={1.1} />
                  <span className="project-art-label">BUILD • LEARN • IMPROVE</span>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section section-wrap">
          <SectionHeading eyebrow="03 / WHAT I USE" title="Skills & Tools" description="Technologies I have explored through learning and project work." />
          <div className="skills-grid">
            <div className="glass-card skill-panel">
              <span className="card-icon"><Code2 /></span>
              <h3>Web Technologies</h3>
              <p>Technologies used across my website and application projects.</p>
              <div className="skill-chips">{technologies.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="glass-card skill-panel">
              <span className="card-icon"><BriefcaseBusiness /></span>
              <h3>Tools & Software</h3>
              <p>Tools I currently use for development and version control.</p>
              <div className="skill-chips">{tools.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="education" className="content-section section-wrap">
          <SectionHeading eyebrow="04 / MY BACKGROUND" title="Education" description="The academic journey behind my interest in technology." />
          <div className="education-card glass-card">
            <div className="education-icon"><GraduationCap size={27} /></div>
            <div>
              <span className="project-category">HIGHER EDUCATION</span>
              <h3>Universitas Budi Luhur</h3>
              <p>Informatics Engineering</p>
              <small>Indonesia</small>
            </div>
            <span className="education-badge">Student</span>
          </div>
        </section>

        <section id="contact" className="content-section section-wrap contact-section">
          <SectionHeading eyebrow="05 / GET IN TOUCH" title="Let's Connect" description="Have a question or want to connect? Feel free to reach out." />
          <div className="contact-card">
            <div>
              <span className="project-category">SAY HELLO</span>
              <h3>Let’s create<br /><span>something meaningful.</span></h3>
              <p>I’m always open to learning, sharing ideas, and connecting with others.</p>
            </div>
            <div className="contact-links">
  <a href="mailto:mraffa2905@gmail.com">
    <Mail />
    <span>
      <small>EMAIL</small>
      mraffa2905@gmail.com
    </span>
    <ExternalLink />
  </a>

  <a href="https://www.linkedin.com/in/muhammad-raffa-34648344b/" target="_blank" rel="noreferrer">
    <Linkedin />
    <span>
      <small>LINKEDIN</small>
      Muhammad Raffa
    </span>
    <ExternalLink />
  </a>

  <a href="https://www.instagram.com/mraffale_/" target="_blank" rel="noreferrer">
    <Instagram />
    <span>
      <small>INSTAGRAM</small>
      @mraffale_
    </span>
    <ExternalLink />
  </a>

  <a href="https://github.com/MuhammadRaffa29" target="_blank" rel="noreferrer">
    <Github />
    <span>
      <small>GITHUB</small>
      MuhammadRaffa29
    </span>
    <ExternalLink />
  </a>
</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home" onClick={() => goTo('home')}><span className="brand-mark">R</span><span>RAFFA<span className="brand-dot">.</span></span></a>
        <p>Designed & built with curiosity by Muhammad Raffa.</p>
        <span>© {new Date().getFullYear()} • All rights reserved</span>
      </footer>

      <nav className="bottom-dock" aria-label="Main navigation">
        {navItems.map(({ id, label, Icon }) => (
          <button key={id} onClick={() => goTo(id)} className={active === id ? 'dock-item active' : 'dock-item'} aria-label={label} title={label}>
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App