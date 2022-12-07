import axios from "axios";
import { useContext } from "react";
import Context from "../Context/DataContext";

export const RequestApi = async () => {
  const [weather, setWeather] = useContext(Context);

  const adressAPI =
    "https://danepubliczne.imgw.pl/api/data/synop/station/wroclaw";

  try {
    const res = await axios.get(adressAPI, {});
    setWeather({ weather: res.data });
  } catch (err) {
    console.log(err);
  }
};
