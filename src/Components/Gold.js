import React from "react";
import style from "../CSS/Gold.module.css";
import Chart from "./Chart";

const Gold = () => {
  return (
    <div class={style.first}>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class={style.metalprices}>
            <div class={style.title}>
              <p>Live Metal Prices</p>
              <div class={style.state}>
                <p>Market is open</p>
              </div>
            </div>

            <div class={style.content}>
              <div class={style.gold_sections}>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class={style.section1}>Gold</div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class={style.section2}>
                      <div class={style.first}>Buy</div>
                      <div class={style.second}>Sell</div>
                      <div class={style.third}>Daily change</div>
                      <div class={style.fourth}>Daily change%</div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class={style.section3}>
                      <div class={style.first}>EGP 980.00</div>
                      <div class={style.second}>EGP 970.00</div>
                      <div class={style.third}>EGP 5.0</div>
                      <div class={style.fourth}>0.1 %</div>
                    </div>
                  </div>
                </div>
                <div class={style.law}>
                  Daily Change = Difference from day before
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class={style.price_chart}>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gold;
