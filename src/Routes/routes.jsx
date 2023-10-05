import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import InfoCountry from "../pages/InfoCountry";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Home />} path="/" exact />
                <Route element={<InfoCountry />} path="/info/:id" />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;