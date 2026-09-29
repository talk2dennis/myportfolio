import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import styles from "./Experience.module.css";

const workHistory = [
  {
    role: "Manager, Head of ICT",
    company: "Nigeria Social Insurance Trust Fund (NSITF)",
    period: "2023 - Present",
    highlights: [
      "Lead the ICT unit, directing technical staff, training, and optimizing internal branch systems to improve operational efficiency.",
      "Spearheaded automation of repetitive tasks using Python, accelerating delivery cycles and eliminating manual workflows.",
      "Managed large-scale data processes, enforcing security protocols, data integrity, and strict access controls.",
    ],
  },
  {
    role: "Assistant Manager, Head of ICT",
    company: "Nigeria Social Insurance Trust Fund (NSITF)",
    period: "2020 - 2022",
    highlights: [
      "Coordinated branch-wide IT support, system upgrades, and hardware/software infrastructure maintenance.",
      "Provided strategic guidance for adopting modern digital collaboration tools across departments.",
    ],
  },
  {
    role: "Officer I & II (ICT)",
    company: "Nigeria Social Insurance Trust Fund (NSITF)",
    period: "2013 - 2019",
    highlights: [
      "Supported core ICT operations, network diagnostics, user support, and system maintenance.",
      "Facilitated smooth technical onboarding for new branch personnel.",
    ],
  },
];

const educationData = [
  {
    degree: "MSc in Information Technology",
    school: "National Open University of Nigeria",
    year: "2026",
    score: "CGPA: 3.83 / 5.0",
  },
  {
    degree: "Postgraduate Diploma in Information Technology",
    school: "National Open University of Nigeria",
    year: "2023",
    score: "CGPA: 4.41 / 5.0 (Distinction)",
  },
  {
    degree: "BSc in Applied Biology & Technology",
    school: "Enugu State University of Science and Technology",
    year: "2010",
    score: "2nd Class Honors",
  },
];

const certifications = [
  {
    name: "Data Science Essentials with Python",
    issuer: "Cisco",
    year: "2026",
  },
  { name: "Data Literacy Certification", issuer: "IBM", year: "2026" },
  {
    name: "12-Month Software Engineering Program",
    issuer: "ALX Africa",
    year: "2024",
  },
  {
    name: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2020",
  },
  { name: "React Native Fundamentals", issuer: "Alison", year: "2025" },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", year: "2021" },
  {
    name: "Developing Applications with Kotlin",
    issuer: "Alison",
    year: "2022",
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>Career Trajectory</span>
          <h2 className={styles.sectionTitle}>Experience & Credentials</h2>
        </div>

        {/* Tab switchers */}
        <div className={styles.toggleRow}>
          <button
            className={`${styles.toggleBtn} ${activeTab === "experience" ? styles.toggleBtnActive : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <BsBriefcaseFill size={16} /> Work History
          </button>
          <button
            className={`${styles.toggleBtn} ${activeTab === "education" ? styles.toggleBtnActive : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <FaGraduationCap size={16} /> Education
          </button>
          <button
            className={`${styles.toggleBtn} ${activeTab === "certifications" ? styles.toggleBtnActive : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            <FaAward size={16} /> Certifications
          </button>
        </div>

        {/* Animated View Container */}
        <div className={styles.contentWrapper}>
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={styles.timeline}
              >
                {workHistory.map((item, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <div className={styles.timelineDot} />
                    </div>
                    <div className={styles.card}>
                      <div className={styles.cardHeader}>
                        <div>
                          <h3 className={styles.roleTitle}>{item.role}</h3>
                          <span className={styles.companyName}>
                            {item.company}
                          </span>
                        </div>
                        <span className={styles.periodBadge}>
                          {item.period}
                        </span>
                      </div>
                      <ul className={styles.bulletList}>
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className={styles.bulletItem}>
                            <FaCheckCircle
                              size={16}
                              className={styles.bulletIcon}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={styles.gridEducation}
              >
                {educationData.map((edu, idx) => (
                  <div key={idx} className={styles.card}>
                    <span className={styles.periodBadge}>{edu.year}</span>
                    <h3 className={styles.eduDegree}>{edu.degree}</h3>
                    <p className={styles.eduSchool}>{edu.school}</p>
                    <span className={styles.eduScore}>{edu.score}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={styles.gridCerts}
              >
                {certifications.map((cert, idx) => (
                  <div key={idx} className={styles.certCard}>
                    <div className={styles.certTop}>
                      <span className={styles.certIssuer}>{cert.issuer}</span>
                      <span className={styles.certYear}>{cert.year}</span>
                    </div>
                    <h4 className={styles.certName}>{cert.name}</h4>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
