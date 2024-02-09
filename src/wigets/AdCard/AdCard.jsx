import CloseButton from "../../shared/ui/CloseButton";
import styles from "./AdCard.module.css";

const AdCard = () => {
  return (
    <aside className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <div className={styles.cardtitle}>Black Friday</div>
          <div className={styles.cardOffer}>10%OFF</div>
          <div className={styles.cardHow}>
            Use code <span className={styles.cardCode}>10friday</span> at
            checkout
          </div>
        </div>
        <div className={styles.cardAction}>
          <a target={"/#"} className={styles.cardLink}>
            Shop now{" "}
            <span className={styles.cardLinkExplanation}>through Monday</span>
          </a>
        </div>
      </div>
      <div className={styles.cardClose}>
        <CloseButton />
      </div>
    </aside>
  );
};

export default AdCard;
