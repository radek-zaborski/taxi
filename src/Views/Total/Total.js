import { useContext, useEffect, useMemo } from "react";
import DataField from "../../Components/DataField/DataField";
import Context from "../../Context/DataContext";

import "./Total.scss";

function Total() {
  const [date, setDate] = useContext(Context);

  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  }

  function getDate() {
    const today = new Date();
    return `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`;
  }

  setInterval(() => {
    setDate({
      today: {
        dateNumber: getDate(),
        time: getTime(),
      },
    });
  }, 1000);

  const { today } = date;

  console.log(today);
  return (
    <section>
      <article>
        <h3>Data: {today ? today.dateNumber : ""}</h3>
      </article>
      <article>
        <DataField title="Dzisiejsza Pogoda" value={""} />
      </article>

      <article>Całkowita kwota brutto</article>
      <article>Całkowity VAT</article>
      <article>Prowizja dla B/U</article>
      <article>koszt całej trasy</article>
      <article>Zysk</article>
      <article>Zarobek</article>

      <article>Ilość wydarzeń następnego dnia z API</article>
      <article>Notatki własne</article>
    </section>
  );
}

export default Total;
