import { useState } from 'react';
import './index.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { number: '01', title: 'Laboratory Design', text: 'Thoughtful spaces engineered around your workflow, safety standards, and long-term growth.' },
  { number: '02', title: 'Custom Fabrication', text: 'Precision-built furniture and infrastructure that performs beautifully under pressure.' },
  { number: '03', title: 'Project Delivery', text: 'One accountable partner from the first sketch to final installation and support.' },
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shidruk Technology home">
          <span className="brand-mark">S</span>
          <span>shidruk<span>technology</span></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">LAB INFRASTRUCTURE / 2026</p>
            <h1>Spaces that make<br /><em>progress</em> possible.</h1>
            <p className="hero-text">We design and build high-performance laboratory environments for the people moving science forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Talk to our team <Arrow /></a>
              <a className="text-link" href="#services">Explore capabilities <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Modern laboratory workspace">
            <div className="visual-grid" />
            <div className="visual-card"><span>01 / 04</span><strong>Built for<br />what's next.</strong></div>
            <div className="visual-circle" />
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">[ ABOUT US ]</div>
          <div>
            <h2>Infrastructure is more than a room. <span>It is a foundation for discovery.</span></h2>
            <div className="intro-bottom"><p>Shidruk Technology partners with ambitious teams to create laboratory environments where ideas can move from concept to reality. From a single workstation to a complete facility, we bring clarity, craft, and care to every detail.</p><a className="text-link dark" href="#contact">More about Shidruk <Arrow /></a></div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-top"><div className="section-label">[ WHAT WE DO ]</div><p>End-to-end expertise for<br />complex environments.</p></div>
          <div className="service-list">
            {services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}><Arrow /></a></article>)}
          </div>
        </section>

        <section className="statement"><p>Good design makes<br /><em>hard things feel simple.</em></p><span>— Our approach</span></section>

        <section className="process section" id="process">
          <div className="section-label">[ HOW WE WORK ]</div><div><h2>Clear thinking.<br /><span>Careful making.</span></h2><div className="process-steps"><div><b>01</b><strong>Listen</strong><p>We start by understanding your work, your team, and your ambition.</p></div><div><b>02</b><strong>Shape</strong><p>We translate complex requirements into an intentional, useful system.</p></div><div><b>03</b><strong>Deliver</strong><p>We build with precision and stay close until everything is exactly right.</p></div></div></div>
        </section>

        <section className="contact" id="contact"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make<br /><em>something matter.</em></h2></div><a className="button button-light" href="mailto:hello@shidruktechnology.com">Get in touch <Arrow /></a></section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark">S</span><span>shidruk<span>technology</span></span></a><p>Laboratory infrastructure for a better tomorrow.</p><span>© 2026 Shidruk Technology</span></footer>
    </div>
  );
}

export default App;
