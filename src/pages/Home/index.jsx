import { useContext, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiSolidDownArrow } from "react-icons/bi"
import Header from "../../components/Header"
import "./Home.scss"
import data from "../../../data.json"
import Card from "../../components/Card"
import { AppContext } from "../../context/AppContext"

export default function Home() {

    const { mode,
        dataCountry
    } = useContext(AppContext)

    const [listContries, SetListContries] = useState(false)

    const [FilterData, SetFIlterData] = useState("")
    const [SearchValue, SetSearchValue] = useState("")

    return (
        <main className={mode ? "container-principal dark-mode-body" : "container-principal"}>
            <Header

            />
            <section className="input-wrapper">
                <div className={mode ? "input-search dark-mode" : "input-search"}>
                    <AiOutlineSearch size={30} />
                    <input type="text"
                        placeholder="Search for a country"
                        onChange={(e) => SetSearchValue(e.target.value)}
                        value={SearchValue}
                    />
                </div>
                <div className={mode ? "custom-select dark-mode" : "custom-select"}>
                    <span>Filter by Region</span>
                    <BiSolidDownArrow onClick={() => SetListContries(!listContries)} />

                    {listContries &&
                        <div className={mode ? "list-contries dark-mode" : "list-contries-light"}>
                            <a onClick={() => { SetFIlterData("Africa"), SetListContries(!listContries) }}>Africa</a>
                            <a onClick={() => { SetFIlterData("Americas"), SetListContries(!listContries) }}>America</a>
                            <a onClick={() => { SetFIlterData("Asia"), SetListContries(!listContries) }}>Asia</a>
                            <a onClick={() => { SetFIlterData("Europe"), SetListContries(!listContries) }}>Europe</a>
                            <a onClick={() => { SetFIlterData("Oceania"), SetListContries(!listContries) }}>Oceania</a>
                        </div>
                    }

                </div>

            </section>
            <Card
                mode={mode}
                search={SearchValue}
                select={FilterData}
                listContries={() => SetListContries(false)}

            />
        </main>

    )
}