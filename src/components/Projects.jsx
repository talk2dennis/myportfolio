import { motion } from "framer-motion";

import { FaExternalLinkAlt, FaGithub, FaTerminal } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Afrifix",
    tagline: "Full-Stack Service & Handyman Platform",
    description:
      "Engineered a scalable multi-platform web and mobile ecosystem featuring real-time booking, provider tracking, and responsive cross-device views.",
    tags: ["React", "React Native", "Node.js", "PostgreSQL", "RESTful API"],
    icon: <IoLayersOutline size={22} className={styles.projectIcon} />,
    liveUrl: "https://www.afrifix.net",
    githubUrl: "https://github.com/talk2dennis",
    highlight: "Production Flagship",
  },
  {
    title: "AgroMarket",
    tagline: "Agricultural Commerce Platform",
    description:
      "Engineered an e-commerce platform connecting agricultural producers with buyers. Integrated secure real-time payment gateway flows and seller-buyer messaging.",
    tags: ["React", "Python (Flask)", "Payment Gateway", "PostgreSQL"],
    icon: <MdShoppingCart size={22} className={styles.projectIcon} />,
    liveUrl: null,
    githubUrl: "https://github.com/talk2dennis",
    highlight: "Full-Stack Python + React",
  },
  {
    title: "Cross-Platform Mobile Suite",
    tagline: "React Native & Offline-First Architecture",
    description:
      "Cross-platform applications targeting iOS & Android. Implemented fluid native navigation, asynchronous offline storage, and state sync over WebSockets.",
    tags: ["React Native", "Redux Toolkit", "AsyncStorage", "iOS & Android"],
    icon: <MdOutlineSmartphone size={22} className={styles.projectIcon} />,
    liveUrl: null,
    githubUrl: "https://github.com/talk2dennis",
    highlight: "Mobile Architecture",
  },
  {
    title: "Custom UNIX Shell",
    tagline: "Systems-Level Command Line Interpreter",
    description:
      "Engineered a command interpreter in C during the ALX SE curriculum. Handled POSIX system calls, memory management, leak checks with Valgrind, and process execution.",
    tags: [
      "C Language",
      "POSIX Systems",
      "Valgrind",
      "ALX Software Engineering",
    ],
    icon: <FaTerminal size={22} className={styles.projectIcon} />,
    liveUrl: null,
    githubUrl: "https://github.com/talk2dennis",
    highlight: "Low-Level Systems",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Featured Engineering Projects</h2>
          <p className={styles.sectionLead}>
            A selection of production-grade platforms, full-stack systems, and
            mobile applications.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{project.icon}</div>
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View source code"
                      className={styles.actionIcon}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit live application"
                      className={styles.actionIcon}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              <span className={styles.badge}>{project.highlight}</span>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.tagline}>{project.tagline}</p>
              <p className={styles.desc}>{project.description}</p>

              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
