import React, { useContext, useEffect } from "react";
import Context from "../../Context/DataContext";
import "../../Apis/Apis";
import { RequestApi } from "../../Apis/Apis";

function DataField() {
  const [context, setContext] = useContext(Context);

  RequestApi();

  return (
    <article>
      <h1>Witaj : ...</h1>
      <ul>
        <h2>Pogoda na dzisiaj:</h2>
      </ul>
    </article>
  );
}

export default DataField;
