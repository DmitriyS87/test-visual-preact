import styles from "./TangemTestPage.module.css";
import AdCard from "../wigets/AdCard/AdCard";
import AdBanner from "../wigets/AdBanner/AdBanner";

export const TengemTestPage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} />
        <AdBanner />
      </header>
      <main className={styles.main}>
        <AdCard />
      </main>
    </>
  );
};
