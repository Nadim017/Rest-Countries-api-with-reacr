import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.selectedCountry;
  const totalPopulation = cart.reduce(
    (all, country) => all + country.population,
    0
  );
  return (
    <>
      <div className="cart">
        <h2>this is cart :{cart.length}</h2>
        <h2>Total Population :{totalPopulation}</h2>
      </div>
    </>
  );
};

export default Cart;
