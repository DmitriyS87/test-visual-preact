import { useLayoutEffect, useState } from 'preact/hooks';
import styles from './TangemTestPage.module.css';

const ROW_ARROW_BUTTON_BREAKPOINT = 650;
const TABLET_BREAK_POINT = 394;

export const TengemTestPage = () => {
    const isRowArrowButton = useMediaQuery(`(min-width: ${ROW_ARROW_BUTTON_BREAKPOINT}px)`)
    const isTablet = useMediaQuery(`(min-width: ${TABLET_BREAK_POINT}px)`)

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav} />
                <aside className={styles.rowBanner}>
                    <div className={styles.rowBannerContent}>
                        <p className={styles.adTextBlock}>
                            <span className={styles.rowBannerTitle}>Black Friday
                                <span className={styles.rowBannerComa}>,</span>
                                <span className={styles.rowBannerDates}>24-27 Nov</span>
                            </span>
                            <span className={styles.rowBannerDivider}><img className={styles.point} src="/src/assets/point.svg" alt="divider" /></span>
                            <span className={styles.rowBannerText}>10%OFF</span>
                            <span className={styles.rowBannerDivider}><img className={styles.point} src="/src/assets/point.svg" alt="divider" /></span>
                            <span className={styles.rowBannerOffer}>Use code <span className={styles.cardCode}>10friday</span> <span className={styles.offerAdditionalInfo}>at checkout</span></span>
                        </p>
                    </div>
                    <div className={styles.rowBannerAction}>
                        {isRowArrowButton ? (<a target={'/#'} className={styles.shopNow}><span className={styles.shopNowText}>Shop now</span></a>) : (<a className={styles.AdButton}>
                            <img className={styles.arrow} src="/src/assets/ad-arrow.svg" alt="action forward" />
                        </a>)}
                        <div className={styles.rowBannerClose}>
                            <button className={styles.close}>
                                <img className={styles.closeIcon} src="/src/assets/close.svg" alt="close icon" />
                            </button>
                        </div>
                    </div>
                </aside>
            </header>
            <main className={styles.main}>
                <aside className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText}>
                            <div className={styles.cardtitle}>Black Friday</div>
                            <div className={styles.cardOffer}>10%OFF</div>
                            <div className={styles.cardHow}>Use code <span className={styles.cardCode}>10friday</span> at checkout</div>
                        </div>
                        <div className={styles.cardAction}>
                            {isTablet ? (<a target={'/#'} className={styles.cardLink}>Shop now through Monday</a>) : (
                                <a target={'/#'} className={styles.cardLink}>Shop now</a>
                            )}
                        </div>
                    </div>
                    <div className={styles.cardClose}>
                        <button className={styles.close}>
                            <img className={styles.closeIcon} src="/src/assets/close.svg" alt="close icon" />
                        </button>
                    </div>
                </aside>
            </main>
        </>
    );
};

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useLayoutEffect(() => {
        const handleChange = () => {
            setMatches(getMatches(query))
        }
        const matchMedia = window.matchMedia(query)

        matchMedia.addEventListener('change', handleChange)
        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches;

    function getMatches(query) {
        return window.matchMedia(query).matches
    }
}