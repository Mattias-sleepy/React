import style from "./Header.module.css"
import ProfileIcon from "./profileicon.png"
import DownArrow from "./downarrow.png"
import SwedenFlag from "./swedenflag.png"
import Logo from "./logo.jpg"
import Search from "./search.png"
import ShoppingCart from "./shoppingcart.png"
import { Link } from "react-router-dom"
export function Header() {

    return (
        <>
            <div className={style.red_box} >
                <div className={style.logo}>
                    <Link to="/"><img src={Logo} /></Link>
                </div>
                <div className={style.searchbar}>
                    <form action="">
                        <input type="text" placeholder="Search for anything" name="q" />
                    </form>
                    <button className={style.searchbutton} type="submit"><img src={Search} /></button>
                </div>
                <div className={style.top_info}>
                    <div className={style.language_selection}>
                        <div className={style.swedishflag}>
                            <img src={SwedenFlag} />
                        </div>
                        <div className={style.language_text}>
                            <span className={style.currency}>
                                EN/<br />
                                SEK
                            </span>
                            <div className={style.downarrow1}>
                                <img src={DownArrow} />
                            </div>

                        </div>

                    </div>
                    <div className={style.login}>
                        <Link to="/login">
                            <img src={ProfileIcon} />
                        </Link>
                        <div className={style.loginlink}>
                            <Link to="/login">Sign in/Register</Link>
                        </div>


                    </div>
                    <div className={style.shoppingcart}>
                        <Link to="/shoppingcart">
                            <img src={ShoppingCart} />
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}