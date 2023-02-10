import './App.scss'
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Home />}>
          </Route>
      </Routes>
  )
}

export default App;
