import "./DateAndTime.css";
import Context from "../../Context/DataContext";
import { GetData } from "../../GetData/GetData";
import { useContext } from "react";

function DateAndTime() {
  GetData();
  const { data } = useContext(Context);
  const { date } = data ? data : { data: "Oczekuje na dane" };
  const { numberDate, time } = date ? date : { time: "Oczekuje na dane" };
  return (
    <article className="w-full flex flex-wrap">
      <h2 className="text-xl w-full justify-center flex font-bold">
        {numberDate}
      </h2>
      <h3 className="text-xl w-full justify-center flex font-bold">{time}</h3>
    </article>
  );
}

export default DateAndTime;
