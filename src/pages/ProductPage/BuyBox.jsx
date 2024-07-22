import style from "./ProductPage.module.css"
export function BuyBox() {
    return (
        <>
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
        </>
    )
}