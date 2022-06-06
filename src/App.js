// node_modules
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// routes
import routes from "routes";

// provider
import GlobalProvider from "store/provider";

// hoc
import Layout from "hoc/Layout";

// css
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <div className="App">
          {/* Route Definition */}
          <Router>
            <Switch>
              {routes.map((route) => (
                <Route key={route.label} {...route} />
              ))}
            </Switch>
          </Router>
          {/* Route Definition END */}
        </div>
      </Layout>
    </GlobalProvider>
  );
}

App.displayName = "App";

export default App;
