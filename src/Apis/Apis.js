import { useContext, useEffect } from "react";
import Context from "../Context/DataContext";
import axios from "axios";
export const RequestApi = () => {
  const [data, setData] = useContext(Context);

  const adressAPI =
    "https://danepubliczne.imgw.pl/api/data/synop/station/wroclaw";

  function getTime() {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  }

  function getDate() {
    const today = new Date();
    return `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`;
  }

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
      setData({
        date: {
          numberDate: getDate(),
          time: getTime(),
        },
      });
    }, 1000);
  }, []);
};
