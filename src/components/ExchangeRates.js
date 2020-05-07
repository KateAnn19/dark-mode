import React from "react";

const ExchangeRates = ({ exchangeData }) => {
  //rates{
  //usd:{}
  //}
  let info = [];
  if (exchangeData === undefined) {
    return <h2>loading</h2>;
  } else if (exchangeData !== undefined) {
    let countryKey;
    for (let key in exchangeData) {
      //key is rates
      //exchangeData[key] = usd
      countryKey = exchangeData[key];
      //this is one large object
    }
    for (let newKey in countryKey) {
      //iterate through object
      info.push(
        <div className="Exchange">
          <p className="Ex">{countryKey[newKey].name}</p>
          <p className="Ex">{countryKey[newKey].unit}</p>
          <p className="Ex">{countryKey[newKey].value}</p>
          <p className="Ex">{countryKey[newKey].type}</p>
        </div>
      );
      //name
      //unit
      //value
      //type
    }
  }
  return (
    <div>
      <h1>Exchange Rates</h1>
      <div className="Exchange-Info">{info}</div>
    </div>
  );
};

export default ExchangeRates;
