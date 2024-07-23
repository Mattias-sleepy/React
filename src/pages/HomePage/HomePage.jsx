import React from "react"
import style from "./HomePage.module.css"
import banner from "./Banner.png"
import HamburgerIcon from "./32px-Hamburger_icon_white.png"
import WhiteDownArrow from "./white_down_arrow.png"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"
import { Category } from "./Category"
import { Footer } from "./Footer"
export function HomePage() {

    return (

        <>

            <Header />

            <div className={style.blue_box}>
                <div className={style.all_categories}>
                    <img src={HamburgerIcon} />
                    <div className={style.all_categorytext}>
                        <span>All categories</span>

                    </div>
                    <img src={WhiteDownArrow} />
                </div>
                <nav>
                    <NavBar />
                </nav>
            </div>
            <div className={style.green_box}>
                <img src={banner} />
            </div>
            <div className={style.yellow_box}>
                <div className={style.gold_box}>
                    <div className={style.text_title}>
                        <h2>Explore popular categories</h2>
                    </div>
                    <div className={style.view_all}>
                        <h3>View all</h3>
                    </div>
                </div>
                <div className={style.silver_box}>
                    <div className={style.category_area}>
                        <Category text="Category 1" />
                        <Category text="Category 2" />
                        <Category text="Category 3" />
                        <Category text="Category 4" />
                        <Category text="Category 5" />
                        <Category text="Category 6" />
                        <Category text="Category 7" />
                    </div>
                </div>
            </div>
            <Footer />
        </>)
}

