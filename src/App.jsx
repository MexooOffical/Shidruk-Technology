const logoUrl = 'https://shidruktechnology.com/wp-content/uploads/2026/03/logo.png';
const linkedinUrl = 'https://in.linkedin.com/company/shidruktechnologypvtltd';
const heroImageUrl = 'https://www.image2url.com/r2/default/images/1789896210622-d7331806-a024-475b-810e-8ebcd1091cbc.jpg';
const aboutImageUrl = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'PRODUCTS', href: '#products', hasDropdown: true },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT US', href: '#contact' },
];

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.2 2l2.1 5.1-2.2 1.8a15.8 15.8 0 0 0 6 6l1.8-2.2L22 14.8l-.8 2.6a3 3 0 0 1-3.3 2.1C10.2 18.4 5.6 13.8 4.5 6.1a3 3 0 0 1 2.1-3.3Z" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm1 1 8 6 8-6M4 17.5l5.3-4M20 17.5l-5.3-4" /></svg>;
}

function FacebookIcon() { return <span className="facebook-icon" aria-hidden="true">f</span>; }
function LinkedinIcon() { return <span className="linkedin-icon" aria-hidden="true">in</span>; }

function HeroSection() {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroImageUrl})` }} aria-label="Advanced laboratory infrastructure">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          <span>Advanced Laboratory</span>
          <strong>Infrastructure Design &amp; Build</strong>
        </h1>
        <p>
          Designing, manufacturing, and delivering advanced laboratory infrastructure, integrating performance, aesthetics, and<br className="desktop-break" /> safety for pharmaceutical research and industrial environments.
        </p>
        <a className="hero-button" href="#contact">Get in Touch</a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <h2>About Us</h2>
        <div className="divider" aria-hidden="true" />
        <p>
          Shidruk Technology Private Limited is a laboratory solutions company incorporated in 2021 and headquartered in Rable, Navi Mumbai, Maharashtra, India. The company specializes in the design, manufacturing, and installation of modular laboratory furniture, fume hoods, exhaust systems, and essential laboratory utilities, delivering reliable and well-engineered infrastructure solutions.
        </p>
        <p>
          From concept design through manufacturing, installation, and ongoing support, we provide comprehensive laboratory solutions across pharmaceutical, research, chemical, healthcare, and educational sectors, enabling safe, efficient, and high-performance operations.
        </p>
        <a className="about-button" href="#capabilities">Explore Our Capabilities</a>
      </div>

      <div className="about-image-wrap">
        <img src={aboutImageUrl} alt="Laboratory furniture installation" />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="contact-details">
            <a href="tel:+919773450271" className="utility-item"><PhoneIcon /><span>+91 97734 50271</span></a>
            <a href="mailto:sales@shidruktechnology.com" className="utility-item"><MailIcon /><span>sales@shidruktechnology.com</span></a>
          </div>
          <div className="social-links" aria-label="Social media links">
            <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a href={linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="header-inner">
          <a className="brand-logo" href="#home" aria-label="Shidruk Technology home"><img src={logoUrl} alt="Shidruk Technology Pvt Ltd" /></a>
          <nav className="main-navigation" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`nav-link${item.hasDropdown ? ' has-dropdown' : ''}`}>
                <span>{item.label}</span>{item.hasDropdown && <span className="chevron" aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <a className="quote-button" href="#quote">Get a Quote</a>
          <button className="menu-toggle" type="button" aria-label="Open navigation menu"><span /><span /><span /></button>
        </div>
      </header>

      <HeroSection />
      <AboutSection />
    </div>
  );
}
