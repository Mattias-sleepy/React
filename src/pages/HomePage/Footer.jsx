import style from "./Footer.module.css"
export function Footer() {
    return (
        <>
            <div className={style.footer}>
                <div className={style.buy}>
                    <span><strong>Buy</strong></span>
                </div>
                <div className={style.sell}>
                    <span><strong>Sell</strong></span>
                </div>
                <div className={style.support}>
                    <span><strong>Support</strong></span>
                </div>
                <div className={style.community}>
                    <span><strong>Community</strong></span>
                </div>
                <div className={style.stay_connected}>
                    <span><strong>Stay connected</strong></span>
                    <div className={style.ebay_instagram}>
                        <a href="https://www.instagram.com/ebay/">Instagram</a>
                    </div>
                </div>
            </div>
        </>
    )
}