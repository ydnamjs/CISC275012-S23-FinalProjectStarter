import React from "react";
import FrontPage from "./components/Main";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
function App(): JSX.Element {
    return (
        <div>
            <Router>
                <NavBar></NavBar>
            </Router>
            <FrontPage></FrontPage>
        </div>
    );
}

export default App;
