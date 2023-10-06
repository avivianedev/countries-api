import "./Card.scss"
import data from "../../../data.json"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AppContext } from "../../context/AppContext"


export default function Card({ mode, search, select, }) {


    const { id } = useParams();
    //5 - carregamento de dados   
    //.toLowerCase().replace(/\s/g, '')

    const {
        dataCountry
    } = useContext(AppContext)


    //const filteredCountries = data.filter(c => {
    //    return c.name.toLowerCase().includes(search.toLowerCase())
    //})

    const filteredCountries = search ? data.filter(c => {
        return c.name.toLowerCase().includes(search.toLowerCase())
    }) : data

    const selectCountries = data.filter(s => {
        return s.region.toLowerCase() === (select.toLowerCase())

    })



    return (
        <section className={mode ? "Card-wrapper dark-mode-card" : "Card-wrapper"}>


            <>

                {filteredCountries.map(c => (

                    <div className="card-item" key={c.name} >

                        <div className="card-image">
                            <Link to={`/info/${c.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}>

                                <img src={c.flags.png} alt={`image ${c.name}`} />
                            </Link>
                        </div>

                        <div className={mode ? "country-details dark-mode" : "country-details"}>
                            <h3>{c.name}</h3>
                            <div className="oontent-text">
                                <p>Population: {c.population}</p>
                                <p>Region: {c.region}</p>
                                <p>Capital: {c.capital}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>


            {select.length > 0 && (
                <>
                    {selectCountries.map(c => (
                        <div className="card-item" key={c.name} >
                            <div className="card-image">
                                <Link to={`/info/${c.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}>
                                    <img src={c.flags.png} alt="" />
                                </Link>
                            </div>
                            <div className={mode ? "country-details dark-mode" : "country-details"}>
                                <h3>{c.name}</h3>
                                <div className="oontent-text">
                                    <p>Population: {c.population}</p>
                                    <p>Region: {c.region}</p>
                                    <p>Capital: {c.capital}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </>

            )}


        </section>
    )
}