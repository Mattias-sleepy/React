import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import style from "./ShoppingCartPage.module.css"
export function ShoppingCartPage() {
      return (
            <>
                  <Header />
                  <div className={style.horizontal_line}></div>
                  <div className={style.shopping_title}>
                        <div className={style.shopping_text}>
                              <span><strong>Shopping cart</strong></span>
                        </div>
                  </div>
                  <div className={style.middle_heading}>
                        <div className={style.middle_text}>
                              <span>You don't have any items in your cart.</span>
                        </div>
                        <br />
                        <div className={style.see_your_items}>
                              <div className={style.your_items_text}>
                                    <span>Have an account? Sign in to see your items</span>

                              </div>
                        </div>
                  </div>
                  <br />
                  <div className={style.button_options}>
                        <div className={style.start_shopping}>
                              <div className={style.start_shopping_text}>
                                    <Link to="/ordercomplete">Start shopping</Link>
                              </div>
                        </div>
                        <div className={style.signing_in}>
                              <div className={style.signing_in_text}>
                                    <Link to="/login">Sign in</Link>
                              </div>
                        </div>
                  </div>
            </>
      )
}