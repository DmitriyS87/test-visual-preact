import styles from './TangemTestPage.module.css';

export const TengemTestPage = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>навигация</nav>
                <aside className={styles.headerAd}>
                    <img className={styles.headerAdImage} src="/src/assets/header_ad.png" alt="рекламное изображение" />
                    <div className={styles.adContent}>
                        <div className={styles.adTextBlock}>
                            <h3 className={styles.headerAdTitle}>Black Friday,</h3>
                            <p className={styles.headerAdText}>10%OFF</p>
                        </div>
                        <div className={styles.adControl}>
                            <button className={styles.AdButton}>
                                <img className={styles.arrow} src="/src/assets/ad-arrow.svg" alt="стрелочка далее" />
                            </button>
                        </div>
                    </div>
                </aside>
            </header>
            <main className={styles.main}>
                <aside className={styles.mainAd}>
                    <div className={styles.mainAdContainer}>
                        <div className={styles.mainAdContent}>
                            <div className={styles.mainAdtitle}>Black Friday</div>
                            <div className={styles.mainAdOffer}>10%OFF</div>
                            <div className={styles.mainAdHow}>Use code <span className={styles.mainAdCode}>10friday</span> at checkout</div>
                            <a className={styles.mainAdLink}>Shop now through Monday</a>
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};