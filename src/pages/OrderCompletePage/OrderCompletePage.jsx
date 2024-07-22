import { Header } from "../../components/Header";
import style from "./OrderCompletePage.module.css"
export function OrderCompletePage() {
      return (
            <>
                  <Header />

                  <div className={style.horizontal_line}></div>
                  <div className={style.order_title}>
                        <div className={style.order_text}>
                              <span><strong>Order complete!</strong></span>
                        </div>
                  </div>
                  <div className={style.middle_heading}>
                        <div className={style.middle_text}>
                              <span>Thank you for your purchase!</span>
                        </div>
                        <br />
                        <div className={style.receive_email}>
                              <div className={style.receive_email_text}>
                                    <span>You'll receive an email where you can track your order's status.</span>

                              </div>
                        </div>
                  </div>
            </>
      )
}