import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import MenTops from "./components/pages/MenTops";
import MenShorts from "./components/pages/MenShorts";
import MenPants from "./components/pages/MenPants";
import MenAccessories from "./components/pages/MenAccessories";
import MenOuter from "./components/pages/MenOuterwear";
import WomenTops from "./components/pages/WomenTops";
import WomenLeggings from "./components/pages/WomenLeggings";
import WomenPants from "./components/pages/WomenPants";
import WomenAccessories from "./components/pages/WomenAccessories";
import WomenOuter from "./components/pages/WomenOuterwear";

function App(): JSX.Element {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/mentops" element={<MenTops />} />
                    <Route path="/menshorts" element={<MenShorts />} />
                    <Route path="/menpants" element={<MenPants />} />
                    <Route path="/menacc" element={<MenAccessories />} />
                    <Route path="/menouter" element={<MenOuter />} />
                    <Route path="/womentops" element={<WomenTops />} />
                    <Route path="/womenleggings" element={<WomenLeggings />} />
                    <Route path="/womenpants" element={<WomenPants />} />
                    <Route path="/womenacc" element={<WomenAccessories />} />
                    <Route path="/womenouter" element={<WomenOuter />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
