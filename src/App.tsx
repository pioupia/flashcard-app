import './App.scss'
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";

export default App;

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Home />}>
                </Route>
            </Routes>
        </>
    );
}
