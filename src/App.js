import React from "react";
import './assets/css/Home.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import FollowMouseCircle from "./components/FollowMouseCircle";


function App() {
    return(
        <BrowserRouter>
            <FollowMouseCircle />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>

    )

}

export default App;
