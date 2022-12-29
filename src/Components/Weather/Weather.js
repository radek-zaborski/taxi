import React, { useContext } from "react";
import Context from "../../Context/DataContext";
import "../../GetData/GetData";
import { GetDataWeather } from "../../GetData/GetData";
import ElementWeather from "../Weather/ElementWeather/ElementWeather";

import "./Weather.scss";

function Weather() {
  const { data } = useContext(Context);
  const { weather, loadingWeather } = data;

  GetDataWeather();

  let weatherValue = "Oczekiwanie na dane";

  if (loadingWeather !== true) {
    weatherValue = Object.keys(weather).map((key) => (
      <ElementWeather key={key} id={key} value={weather[key]} />
    ));
  }

  return (
    <section className="w-full flex flex-wrap justify-center py-1 bg-slate-300 rounded-lg border-solid border border-black">
      <article>
        <h2 className="text-lg font-bold">Pogoda</h2>
      </article>
      {weatherValue}
    </section>
  );
}

export default Weather;
