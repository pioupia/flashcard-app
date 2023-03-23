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
            <main className={"page-content"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </main>
        </>
    );
}
