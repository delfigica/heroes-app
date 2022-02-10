import React from "react";
import { Route, Routes } from "react-router-dom";
import { DcScreen } from "../components/DC/DcScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/heroes-app/marvel" element={<MarvelScreen />} />
          <Route path="/heroes-app/dc" element={<DcScreen />} />
          <Route path="/heroes-app/search" element={<SearchScreen />} />
          <Route path="/heroes-app/hero/:heroId" element={<HeroScreen />} />
          <Route path="/heroes-app/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
