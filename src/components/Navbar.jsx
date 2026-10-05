import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Navbar.module.css";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container ${styles.navWrapper}`}>
        <a href="#" className={styles.logo}>
          Dennis<span className={styles.dot}>.</span>dev
        </a>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <ThemeToggle />
          <a
            href="https://github.com/talk2dennis"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className={styles.iconBtn}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/talk2dennis"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className={styles.iconBtn}
          >
            <FaLinkedin size={18} />
          </a>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
