import DateAndTime from "../../Components/DateAndTime/DateAndTime";
import Weather from "../../Components/Weather/Weather";

import "./Total.scss";

function Total() {
  return (
    <section className=" flex flex-wrap justify-center bg-slate-400 rounded-lg border-solid border-2 border-black ">
      <article className=" flex flex-wrap w-full justify-center my-3">
        <DateAndTime />
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">
        <Weather />
      </article>

      <article className=" flex flex-wrap justify-center w-3/4">
        Całkowita kwota brutto
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">
        Całkowity VAT
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">
        Prowizja dla B/U
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">
        koszt całej trasy
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">Zysk</article>
      <article className=" flex flex-wrap justify-center w-3/4">
        Zarobek
      </article>

      <article className=" flex flex-wrap justify-center w-3/4">
        Ilość wydarzeń następnego dnia z API
      </article>
      <article className=" flex flex-wrap justify-center w-3/4">
        Notatki własne
      </article>
    </section>
  );
}

export default Total;
