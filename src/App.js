import "./App.css";
import { Route, Switch } from "react-router-dom";

import Total from "./Views/Total/Total";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Total}></Route>
      </Switch>
    </div>
  );
}

export default App;
