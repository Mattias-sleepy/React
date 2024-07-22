import style from "./ProductPage.module.css"
export function NavigationBox() {
    return (
        <>
            <div className={style.navigation_box}>
                <ul>
                    <li><a href="URL">Ebay</a> &gt;</li>
                    <li><a href="URL">Electronics</a> &gt;</li>
                    <li><a href="URL">Cellphones & accessories</a> &gt;</li>
                    <li><a href="URL">Cellphones & smartphones</a> &gt;</li>
                    <li><a href="URL">Apple</a> &gt;</li>
                    <li><a href="URL"><strong>iPhone 15 pro Max</strong></a></li>
                </ul>
            </div>
        </>
    )
}