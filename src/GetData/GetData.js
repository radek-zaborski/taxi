import { useContext, useEffect } from "react";
import Context from "../Context/DataContext";
import axios from "axios";

export const GetData = () => {
  const { setData } = useContext(Context);

  function getTime() {
    const today = new Date();
    const time = String(`${today.getHours()}:${today.getMinutes()}`);
    return time;
  }

  function getDate() {
    const today = new Date();
    const day =
      today.getDate() < 10 ? "0" + toString(getDate()) : today.getDate();
    const month =
      today.getMonth() + 1 < 10
        ? "0" + String(today.getMonth())
        : today.getMonth();

    return `${day}-${month}-${today.getFullYear()}`;
  }

  const adressAPI =
    "https://danepubliczne.imgw.pl/api/data/synop/station/wroclaw";

  useEffect(() => {
    const getWeatherApi = async () => {
      try {
        const response = await axios.get(adressAPI);

        setData({ weather: response.data });
      } catch (err) {
        console.log("blad:", err);
      }
    };
    getWeatherApi();

    setInterval(() => {
      setData((prevState) => {
        return {
          ...prevState,
          date: {
            numberDate: getDate(),
            time: getTime(),
          },
        };
      });
    }, 1000);
  }, []);
};
