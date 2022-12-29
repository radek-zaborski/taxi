import axios from "axios";
import { useContext, useEffect } from "react";
import Context from "../Context/DataContext";

export function GetDataWeather() {
  const { setData } = useContext(Context);
  const adressAPI =
    "https://danepubliczne.imgw.pl/api/data/synop/station/wroclaw";

  useEffect(() => {
    const getWeatherApi = async () => {
      try {
        const response = await axios.get(adressAPI);
        setData((prevState) => {
          return {
            ...prevState,
            loadingWeather: false,
            weather: response.data,
          };
        });
      } catch (err) {
        console.log("blad:", err);
      }
    };

    getWeatherApi();
  }, [setData]);
}
