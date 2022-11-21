import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";

import Total from "./Views/Total/Total";
import AllEvents from "./Views/AllEvents/AllEvents";
import SingleDay from "./Views/SignleDay/SingleDay";

function App() {
  return (
    <div class="w-screen flex flex-wrap m-0">
      <header class="w-screen h-auto">
        <Header />
      </header>

      <section class="w-10/12 mx-auto my-24 flex justify-center">
        <Switch>
          <Route exact path="/" component={Total}>
            <Total />
          </Route>
          <Route path="/SingleDay" component={SingleDay}>
            <SingleDay />
          </Route>
          <Route path="/AllEvents" component={AllEvents}>
            <AllEvents />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
