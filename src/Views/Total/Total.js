import { useContext, useEffect, useMemo } from "react";
import DataField from "../../Components/DataField/DataField";
import Context from "../../Context/DataContext";

import "./Total.scss";

function Total() {
  const [data, setData] = useContext(Context);
  console.log("context pobierany z Total:", data);

  return (
    <section>
      <article>{/* <h3>Data: {today ? today.dateNumber : ""}</h3> */}</article>
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
