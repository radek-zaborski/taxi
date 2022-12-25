import "./DateAndTime.css";
import Clock from "react-live-clock";

function DateAndTime() {
  return (
    <article className="w-full flex flex-wrap">
      <h2 className="text-xl w-full justify-center flex font-bold">
        <Clock date={""} format={"DD-MM-YYYY"} />
      </h2>
      <h3 className="text-xl w-full justify-center flex font-bold">
        <Clock
          date={""}
          format={"k:mm:ss"}
          ticking={true}
          timezone={"Europe/Warsaw"}
        />
      </h3>
    </article>
  );
}

export default DateAndTime;
