import React from "react";

const Countries = ({ countryData }) => {
  return (
      <>
    <h1>Events By Country</h1>
    <div className="Country">
        
      {countryData.data === undefined
        ? "Loading"
        : countryData.data.map((c) => (
            <div className="Countries">
              <h2 className="Country-Name">{c.country}</h2>
            </div>
          ))}
    </div>
    </>
  );
};
export default Countries;
