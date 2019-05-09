import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import QRCode from "./QRCode/QRCode";
import Main from "./Main";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={QRCode} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
};

export default App;
