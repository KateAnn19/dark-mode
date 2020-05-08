import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";

import "./styles.scss";
import ExchangeRates from "./components/ExchangeRates";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/events/countries`)
      .then((res) => setCountryData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/exchange_rates`)
      .then((res) => setExchangeData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData}  />
      <Countries countryData={countryData}/>
      <ExchangeRates exchangeData={exchangeData}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
