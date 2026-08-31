import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { FOOTER_LEGAL_LINKS, FOOTER_SECTIONS } from "./Footer.data";

import { footerStyles } from "./Footer.styles";
import Button from "@/components/ui/Button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Newsletter API integration will be added later.
    setEmail("");
  };

  return (
    <footer className={footerStyles.root}>
      <div className={footerStyles.container}>
        <div className={footerStyles.main}>
          <div className={footerStyles.brand}>
            <Link to="/" className={footerStyles.logo}>
              Market<span className={footerStyles.logoAccent}>Hub</span>
            </Link>

            <p className={footerStyles.description}>
              Discover products from trusted sellers and shop everything you
              need in one marketplace.
            </p>
          </div>

          <div className={footerStyles.linkColumns}>
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className={footerStyles.sectionTitle}>{section.title}</h3>

                <ul className={footerStyles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className={footerStyles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={footerStyles.newsletter}>
            <h3 className={footerStyles.newsletterTitle}>Stay in the loop</h3>

            <p className={footerStyles.newsletterDescription}>
              Get updates about new products, offers, and marketplace deals.
            </p>

            <form
              className={footerStyles.newsletterForm}
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className={footerStyles.input}
                required
              />

              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className={footerStyles.bottom}>
          <p>© {new Date().getFullYear()} MarketHub. All rights reserved.</p>

          <div className={footerStyles.legalLinks}>
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={footerStyles.legalLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
