import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "./components/pages/Mens";
import Womens from "./components/pages/Womens";
import Admin from "./components/pages/Admin";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App(): JSX.Element {
    return (
        <ShoppingCartProvider>
            <div>
                <React.StrictMode>
                    <Router>
                        <Routes>
                            <Route path="/" element={<FrontPage />} />
                            <Route path="/men" element={<Mens />} />
                            <Route path="/women" element={<Womens />} />
                            <Route path="/admin" element={<Admin />} />
                        </Routes>
                    </Router>
                </React.StrictMode>
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
