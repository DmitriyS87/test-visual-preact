import { useLayoutEffect, useState } from "preact/hooks";
import CloseButton from "../../shared/ui/CloseButton";
import styles from "./AdCard.module.css";
import cn from "classnames";

const AdCard = ({ onClose = () => {}, loadTrigger = null }) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const isAnimationTrigger = loadTrigger !== null;

  useLayoutEffect(() => {
    if (!isAnimation && isAnimationTrigger && loadTrigger) {
      setIsAnimation(true);
    }
  }, [isAnimation, isAnimationTrigger, loadTrigger]);

  return (
    <section
      className={cn(styles.card, {
        [styles.preanimation]: isAnimationTrigger,
        [styles.loadAnimation]: isAnimation,
        [styles.fixed]: isAnimationTrigger,
      })}
    >
      <div className={styles.container}>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
            <h6 className={styles.cardtitle}>Black Friday</h6>
            <p className={styles.cardOffer}>10%OFF</p>
            <p className={styles.cardHow}>
              Use code <span aria-label="Promo code" tabindex={-1} className={styles.cardCode}>10friday</span> at
              checkout
            </p>
          </div>
          <div className={styles.cardAction}>
            <a target={"#"} className={styles.cardLink} tabindex={0} aria-label="Go to online store">
              Shop now{" "}
              <span className={styles.cardLinkExplanation}>through Monday</span>
            </a>
          </div>
        </div>
        <div className={styles.cardClose}>
          <CloseButton onClose={handleClose} />
        </div>
      </div>
    </section>
  );

  function handleClose() {
    onClose();
  }
};

export default AdCard;
