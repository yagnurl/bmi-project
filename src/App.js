// import "./styles.css";
//import "./style-diet.css";
import React from "react";
import Footer from "./components/Footer.jsx";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import link from "./data/link.js";
import SwipeableTemporaryDrawer from "./components/NavBar.jsx";

function App() {
  const routeMap = link.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));

  return (
    <>
      <BrowserRouter>
        <SwipeableTemporaryDrawer link={link} />
        <Switch>
          {routeMap}
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
