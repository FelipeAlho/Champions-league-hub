import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Teams from "./pages/Teams/Teams.jsx";
import Matches from "./pages/Matches/Matches.jsx";
import Contact from "./pages/Contact/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="times" element={<Teams />} />
        <Route path="partidas" element={<Matches />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  );
}