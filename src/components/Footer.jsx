import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import styles from "./Footer.module.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Dennis Chiedu Adigwe. Built with React,
          Pure CSS & Framer Motion.
        </p>

        <button
          onClick={scrollToTop}
          className={styles.backTopBtn}
          aria-label="Back to top"
        >
          Back to Top <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};
