import React from "react";
import Gold from "./Components/Gold";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./CSS/app.css";
import Buysell from "./Components/Buysell";
import Accountbalance from "./Components/Accountbalance";
import style from "./CSS/Gold.module.css";

const App = () => {
  return (
    <div className="app">
      <div className={style.dashboard}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Gold />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Buysell />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Accountbalance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
