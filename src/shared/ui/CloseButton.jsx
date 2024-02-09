import styles from "./CloseButton.module.css";
import CloseIcon from "../../assets/close.svg";

const CloseButton = ({ onClose = () => {} }) => {
  return (
    <button
      onClick={onClose}
      className={styles.close}
      tabIndex={0}
      aria-label="Action. Close ad banner pannel."
    >
      <img className={styles.closeIcon} src={CloseIcon} alt="close icon" />
    </button>
  );
};

export default CloseButton;
