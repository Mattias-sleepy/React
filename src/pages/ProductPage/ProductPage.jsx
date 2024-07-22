import { Header } from "../../components/Header";
import AllVariants from "./All_variants.png"
import { PhoneImage } from "./PhoneImage";
import PhonePicture1 from "./phone_picture1.png"
import PhonePicture2 from "./phone_picture2.png"
import PhonePicture3 from "./phone_picture3.png"
import PhonePicture4 from "./phone_picture4.png"
import style from "./ProductPage.module.css"
import { NavigationBox } from "./NavigationBox";
export function ProductPage() {

      return (<>

            <Header />

            <div className={style.horizontal_line}></div>
            <NavigationBox />
            <div className={style.product_box}>
                  <div className={style.picture_column}>
                        <PhoneImage className={style.phone_image1} image={PhonePicture1} />
                        <PhoneImage className={style.phone_image2} image={PhonePicture2} />
                        <PhoneImage className={style.phone_image3} image={PhonePicture3} />
                        <PhoneImage className={style.phone_image4} image={PhonePicture4} />
                  </div>
                  <div className={style.showcase}>
                        <img src={AllVariants} />

                  </div>
                  <div className={style.buy_box}>
                        <div className={style.product_title}>
                              <h1>Apple - iPhone 15 pro Max - All colors</h1>

                        </div>
                        <div className={style.condition_text}>
                              <p>Condition: <span><strong>Factory new</strong></span></p>

                        </div>
                        <div className={style.color_selection}>
                              <div className={style.color_text}>
                                    <p>Color:</p>

                              </div>
                              <div className={style.select_bar}>
                                    <div className={style.bar_text}>
                                          <span><strong>-Select-</strong></span>
                                    </div>


                              </div>
                        </div>
                        <div className={style.quantity_box}>
                              <div className={style.quantity_text}>
                                    <p>Quantity:</p>
                              </div>
                              <div className={style.quantity}>
                                    <span>1</span>

                              </div>

                        </div>
                        <div className={style.product_cost}>
                              <span>11 940:-</span>
                        </div>
                        <div className={style.optional_buttons}>
                              <div className={style.buy_now}>
                                    <div className={style.buy_text}>
                                          <span>Buy it now</span>
                                    </div>
                              </div>
                              <div className={style.add_cart}>
                                    <div className={style.add_text}>
                                          <span>Add to cart</span>
                                    </div>
                              </div>

                        </div>

                  </div>
            </div>
      </>)
}