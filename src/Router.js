import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";
import AboutPage from "./page/AboutPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
