import { Routes, Route, Link } from 'react-router-dom';

const navItems = ['Home', 'About', 'Services', 'Solutions', 'Contact'];

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Future-ready digital partner</p>
          <h1>Building smarter digital experiences for modern businesses.</h1>
          <p className="lead">
            Shidruk Technology Private Limited creates technology-driven business
            systems, websites, and digital experiences that help organisations grow
            with confidence.
          </p>
          <div className="cta-row">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-stat">
            <span>Projects</span>
            <strong>150+</strong>
          </div>
          <div className="mini-stat">
            <span>Years</span>
            <strong>8+</strong>
          </div>
          <div className="mini-stat">
            <span>Support</span>
            <strong>24/7</strong>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div className="section-card">
          <h3>Web Development</h3>
          <p>Modern, scalable, and performance-focused web solutions.</p>
        </div>
        <div className="section-card">
          <h3>Business Solutions</h3>
          <p>Tools and systems designed to improve workflows and efficiency.</p>
        </div>
        <div className="section-card">
          <h3>Digital Strategy</h3>
          <p>Growth-focused planning for brands, products, and platform ideas.</p>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-shell inner-page">
      <h2>About Us</h2>
      <p>
        Shidruk Technology Private Limited is focused on helping companies operate
        smarter through purposeful digital transformation.
      </p>
    </main>
  );
}

function ServicesPage() {
  return (
    <main className="page-shell inner-page">
      <h2>Our Services</h2>
      <p>Web development, product design, digital consulting, and business technology support.</p>
    </main>
  );
}

function SolutionsPage() {
  return (
    <main className="page-shell inner-page">
      <h2>Solutions</h2>
      <p>Custom business apps, websites, operational systems, and digital growth services.</p>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page-shell inner-page">
      <h2>Contact</h2>
      <p>Let’s build something meaningful for your business.</p>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-layout">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-name">Shidruk</div>
            <div className="brand-subtitle">Technology Pvt. Ltd.</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>

        <button className="nav-cta">Book a Call</button>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
