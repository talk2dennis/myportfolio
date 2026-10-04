import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUp,
  FaDownload,
  FaTerminal,
} from "react-icons/fa";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative radial lighting */}
      <div className={styles.glow} />

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.pulseDot} />
            Available for Software Engineering Roles & Consultations
          </motion.div>

          {/* Main Headings */}
          <motion.h1 variants={itemVariants} className={styles.title}>
            Hi, I'm{" "}
            <span className={styles.highlight}>Dennis Chiedu Adigwe</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.role}>
            Software Engineer & ICT Unit Lead
          </motion.p>

          <motion.p variants={itemVariants} className={styles.description}>
            Bridging over a decade of IT leadership with scalable full-stack and
            mobile solutions. Specialized in building clean, responsive user
            interfaces with <strong>React</strong>, <strong>TypeScript</strong>,
            and <strong>React Native</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              View Featured Work
              <FaArrowRight size={18} />
            </a>

            <motion.a
              href="/Dennis_Adigwe_CV.pdf"
              download
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
              <FaDownload size={16} />
            </motion.a>
          </motion.div>

          {/* Micro Stat Badges */}
          <motion.div variants={itemVariants} className={styles.statsStrip}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Years in Enterprise IT</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>ALX & CS50</span>
              <span className={styles.statLabel}>Engineering Alum</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>MSc</span>
              <span className={styles.statLabel}>Information Technology</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Code Card Preview */}
        <motion.div
          className={styles.terminalWindow}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.terminalControls}>
              <span className={styles.dotClose} />
              <span className={styles.dotMin} />
              <span className={styles.dotMax} />
            </div>
            <span className={styles.terminalTitle}>
              <FaTerminal size={14} /> engineer_profile.ts
            </span>
          </div>

          <pre className={styles.codeSnippet}>
            <code className={styles.codeContent}>
              <span className={styles.codeKeyword}>const</span> engineer =
              &#123;{"\n"}
              {"  "}name:{" "}
              <span className={styles.codeString}>'Dennis Chiedu Adigwe'</span>,
              {"\n"}
              {"  "}location:{" "}
              <span className={styles.codeString}>'Delta, Nigeria'</span>,{"\n"}
              {"  "}role:{" "}
              <span className={styles.codeString}>
                'Frontend & Mobile Lead'
              </span>
              ,{"\n"}
              {"  "}stack: [{"\n"}
              {"    "}
              <span className={styles.codeString}>'React'</span>,{" "}
              <span className={styles.codeString}>'React Native'</span>,{"\n"}
              {"    "}
              <span className={styles.codeString}>'TypeScript'</span>,{" "}
              <span className={styles.codeString}>'Redux'</span>,{"\n"}
              {"    "}
              <span className={styles.codeString}>'Python/Flask'</span>,{" "}
              <span className={styles.codeString}>'PostgreSQL'</span>
              {"\n"}
              {"  "}],{"\n"}
              {"  "}leadership: <span className={styles.codeBoolean}>true</span>
              ,{"\n"}
              {"  "}status:{" "}
              <span className={styles.codeString}>
                'Shipping scalable software'
              </span>
              {"\n"}
              &#125;;
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};
