import styles from "./CloseButton.module.css";

const CloseButton = ({ onClose = () => {} }) => {
  return (
    <button onClick={onClose} className={styles.close}>
      <img
        className={styles.closeIcon}
        src="/src/assets/close.svg"
        alt="close icon"
      />
    </button>
  );
};

export default CloseButton;
