import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending/Trending";
import Movies from "./Components/Movies/Movies";
import Tv from "./Components/TV/Tv";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import BottomNav from "./Components/BottomNav/BottomNav";
import Search from "./Components/Search/Search";
import DetailsData from "./Components/DetailsData/DetailsData";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<DetailsData />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
