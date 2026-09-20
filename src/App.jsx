const logoUrl = 'https://shidruktechnology.com/wp-content/uploads/2026/03/logo.png';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'PRODUCTS', href: '#products', hasDropdown: true },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT US', href: '#contact' },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 2.8 9.2 2l2.1 5.1-2.2 1.8a15.8 15.8 0 0 0 6 6l1.8-2.2L22 14.8l-.8 2.6a3 3 0 0 1-3.3 2.1C10.2 18.4 5.6 13.8 4.5 6.1a3 3 0 0 1 2.1-3.3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.5h18v13H3v-13Zm1 1 8 6 8-6M4 17.5l5.3-4M20 17.5l-5.3-4" />
    </svg>
  );
}

function FacebookIcon() {
  return <span className="facebook-icon" aria-hidden="true">f</span>;
}

function LinkedinIcon() {
  return <span className="linkedin-icon" aria-hidden="true">in</span>;
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="contact-details">
            <a href="tel:+919773450271" className="utility-item">
              <PhoneIcon />
              <span>+91 97734 50271</span>
            </a>
            <a href="mailto:sales@shidruktechnology.com" className="utility-item">
              <MailIcon />
              <span>sales@shidruktechnology.com</span>
            </a>
          </div>
          <div className="social-links" aria-label="Social media links">
            <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#linkedin" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="header-inner">
          <a className="brand-logo" href="#home" aria-label="Shidruk Technology home">
            <img src={logoUrl} alt="Shidruk Technology Pvt Ltd" />
          </a>

          <nav className="main-navigation" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`nav-link${item.hasDropdown ? ' has-dropdown' : ''}`}>
                <span>{item.label}</span>
                {item.hasDropdown && <span className="chevron" aria-hidden="true" />}
              </a>
            ))}
          </nav>

          <a className="quote-button" href="#quote">Get a Quote</a>
          <button className="menu-toggle" type="button" aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </div>
  );
}
