import "./Header.scss"
import { MdDarkMode } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"



export default function Header() {

    const { mode,
        changeMode,
    } = useContext(AppContext)

    return (
        <header >
            <div className={mode ? "header-container dark-mode" : "header-container"} onClick={changeMode}>
                <h1>Where in the world?</h1>
                {mode ?

                    <div className="dark-light-mode-container">
                        <BsFillSunFill size={30} color="yellow" />
                        <span>Light Mode</span>
                    </div>
                    :
                    <div className="dark-light-mode-container ">
                        <MdDarkMode size={30} />
                        <span>Dark Mode</span>
                    </div>}


            </div>
        </header>
    )
}