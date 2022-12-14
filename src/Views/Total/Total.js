import DateAndTime from "../../Components/DateAndTime/DateAndTime";
import Weather from "../../Components/Weather/Weather";

import "./Total.scss";

function Total() {
  return (
    <section className=" flex flex-wrap justify-around bg-slate-400 rounded-lg border-solid border-2 border-black ">
      <article className=" flex flex-wrap w-full justify-center my-3">
        <DateAndTime />
      </article>
      <section className="w-5/12 ">
        <article className=" flex flex-wrap justify-center w-3/4">
          <Weather />
        </article>
      </section>

      <section className="w-5/12 flex flex-wrap items-center bg-slate-300 rounded-lg border-solid border-2 border-black">
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
      </section>

      <article className=" flex flex-wrap justify-center w-3/4 mt-10">
        Ilość wydarzeń następnego dnia z API
      </article>
      <article className=" flex flex-wrap justify-center w-3/4 mb-5">
        Notatki własne
      </article>
    </section>
  );
}

export default Total;
