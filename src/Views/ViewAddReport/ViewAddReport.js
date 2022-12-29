import Context from "../../Context/DataContext";
import "./ViewAddReport.css";
import { useState, useContext } from "react";
import { InputValue } from "./InputValue/InputValue";

function ViewAddReport() {
  const { data, wallet, setWallet } = useContext(Context);
  const [temporaryCost, setTemporaryCost] = useState(null);

  function handleBrutto(e) {
    setTemporaryCost({ brutto: e.target.value });
    console.log("wykonałem brutto");
  }

  function handleNetto(e) {
    setTemporaryCost((prevState) => {
      return {
        ...prevState,
        netto: e.target.value * 0.92,
      };
    });
    console.log("wykonałem netto");
  }
  function HandleSendToWalletValueWallet() {
    setWallet((prevState) => {
      return { wallet: { ...prevState, ...temporaryCost } };
    });
    console.log("po zatwierdzeniu z inputu", temporaryCost);
  }
  console.log("wartość contextu", data, wallet);
  return (
    <div>
      <InputValue
        id="brutto"
        type="int"
        name="kwota brutto:"
        useHandle={handleBrutto}
      />
      <InputValue
        id="netto"
        type="int"
        name="kwota netto:"
        useHandle={handleNetto}
      />
      <button
        onClick={() => {
          HandleSendToWalletValueWallet(temporaryCost);
        }}
      >
        Zatwierdź
      </button>
    </div>
  );
}

export default ViewAddReport;
