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
    <aside
      className={cn(styles.card, {
        [styles.preanimation]: isAnimationTrigger,
        [styles.loadAnimation]: isAnimation,
        [styles.fixed]: isAnimationTrigger,
      })}
    >
      <div className={styles.container}>
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
          <CloseButton onClose={handleClose} />
        </div>
      </div>
    </aside>
  );

  function handleClose() {
    onClose();
  }
};

export default AdCard;
