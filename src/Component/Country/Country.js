import React from "react";
import "./Country.css";

const Country = (props) => {
  const { population, region, flag, name, capital } = props.country;

  return (
    <>
      <div className="main-area">
        <h3>Name : {name}</h3>
        <img src={flag} alt="" />
        <p>Capital : {capital}</p>
        <p>
          <small>Population :{population}</small>
        </p>
        <p>Region :{region}</p>
        <button onClick={() => props.handleCountry(props.country)}>
          Add Country
        </button>
      </div>
    </>
  );
};

export default Country;
