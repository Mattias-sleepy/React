import LogoImage from "./logo.jpg"
import style from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import { LoginPageContent } from "./LoginPageContent"
export function LoginPage() {

      return (
            <>
                  <div className={style.logo_image}>
                        <Link to="/"><img src={LogoImage} /></Link>
                  </div>
                  <LoginPageContent />
            </>)
}

