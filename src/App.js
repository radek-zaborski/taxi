import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";

import Total from "./Views/Total/Total";
import AllEvents from "./Views/AllEvents/AllEvents";
import SingleDay from "./Views/SignleDay/SingleDay";
import Context from "./Context/DataContext";

function App() {
  const [data, setData] = useState(null);

  return (
    <Router>
      <Context.Provider value={{ data, setData }}>
        <div className="w-screen flex flex-wrap m-0">
          <header className="w-screen h-auto">
            <Header />
          </header>

          <section className="w-10/12 mx-auto my-2 flex justify-center">
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
      </Context.Provider>
    </Router>
  );
}

export default App;
