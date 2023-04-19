import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenTops from "./components/pages/MenTops";
import MenShorts from "./components/pages/MenShorts";

function App(): JSX.Element {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/*" element={<FrontPage />} />
                    <Route path="/men" element={<MenTops />} />
                    <Route path="/women" element={<MenShorts />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
