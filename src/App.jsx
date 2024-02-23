import { Routes, Route, NavLink } from "react";
import Navbar from "../src/Components/Navbar";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>{/* <Route path="/" element={<HeroSection />} /> */}</Routes>
    </>
  );
}
