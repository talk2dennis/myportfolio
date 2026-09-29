import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TechStack.module.css";

const categories = [
  "All",
  "Frontend & Mobile",
  "Backend & Cloud",
  "Enterprise & Systems",
];

const skillsData = [
  { name: "React", category: "Frontend & Mobile", type: "Core" },
  { name: "React Native", category: "Frontend & Mobile", type: "Mobile" },
  { name: "TypeScript", category: "Frontend & Mobile", type: "Language" },
  { name: "Redux Toolkit", category: "Frontend & Mobile", type: "State" },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend & Mobile",
    type: "Language",
  },
  { name: "HTML5 / CSS3", category: "Frontend & Mobile", type: "Styling" },
  { name: "Tailwind / Sass", category: "Frontend & Mobile", type: "Styling" },

  { name: "Node.js", category: "Backend & Cloud", type: "Runtime" },
  { name: "Python (Flask)", category: "Backend & Cloud", type: "Framework" },
  { name: "RESTful APIs", category: "Backend & Cloud", type: "Architecture" },
  { name: "PostgreSQL", category: "Backend & Cloud", type: "Database" },
  { name: "MySQL", category: "Backend & Cloud", type: "Database" },
  { name: "MongoDB", category: "Backend & Cloud", type: "Database" },
  { name: "AWS & Vercel", category: "Backend & Cloud", type: "DevOps" },

  {
    name: "Task Automation (Python)",
    category: "Enterprise & Systems",
    type: "Automation",
  },
  {
    name: "Large-scale Data Security",
    category: "Enterprise & Systems",
    type: "Enterprise",
  },
  {
    name: "C Programming",
    category: "Enterprise & Systems",
    type: "Low-Level",
  },
  {
    name: "Linux Network Admin",
    category: "Enterprise & Systems",
    type: "Infrastructure",
  },
  {
    name: "Git / GitHub Workflow",
    category: "Enterprise & Systems",
    type: "VCS",
  },
];

export const TechStack = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>Capabilities</span>
          <h2 className={styles.sectionTitle}>Skills & Technical Domain</h2>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabContainer}>
          {categories.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Skill Badges Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={styles.skillCard}
              >
                <span className={styles.skillType}>{skill.type}</span>
                <h4 className={styles.skillName}>{skill.name}</h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
