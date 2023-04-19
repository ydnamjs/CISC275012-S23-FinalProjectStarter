import React from "react";
import FrontPage from "./components/Main";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MenTops from "./components/pages/MenTops";

function App(): JSX.Element {
    return (
        <div>
            <Router>
                <NavBar></NavBar>
                <FrontPage></FrontPage>
                <MenTops></MenTops>
            </Router>
        </div>
    );
}

export default App;
