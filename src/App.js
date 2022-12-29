import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";

import Total from "./Views/Total/Total";
import AllEvents from "./Views/AllEvents/AllEvents";
import SingleDay from "./Views/ViewAddReport/ViewAddReport";
import Context from "./Context/DataContext";

function App() {
  const [data, setData] = useState({ weather: null });
  const [wallet, setWallet] = useState(null);

  return (
    <Context.Provider value={{ data, setData, wallet, setWallet }}>
      <div className="w-screen flex flex-wrap m-0">
        <header className="w-screen h-auto">
          <Header />
        </header>

        <section className="w-10/12 mx-auto my-2 flex justify-center">
          <Routes>
            <Route exact path="/" element={<Total />} />

            <Route path="/SingleDay" element={<SingleDay />} />

            <Route path="/AllEvents" element={<AllEvents />} />
          </Routes>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
