import { useState } from "react";

import { IoMdSend } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";
import { RiMapPin2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { GoCheckCircle } from "react-icons/go";
import { FaCopy } from "react-icons/fa";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "adigwedennis@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>Get In Touch</span>
          <h2 className={styles.sectionTitle}>
            Let's Build Something Together
          </h2>
          <p className={styles.lead}>
            Whether you have an engineering role, contract project, or technical
            consultation in mind, my inbox is always open.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Direct Channels */}
          <div className={styles.directInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <CiMail size={20} />
              </div>
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>Direct Email</span>
                <span className={styles.infoValue}>{email}</span>
              </div>
              <button
                onClick={handleCopy}
                className={styles.copyBtn}
                title="Copy to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <GoCheckCircle size={16} color="#38bdf8" />
                ) : (
                  <FaCopy size={16} />
                )}
              </button>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <IoMdPhonePortrait size={20} />
              </div>
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>Phone</span>
                <a href="tel:+2348060449322" className={styles.infoLink}>
                  +234 806 044 9322
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <RiMapPin2Line size={20} />
              </div>
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>
                  Delta State, Nigeria (Available for Remote & Hybrid)
                </span>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/in/talk2dennis"
                target="_blank"
                rel="noreferrer"
                className={styles.socialPill}
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/talk2dennis"
                target="_blank"
                rel="noreferrer"
                className={styles.socialPill}
              >
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <form
            className={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${email}?subject=Portfolio Inquiry from Dennis.dev`;
            }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Jane Doe"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="userEmail" className={styles.formLabel}>
                Your Email
              </label>
              <input
                type="email"
                id="userEmail"
                required
                placeholder="jane@example.com"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Tell me about your project or opportunity..."
                className={styles.formTextarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <IoMdSend size={16} /> Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
