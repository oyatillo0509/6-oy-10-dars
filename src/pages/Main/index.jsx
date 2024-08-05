import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { ThemeContext } from "../../App";

const Main = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <main
      className={`${styles.main} ${
        theme.theme === "light" ? styles["main-light"] : styles["main-dark"]
      }`}
    >
      <div className={styles.heroSection}>
        <img className={styles.bacimg} src="/img/Bacr.svg" alt="" />
        <div className={styles.left}>
          <h1>{t("grocery")}</h1>
          <p>{t("description")}</p>
          <div className={styles.searchContainer}>
            <input type="text" placeholder={t("search_placeholder")} />
            <button>{t("search_button")}</button>
          </div>
          <div className={styles.features}>
            <div>✓ {t("features.fresh_vegetables")}</div>
            <div>✓ {t("features.guarantee")}</div>
            <div>✓ {t("features.cash_delivery")}</div>
            <div>✓ {t("features.fast_delivery")}</div>
          </div>
        </div>

        <div className={styles.products}>
          <div className={styles.productCard}>
            <img src="/img/Salat.svg" alt="Fresh Spinach" />
            <div>Fresh Spinach</div>
            <div>$12.00</div>
          </div>
          <div className={styles.productCard}>
            <img src="/img/Carrot.svg" alt="Carrot" />
            <div>Fresh Carrot</div>
            <div>$9.00</div>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.categoryCard}>
          <img src="/img/Tav1.svg" alt={t("categoriesb.dairy")} />
          <h3>{t("categoriesb.dairy")}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.categoryCard}>
          <img src="/img/Tav2.svg" alt={t("categoriesb.fruits_vegetables")} />
          <h3>{t("categoriesb.fruits_vegetables")}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.categoryCard}>
          <img src="/img/Tav3.svg" alt={t("categoriesb.spices")} />
          <h3>{t("categoriesb.spices")}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.categoryCard}>
          <img src="/img/Tav4.svg" alt={t("categoriesb.honey")} />
          <h3>{t("categoriesb.honey")}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.categoryCard}>
          <img src="/img/Tav5.svg" alt={t("categoriesb.flour")} />
          <h3>{t("categoriesb.flour")}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
