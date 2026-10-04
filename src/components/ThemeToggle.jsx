import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const accents = [
  { id: "cyan", label: "Cyan", color: "#38bdf8" },
  { id: "emerald", label: "Emerald", color: "#10b981" },
  { id: "violet", label: "Violet", color: "#a855f7" },
];

export const ThemeToggle = () => {
  const { theme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <div className={styles.themeControls}>
      {/* Dark / Light Mode Switcher */}
      <button
        onClick={toggleTheme}
        className={styles.modeBtn}
        aria-label="Toggle dark/normal mode"
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? <FaSun size={17} /> : <FaMoon size={17} />}
        </motion.div>
      </button>

      {/* 3 Color Accents Picker */}
      <div className={styles.accentGroup}>
        {accents.map((acc) => (
          <button
            key={acc.id}
            onClick={() => setAccent(acc.id)}
            className={`${styles.colorDot} ${accent === acc.id ? styles.activeDot : ""}`}
            style={{ backgroundColor: acc.color }}
            aria-label={`Select ${acc.label} accent`}
            title={`${acc.label} Accent`}
          />
        ))}
      </div>
    </div>
  );
};
