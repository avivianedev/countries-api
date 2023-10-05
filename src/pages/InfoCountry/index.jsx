import "./InfoCountry.scss"
import data from "../../../data.json"

import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


export default function InfoCountry() {
    const { id } = useParams();
    const [fiterCountries, SetFilterCountries] = useState([])


    useEffect(() => {
        const selectCountries = data.filter(country => country.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === String(id))
        SetFilterCountries(selectCountries)


    }, [])
    const { mode,
        SetMode,
        changeMode,
    } = useContext(AppContext)


    return (
        <section >
            <Header />
            <section className={mode ? "info-container dark-mode-body" : "info-container"}>
                <Link to={"/"}>
                    <div className={mode ? "btn-back dark-mode" : "btn-back"}>
                        <AiOutlineArrowLeft />
                        Back
                    </div>
                </Link>
                {fiterCountries.map(c => (

                    <div key={c.name} className={mode ? "info-conntry dark-mode-body" : "info-conntry"}>
                        <img src={c.flags.png} alt="Image country" />
                        <div className="info-text">
                            <h2>{c.name}</h2>
                            <div className="c-detail-container">
                                <div className="c-information">
                                    <p><strong>Native Name:</strong> {c.nativeName}</p>
                                    <p><strong>Population:</strong> {c.population}</p>
                                    <p><strong>Region:</strong> {c.region}</p>
                                    <p><strong>Sub Region:</strong> {c.subregion}</p>
                                    <p><strong>Capital:</strong> {c.capital}</p>
                                </div>
                                <div className="c-information">
                                    <p><strong>Top Level Domain:</strong> {c.topLevelDomain}</p>
                                    <p><strong>Currencies:</strong> {c.currencies.map(cur => cur.name)}</p>
                                    <p><strong>Languages:</strong> {`${c.languages.map(l => l.name + "  ")}`}</p>

                                </div>
                            </div>
                            <div className="border-countries">
                                <p><strong>Border Countries:</strong></p>
                                <div className="border-countries-info">
                                    {c.borders.map((b, index) => (
                                        index <= 3 && (
                                            <span key={b} className={mode ? "dark-mode" : ""}>{b}</span>
                                        )

                                    ))}


                                </div>
                            </div>

                        </div>
                    </div>

                ))}

            </section>
        </section>
    )
}