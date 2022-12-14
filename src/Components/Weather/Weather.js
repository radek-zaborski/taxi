import React, { useContext } from "react";
import Context from "../../Context/DataContext";
import "../../GetData/GetData";
import ElementWeather from "./ElementWeather/ElementWeather.js";
import "./Weather.scss";

function Weather() {
  const { data } = useContext(Context);

  const { weather } = data ? data : { weather: "Oczekuję na dane" };

  return (
    <section className="w-full flex flex-wrap justify-center py-1 bg-slate-300 rounded-lg border-solid border border-black">
      <article>
        <h2 className="text-lg font-bold">Pogoda</h2>
      </article>
      {Object.keys(weather).map((key) => (
        <ElementWeather key={key} id={key} value={weather[key]} />
      ))}
    </section>
  );
}

export default Weather;
