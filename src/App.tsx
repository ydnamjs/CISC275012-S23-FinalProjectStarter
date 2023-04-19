import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MenTops from "./components/pages/MenTops";
import MenShorts from "./components/pages/MenShorts";

function App(): JSX.Element {
    return (
        <div>
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/men" element={<MenTops />} />
                        <Route path="/women" element={<MenShorts />} />
                    </Routes>
                </Router>
            </React.StrictMode>
        </div>
    );
}

export default App;
