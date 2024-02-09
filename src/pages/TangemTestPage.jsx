import styles from "./TangemTestPage.module.css";
import AdBanner from "../wigets/AdBanner/AdBanner";
import useLocalStorageState from "../shared/hooks/useLocalStorage";
import AdCard from "../wigets/AdCard/AdCard";
import useVisibility from "../shared/hooks/useVisibility";
import { useCallback, useRef, useState } from "preact/hooks";

export const TengemTestPage = () => {
  const [isCardClosed, setIsCardClosed] = useLocalStorageState(
    "tangem:main-banner-closed",
    "false",
  );
  const [isAdCardTrigger, setIsAdCardTrigger] = useState(false);
  let ref = useRef(null);

  const handleRowBannerVisible = useCallback(() => {
    setIsAdCardTrigger(true);
  }, []);
  useVisibility({ elRef: ref, onInvisible: handleRowBannerVisible });
  const isAdCardRender = !isCardClosed && isCardClosed !== "true" ;

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} />
        <AdBanner forwardRef={ref} />
      </header>
      <main className={styles.main}>
        {isAdCardRender && (
          <AdCard
            loadTrigger={isAdCardTrigger}
            onClose={() => setIsCardClosed(true)}
          />
        )}
      </main>
    </>
  );
};
