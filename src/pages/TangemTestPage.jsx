import styles from "./TangemTestPage.module.css";
import AdBanner from "../wigets/AdBanner/AdBanner";
import useLocalStorageState from "../shared/hooks/useLocalStorage";
import AdCard from "../wigets/AdCard/AdCard";
import useVisibility from "../shared/hooks/useVisibility";
import { useContext, useRef, useState } from "preact/hooks";
import { WCAGContext } from "../features/WCAG/context/Provider";

export const TengemTestPage = () => {
  const ref = useRef(null);
  const [isAdCardTrigger, setIsAdCardTrigger] = useState(false);
  const [isCardClosed, setIsCardClosed] = useLocalStorageState(
    "tangem:main-banner-closed",
    "false",
  );
  const { actions: { srNotify, srClearNotification } } = useContext(WCAGContext);

  useVisibility({ elRef: ref, onInvisible: handleRowBannerVisible });

  const isAdCardRender = !isCardClosed && isCardClosed !== "true";

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
            onClose={handleAdCardClose}
          />
        )}
      </main>
    </>
  );

  function handleAdCardClose() {
    setIsCardClosed(true);
    srClearNotification()
  }

  function handleRowBannerVisible() {
    setIsAdCardTrigger(true);
    srNotify('Page updated with AD card banner with sales inforamtion. You can use promo code to get a discount.')
  }
};
