import './sections.css';

const logoUrl = 'https://shidruktechnology.com/wp-content/uploads/2026/03/logo.png';
const linkedinUrl = 'https://in.linkedin.com/company/shidruktechnologypvtltd';
const heroImageUrl = 'https://www.image2url.com/r2/default/images/1789896210622-d7331806-a024-475b-810e-8ebcd1091cbc.jpg';
const aboutImageUrl = 'https://shidruktechnology.com/wp-content/uploads/2026/05/a5960141-ab7e-4267-a02b-fd2f1bac9aa7.jpg';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'PRODUCTS', href: '#products', hasDropdown: true },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT US', href: '#contact' },
];

const products = [
  { title: 'Laboratory Fume Hoods', image: 'https://shidruktechnology.com/wp-content/uploads/2026/05/Frame-159-1024x1024.png', text: 'Controlled airflow, safe containment, and reliable performance ensuring stable, efficient, and secure laboratory operations with consistent operational control.' },
  { title: 'Island Table', image: 'https://shidruktechnology.com/wp-content/uploads/2026/05/Frame-158-1024x1024.png', text: 'Durable central workstation with spacious layout, workflow efficiency, and safe laboratory operation support ensuring stable performance.' },
  { title: 'Wall Type Table', image: 'https://shidruktechnology.com/wp-content/uploads/2026/05/Frame-160-1024x1024.png', text: 'Durable wall-mounted tables designed for space efficiency, workflow support, and safe laboratory operations.' },
  { title: 'Customized Storage Cupboards', image: 'https://shidruktechnology.com/wp-content/uploads/2026/05/Frame-161-1024x1024.png', text: 'Customized storage cupboards supporting safe chemical storage, glassware organization, reagent handling, and efficient laboratory workflow.' },
];

const industries = ['Pharmaceuticals & Life Sciences', 'Chemical Industry', 'Biotechnology', 'Animal Breeding & Veterinary', 'Mobility & Energy', 'Education & Academic Institutions', 'Food & Beverage', 'Testing & Research Laboratories', 'Healthcare & Hospitals'];

function PhoneIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.2 2l2.1 5.1-2.2 1.8a15.8 15.8 0 0 0 6 6l1.8-2.2L22 14.8l-.8 2.6a3 3 0 0 1-3.3 2.1C10.2 18.4 5.6 13.8 4.5 6.1a3 3 0 0 1 2.1-3.3Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm1 1 8 6 8-6M4 17.5l5.3-4M20 17.5l-5.3-4" /></svg>; }
function FacebookIcon() { return <span className="facebook-icon" aria-hidden="true">f</span>; }
function LinkedinIcon() { return <span className="linkedin-icon" aria-hidden="true">in</span>; }

function SectionHeading({ title, subtitle }) {
  return <div className="section-heading"><h2>{title}</h2><div className="heading-divider" aria-hidden="true" /><p>{subtitle}</p></div>;
}

function HeroSection() {
  return <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroImageUrl})` }} aria-label="Advanced laboratory infrastructure"><div className="hero-overlay" /><div className="hero-content"><h1><span>Advanced Laboratory</span><strong>Infrastructure Design &amp; Build</strong></h1><p>Designing, manufacturing, and delivering advanced laboratory infrastructure, integrating performance, aesthetics, and<br className="desktop-break" /> safety for pharmaceutical research and industrial environments.</p><a className="hero-button" href="#contact">Get in Touch</a></div></section>;
}

function AboutSection() {
  return <section id="about" className="about-section"><div className="about-copy"><h2>About Us</h2><div className="divider" aria-hidden="true" /><p>Shidruk Technology Private Limited is a laboratory solutions company incorporated in 2021 and headquartered in Rabale, Navi Mumbai, Maharashtra, India. The company specializes in the design, manufacturing, and installation of modular laboratory furniture, fume hoods, exhaust systems, and essential laboratory utilities, delivering reliable and well-engineered infrastructure solutions.</p><p>From concept design through manufacturing, installation, and ongoing support, we provide comprehensive laboratory solutions across pharmaceutical, research, chemical, healthcare, and educational sectors, enabling safe, efficient, and high-performance operations.</p><a className="about-button" href="#products">Explore Our Capabilities</a></div><div className="about-image-wrap"><img src={aboutImageUrl} alt="Laboratory furniture installation" /></div></section>;
}

function StatsSection() {
  return <section className="stats-section"><div><strong>10<sup>+</sup></strong><span>Projects Completed</span></div><div><strong>100<sup>%</sup></strong><span>Client Satisfaction</span></div><div><strong>10,000<sup>+</sup></strong><span>Sq. Ft Manufacturing Facility</span></div><div><strong>5<sup>+</sup></strong><span>Years Industry Experience</span></div></section>;
}

function ProductsSection() {
  return <section id="products" className="products-section"><SectionHeading title="Key Offerings" subtitle="Modern Lab Infrastructure Solutions" /><div className="product-grid">{products.map((product) => <article className="product-card" key={product.title}><img src={product.image} alt={product.title} /><div className="product-card-body"><h3>{product.title}</h3><p>{product.text}</p><a href="#contact">Explore More</a></div></article>)}</div></section>;
}

function IndustriesSection() {
  return <section id="solutions" className="industries-section"><SectionHeading title="Industries We Serve" subtitle="Providing specialized laboratory infrastructure across diverse high-precision sectors." /><div className="industry-grid">{industries.map((industry, index) => <div className="industry-item" key={industry}><span className="industry-icon" aria-hidden="true">{['⚕', '⚗', '🧬', '⚕', 'ϟ', '⌂', '♜', '⚗', '▣'][index]}</span><h3>{industry}</h3></div>)}</div></section>;
}

function Footer() {
  return <footer id="contact" className="site-footer"><div className="footer-grid"><div><img src={logoUrl} alt="Shidruk Technology" className="footer-logo" /><p>The company specializes in the design, manufacturing, and installation of modular laboratory furniture, fume hoods, exhaust systems, and essential laboratory utilities.</p><div className="footer-social"><a href="#facebook">f</a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">in</a></div></div><div><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#solutions">Solutions</a><a href="#products">Gallery</a><a href="#contact">Contact Us</a></div><div><h3>Products</h3><a href="#products">Fume Hood</a><a href="#products">Laboratory Furniture</a><a href="#products">Customized Laboratory Products</a><a href="#products">Walk-In Fume Hood</a></div><div><h3>Contact Us</h3><p>Plot No. 88, R879, Rabale MIDC Road, near Golden Garage, Sector 8, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701</p><a href="mailto:sales@shidruktechnology.com">sales@shidruktechnology.com</a><a href="tel:+919773450271">+91 97734 50271</a></div></div><div className="copyright">©2026 Shidruk Technology Pvt Ltd. All Rights Reserved.</div></footer>;
}

export default function App() {
  return <div className="site-shell"><div className="utility-bar"><div className="utility-inner"><div className="contact-details"><a href="tel:+919773450271" className="utility-item"><PhoneIcon /><span>+91 97734 50271</span></a><a href="mailto:sales@shidruktechnology.com" className="utility-item"><MailIcon /><span>sales@shidruktechnology.com</span></a></div><div className="social-links"><a href="#facebook" aria-label="Facebook"><FacebookIcon /></a><a href={linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a></div></div></div><header className="main-header"><div className="header-inner"><a className="brand-logo" href="#home" aria-label="Shidruk Technology home"><img src={logoUrl} alt="Shidruk Technology Pvt Ltd" /></a><nav className="main-navigation" aria-label="Primary navigation">{navItems.map((item) => <a key={item.label} href={item.href} className="nav-link"><span>{item.label}</span>{item.hasDropdown && <span className="chevron" aria-hidden="true" />}</a>)}</nav><a className="quote-button" href="#contact">Get a Quote</a><button className="menu-toggle" type="button" aria-label="Open navigation menu"><span /><span /><span /></button></div></header><HeroSection /><AboutSection /><StatsSection /><ProductsSection /><IndustriesSection /><Footer /><a className="whatsapp-button" href="https://wa.me/919773450271" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">☎</a></div>;
}
