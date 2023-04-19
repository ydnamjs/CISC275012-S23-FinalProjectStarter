import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "./components/pages/Mens";
import Womens from "./components/pages/Womens";

function App(): JSX.Element {
    return (
        <div>
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/men" element={<Mens />} />
                        <Route path="/women" element={<Womens />} />
                    </Routes>
                </Router>
            </React.StrictMode>
        </div>
    );
}

export default App;
