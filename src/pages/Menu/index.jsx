import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { ThemeContext } from "../../App";
import i18n from "../../i18n";

const Menu = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  function handleChange(event) {
    theme.setTheme(event.target.value);
  }

  function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <nav
      className={`${styles.navbar} ${
        theme.theme === "light" ? styles["navbar-light"] : styles["navbar-dark"]
      }`}
    >
      <div className={styles.logo}>FinestMart</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">{t("home")}</a>
        </li>
        <li>
          <a href="/categories">{t("categories")}</a>
        </li>
        <li>
          <a href="/sales">{t("sales")}</a>
        </li>
        <li>
          <a href="/faq">{t("faq")}</a>
        </li>
        <li>
          <a href="/about">{t("about")}</a>
        </li>
        <li>
          <a href="/contact">{t("contact")}</a>
        </li>
      </ul>

      <div className={styles.rightSide}>
        <div className={styles.languageSelector}>
          <select onChange={handleLanguageChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">ENG</option>
          </select>
        </div>

        <div className={styles.dark_light}>
          <select value={theme.theme} onChange={handleChange}>
            <option value="light">{t("light")}</option>
            <option value="dark">{t("dark")}</option>
          </select>
        </div>
        <div className={styles.authLinks}>
          <a href="/signin">{t("signin")}</a>
          <button className={styles.signup}>{t("signup")}</button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
