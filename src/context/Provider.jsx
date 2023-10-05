import { useState } from "react"
import { AppContext } from "./AppContext"
import propTypes from "prop-types";
import data from "../../data.json"

export const Provider = ({ children }) => {
    const [mode, SetMode] = useState(false)
    const [dataCountry, SetDataCountry] = useState([])


    function changeMode() {
        return SetMode(!mode)
    }


    const value = {
        mode,
        SetMode,
        changeMode,
        dataCountry

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )


}
Provider.propTypes = {
    children: propTypes.any,
}.isRequired
