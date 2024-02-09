import styles from "./CloseButton.module.css";

const CloseButton = ({ onClose = () => {} }) => {
  return (
    <button onClick={onClose} className={styles.close} tabIndex={0} aria-label="Action. Close ad banner pannel.">
      <img
        className={styles.closeIcon}
        src="/src/assets/close.svg"
        alt="close icon"
      />
    </button>
  );
};

export default CloseButton;
