import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import CloseButton from "../../shared/ui/CloseButton";
import styles from "./AdBanner.module.css";

const ROW_ARROW_BUTTON_BREAKPOINT = 650;

const AdBanner = () => {
  const isRowArrowButton = useMediaQuery(
    `(min-width: ${ROW_ARROW_BUTTON_BREAKPOINT}px)`,
  );

  return (
    <aside className={styles.rowBanner}>
      <div className={styles.rowBannerContent}>
        <p className={styles.adTextBlock}>
          <span className={styles.rowBannerTitle}>
            Black Friday
            <span className={styles.rowBannerComa}>,</span>
            <span className={styles.rowBannerDates}>24-27 Nov</span>
          </span>
          <span className={styles.rowBannerDivider}>
            <img
              className={styles.point}
              src="/src/assets/point.svg"
              alt="divider"
            />
          </span>
          <span className={styles.rowBannerText}>10%OFF</span>
          <span className={styles.rowBannerDivider}>
            <img
              className={styles.point}
              src="/src/assets/point.svg"
              alt="divider"
            />
          </span>
          <span className={styles.rowBannerOffer}>
            Use code <span className={styles.cardCode}>10friday</span>{" "}
            <span className={styles.offerAdditionalInfo}>at checkout</span>
          </span>
        </p>
      </div>
      <div className={styles.rowBannerAction}>
        {isRowArrowButton ? (
          <a target={"/#"} className={styles.shopNow}>
            <span className={styles.shopNowText}>Shop now</span>
          </a>
        ) : (
          <a className={styles.AdButton}>
            <img
              className={styles.arrow}
              src="/src/assets/ad-arrow.svg"
              alt="action forward"
            />
          </a>
        )}
        <div className={styles.rowBannerClose}>
          <CloseButton />
        </div>
      </div>
    </aside>
  );
};

export default AdBanner;
