import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Index } from "./routes/Index";
import "./assets/styles/style.scss";
import { FoundVideosPage } from "./routes/FoundVideosPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/videos" exact component={FoundVideosPage} />
      </Switch>
    </Router>
  );
};

export default App;
