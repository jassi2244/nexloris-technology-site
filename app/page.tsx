import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import ContactForm from "./components/ContactForm";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
};

const services = [
  {
    icon: "◫",
    title: "Website Design & Development",
    text: "Fast, responsive and polished websites built to make your business look credible and convert visitors into enquiries.",
  },
  {
    icon: "◆",
    title: "Custom Software",
    text: "Business-specific software designed around your workflows, users and long-term growth instead of a one-size-fits-all template.",
  },
  {
    icon: "</>",
    title: "Web Applications",
    text: "Secure, scalable applications for portals, dashboards, internal systems, customer platforms and digital products.",
  },
  {
    icon: "↔",
    title: "APIs & Integrations",
    text: "Reliable integrations that connect your systems, third-party services, databases and automation workflows.",
  },
  {
    icon: "◎",
    title: "SaaS & Digital Products",
    text: "From MVP to production-ready product, we help shape, build and improve subscription-based software experiences.",
  },
  {
    icon: "✦",
    title: "AI-Enabled Solutions",
    text: "Practical AI features and automation where they genuinely improve speed, customer experience or business operations.",
  },
  {
    icon: "▦",
    title: "E-commerce Solutions",
    text: "Clean, conversion-focused online experiences for businesses that want to sell products or services digitally.",
  },
  {
    icon: "⌁",
    title: "Maintenance & Support",
    text: "Ongoing improvements, bug fixes, performance work and technical support after launch.",
  },
];

const process = [
  ["01", "Discover", "We understand your business, users, goals, existing setup and what success should look like."],
  ["02", "Plan", "We define scope, priorities, milestones, technology direction and a realistic delivery plan."],
  ["03", "Design & Build", "We turn the approved direction into a polished, responsive and production-ready solution."],
  ["04", "Test", "We check usability, responsiveness, key flows, performance and edge cases before launch."],
  ["05", "Launch", "We deploy, connect the required services and make sure the handover is clear and practical."],
  ["06", "Support", "We stay available for improvements, maintenance and the next phase of your product."],
];

const work = [
  {
    eyebrow: "UAE · Interior Design & Fit-Out",
    title: "Design Evolution",
    description:
      "A premium, responsive digital experience designed to present services and projects with a cleaner brand presence and enquiry-focused journey.",
    tags: ["Corporate Website", "Responsive UI", "Project Showcase"],
    image: "/design-evolution.webp",
    className: "work-card work-blue",
  },
  {
    eyebrow: "India · Stock Market Education",
    title: "Chart Academy",
    description:
      "A lead-generation website structured around courses, trainer credibility, enquiries and clear conversion paths for online and offline learners.",
    tags: ["Education", "Lead Generation", "Responsive Website"],
    image: "/chart-academy.webp",
    className: "work-card work-teal",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="content" tabIndex={-1}>
      <a className="skip-link" href="#top">Skip to content</a>
      <Navigation />

      <section className="hero" id="top" tabIndex={-1}>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="grid-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CHANDIGARH, INDIA · WORKING WORLDWIDE</p>
            <h1>
              Websites. Software.
              <span> Digital Solutions.</span>
            </h1>
            <p className="hero-lead">
              We help businesses turn ideas into modern, reliable and scalable digital products, from high-quality websites to custom software and connected applications.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">Start a Project <Arrow /></a>
              <a className="button button-secondary" href="#work">View Our Work</a>
            </div>
            <div className="hero-points" aria-label="Nexloris strengths">
              <span>Business-focused</span>
              <span>Modern & responsive</span>
              <span>Technology-flexible</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-panel">
              <div className="visual-topbar"><i /><i /><i /></div>
              <div className="visual-logo">
                <Image src="/nexloris-logo.png" alt="" width={112} height={112} sizes="112px" />
              </div>
              <p>TURNING IDEAS INTO</p>
              <strong>REAL DIGITAL IMPACT</strong>
              <div className="visual-lines"><span /><span /><span /></div>
            </div>
            <div className="floating-chip chip-one">Web Applications</div>
            <div className="floating-chip chip-two">APIs & Integrations</div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <p>BUILT AROUND YOUR BUSINESS, NOT A FIXED STACK.</p>
          <div className="tech-list" aria-label="Technology capabilities">
            <span>.NET</span><span>React</span><span>Next.js</span><span>APIs</span><span>SQL</span><span>Cloud</span><span>AI</span>
          </div>
        </div>
      </section>

      <section className="section" id="services" tabIndex={-1}>
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>End-to-end digital solutions.</h2>
            </div>
            <p>We choose the approach and technology based on the problem, scope and long-term needs of each project.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="work" tabIndex={-1}>
        <div className="container">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Work designed to make businesses look and work better.</h2>
            </div>
            <p>Websites for interior design and education, built around clear services, project presentation and enquiries.</p>
          </div>
          <div className="work-grid">
            {work.map((project) => (
              <article className={project.className} key={project.title}>
                <div className="work-screen">
                  <div className="mini-nav"><span /><span /><span /></div>
                  <div className="work-shot">
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 980px) 85vw, 550px"
                      className="work-shot-image"
                    />
                  </div>
                </div>
                <div className="work-body">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" tabIndex={-1}>
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT NEXLORIS</p>
            <h2>Small, focused and built to deliver.</h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              Nexloris Technology is a web and software development studio helping businesses build modern websites, custom applications, integrations and digital products.
            </p>
            <p>
              We stay intentionally flexible. The goal is not to force every project into one framework or technology. The goal is to understand the requirement, choose a sensible approach and deliver something reliable, maintainable and useful.
            </p>
            <div className="value-grid">
              <div><strong>01</strong><span>Clear communication</span></div>
              <div><strong>02</strong><span>Business-first thinking</span></div>
              <div><strong>03</strong><span>Clean user experience</span></div>
              <div><strong>04</strong><span>Scalable foundations</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process" tabIndex={-1}>
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>A clear path from idea to launch.</h2>
            </div>
            <p>Simple enough to move quickly, structured enough to keep scope, quality and expectations clear.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article className="process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" tabIndex={-1}>
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">LET'S BUILD TOGETHER</p>
            <h2>Have an idea? Let&apos;s turn it into something real.</h2>
            <p>Tell us what you are building, improving or trying to solve. We will get back to you with the next practical step.</p>
            <div className="contact-details">
              <a href="mailto:nexloristechnology@gmail.com">nexloristechnology@gmail.com</a>
              <span>Chandigarh, India · Working Worldwide</span>
              <a href="https://www.linkedin.com/company/nexloris-technology" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <a className="brand" href="#top">
            <Image src="/nexloris-logo.png" alt="Nexloris Technology" width={42} height={42} sizes="42px" />
            <span><strong>NEXLORIS</strong><small>TECHNOLOGY</small></span>
          </a>
          <p>Websites. Software. Digital Solutions.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
          <small>© 2026 Nexloris Technology. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}
