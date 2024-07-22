import style from "./LoginPage.module.css"
export function LoginPageContent() {
    return (
        <>
            <div className={style.login_page_content}>
                <div className={style.header_title}>
                    <div className={style.header_title_text}>
                        <span><strong>Hello</strong></span>
                    </div>
                </div>
                <div className={style.create_account}>
                    <div className={style.create_account_text}>
                        <span>Sign in to eBay or <a href="URL">create an account</a></span>
                    </div>
                </div>
                <div className={style.username}>
                    <div className={style.username_text}>
                        <span>Email or username</span>
                    </div>
                </div>
                <div className={style.continue_button}>
                    <div className={style.continue_button_text}>
                        <span>Continue</span>
                    </div>
                </div>
                <div className={style.or}>
                    <span>or</span>
                </div>
                <div className={style.facebook_button}>
                    <div className={style.facebook_text}>
                        <span>Continue with Facebook</span>
                    </div>
                </div>
                <div className={style.google_button}>
                    <div className={style.google_text}>
                        <span>Continue with Google</span>
                    </div>
                </div>
            </div>
        </>
    )
}