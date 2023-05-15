import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Admin from "./components/pages/Admin";
import Registration from "./components/pages/Registration";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import CheckoutModal from "./components/Modal";
import Logout from "./components/Logout";
import Login from "./components/pages/Login";

function App(): JSX.Element {
    return (
        <ShoppingCartProvider>
            <div>
                <React.StrictMode>
                    <Router>
                        <Routes>
                            <Route path="/" element={<FrontPage />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route
                                path="/register"
                                element={<Registration />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/checkout"
                                element={<CheckoutModal />}
                            />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Router>
                </React.StrictMode>
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
