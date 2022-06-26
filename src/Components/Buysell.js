import React from "react";
import style from "../CSS/Buysell.module.css";
// import Buysell from './Buysell';

const Buysell = () => {
  return (
    <div class={style.buy_sell} style={{ height: "100%" }}>
      <div class={style.title}>
        <p>Instant Buy & Sell</p>
      </div>
      <div class={style.buy_sellbtns}>
        <button class={style.buy}>BUY</button>
        <button class={style.sell}>SELL</button>
      </div>
      <div class={style.first_list}>
        <select class="form-select" aria-label="Default select example">
          <option selected>Gold</option>
          <option value="1">Gold</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class={style.first_label}>
        <input
          class="form-control"
          type="text"
          value="123gm"
          aria-label="default input example"
        />
        <span>quantity</span>
      </div>
      <div class={style.group}>
        <div class={style.second_list}>
          <select class="form-select" aria-label="Default select example">
            <option selected>Other type</option>
            <option value="1">Gold</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class={style.second_label}>
          <input
            class="form-control"
            type="text"
            value="EGP0.00"
            aria-label="default input example"
          />
          <span>Price Limit</span>
        </div>
      </div>
      <div class={style.third_label}>
        <input
          class="form-control"
          type="text"
          value="0000000"
          aria-label="default input example"
        />
        <span>Order Value Summary</span>
      </div>
      <div class={style.last_btns}>
        <button class={style.reset}>Reset</button>
        <button class={style.preview}>Preview</button>
      </div>
    </div>
  );
};

export default Buysell;
