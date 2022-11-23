import { useState, useEffect } from "react";
import "./Total.scss";

function Total() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  }

  function getDate() {
    const today = new Date();
    return `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`;
  }

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
      setDate(getDate());
    }, 1000);
  });

  return (
    <section>
      <article>
        <span className="">{time}</span>
        <br />
        <span className="">{date}</span>
      </article>
      <article>Pogoda z API</article>

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
