import React, { useState, useEffect, useRef } from "react";
import "./prices.css";

const Prices = () => {
  const [USD, setUSD] = useState();
  const [GBP, setGBP] = useState();
  const [EUR, setEUR] = useState();

  const getData = () => {
    setInterval(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => response.json())
        .then((response) => {
          setUSD(response.bpi.USD.rate);
          setGBP(response.bpi.GBP.rate);
          setEUR(response.bpi.EUR.rate);
        });
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const usd = document.querySelector("#usd");
    const controlling = setInterval(() => {
      if (usd.classList.contains("alert")) {
        usd.classList.remove("alert");
      } else {
        usd.classList.add("alert");
      }
    }, 200);

    setTimeout(() => {
      clearInterval(controlling);
    }, 2000);
  }, [USD]);

  useEffect(() => {
    const gbp = document.querySelector("#gbp");
    const controlling = setInterval(() => {
      if (gbp.classList.contains("alert")) {
        gbp.classList.remove("alert");
      } else {
        gbp.classList.add("alert");
      }
    }, 200);

    setTimeout(() => {
      clearInterval(controlling);
    }, 2000);
  }, [GBP]);

  useEffect(() => {
    const eur = document.querySelector("#eur");
    const controlling = setInterval(() => {
      if (eur.classList.contains("alert")) {
        eur.classList.remove("alert");
      } else {
        eur.classList.add("alert");
      }
    }, 200);

    setTimeout(() => {
      clearInterval(controlling);
    }, 2000);
  }, [EUR]);

  return (
    <section className="container text-center flex prices">
      <div className="title m-30">
        <h1>
          <u style={{ color: "purple" }}>Bitcoin Prices</u>
        </h1>
      </div>
      <div className="grid">
        <h1 id="usd" className="transition">
          USD: {USD}
        </h1>
        <h1 id="gbp" className="transition">
          GBP: {GBP}
        </h1>
        <h1 id="eur" className="transition">
          EUR: {EUR}
        </h1>
      </div>
    </section>
  );
};

export default Prices;
