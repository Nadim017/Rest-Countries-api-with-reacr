import React, { useEffect, useState } from "react";
import Country from "./Component/Country/Country";
import Cart from "./Component/Cart/Cart";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .then((error) => console.log(error));
  }, []);
  const handleCountry = (country) => {
    const newSelectedCountry = [...selectedCountry, country];
    setSelectedCountry(newSelectedCountry);
  };
  const mainStyle = {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
  };

  return (
    <>
      <div className="app">
        <h1 style={mainStyle}>Total loaded Countries :{countries.length}</h1>
        <h3 style={mainStyle}>Country Added : {selectedCountry.length}</h3>
        <Cart selectedCountry={selectedCountry} />

        {countries.map((country) => (
          <Country
            key={country.alpha3Code}
            handleCountry={handleCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default App;
