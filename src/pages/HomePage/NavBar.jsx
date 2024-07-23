import { Link } from "react-router-dom"
import style from "./HomePage.module.css"
export function NavBar() {
    return (
        <>
            <div className={style.navbar}>
                <ul>
                    <li><Link to="/product">Electronics</Link></li>
                    <li><a href="URL">Motors</a></li>
                    <li><a href="URL">Fashion</a></li>
                    <li><a href="URL">Collectibles & Art</a></li>
                    <li><a href="URL">Sports</a></li>
                    <li><a href="URL">Health & Beauty</a></li>
                    <li><a href="sixthpage.html">More</a></li>
                </ul>
            </div>
        </>
    )
}