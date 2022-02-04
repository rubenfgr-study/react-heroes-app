import { Route, Routes } from "react-router-dom";
import DcScreen from "../cd/DcScreen";
import HeroList from "../hero/HeroList";
import HeroScreen from "../hero/HeroScreen";
import MarvelScreen from "../marvel/MarvelScreen";
import SearchScreen from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="hero/list" element={<HeroList />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
