import React from "react";
import style from "../CSS/Accountbalance.module.css";

const Accountbalance = () => {
  return (
    <div className={style.accBalance} style={{ height: "100%" }}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.account_balance_navbar}>
            <div className="navbar-dark">
              <nav className="navbar ">
                <div
                  className="navbar-brand"
                  href="#"
                  style={{
                    color: "var(--main-color)",
                    position: "relative",
                    left: "15px",
                    paddingTop: "0px",
                  }}
                >
                  Account Balance
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    // style={{
                    //   backgroundAttachment: url(
                    //     "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28189, 145, 47, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"
                    //   ),
                    // }}
                  ></span>
                </button>
              </nav>
            </div>
            <div className="collapse" id="navbarToggleExternalContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={style.balancetotal}>
          <div className={style.sections}>
            <div className="row ">
              <div className="col-lg-4">
                <div className={style.gold_balance}>Gold Balance</div>
              </div>
              <div className="col-lg-4">
                <div className={style.section2}>
                  <div className={style.first}>Available</div>
                  <div className={style.second}>withdrawl</div>
                  <div className={style.third}>Total</div>
                  <div className={style.fourth}>Value</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.section3}>
                  <div className={style.first}>1350gm</div>
                  <div className={style.second}>EGP 92.257.00</div>
                  <div className={style.third}>100gm</div>
                  <div className={style.fourth}>10gm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.multiclasses}>
        <div className={style.cashbalance}>
          <p>Cash Balance</p>
          <span>EGP 100.000.00</span>
        </div>
        <div className={style.unrelized}>
          <p>Unrelized P/L</p>
          <span>EGP 950.024.00</span>
        </div>
        <div className={style.funds}>
          <p>Funds in withdrawl</p>
          <span>EGP 950.024.00</span>
        </div>
        <div className={style.value}>
          <p>Portfolio Value</p>
          <span>EGP 90.183</span>
        </div>
      </div>
    </div>
  );
};

export default Accountbalance;
