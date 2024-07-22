import { Header } from "../../components/Header";
import AllVariants from "./All_variants.png"
import { PhoneImage } from "./PhoneImage";
import PhonePicture1 from "./phone_picture1.png"
import PhonePicture2 from "./phone_picture2.png"
import PhonePicture3 from "./phone_picture3.png"
import PhonePicture4 from "./phone_picture4.png"
import style from "./ProductPage.module.css"
import { NavigationBox } from "./NavigationBox";
import { BuyBox } from "./BuyBox";
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
                  <BuyBox />
            </div>
      </>)
}