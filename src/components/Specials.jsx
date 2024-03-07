import React from "react";

export default function Specials() {
  return (
    <div className="container" id="specials">
      <div className="specials-header">
        <h2>This weeks Specials</h2>
        <button className="btn btn-primary">Online Menu</button>
      </div>
      <div className="specials-grid">
        <div className="specials-grid-item">
          <img src="greek salad.jpg" alt="Special 1" />
          <h3>Greek Salad</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem.
          </p>
          <button className="btn btn-secondary">Order Delivery</button>
        </div>
        <div className="specials-grid-item">
          <img src="bruchetta.svg" alt="Special 1" />
          <h3>Bruchetta</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem.
          </p>
          <button className="btn btn-secondary">Order Delivery</button>
        </div>
        <div className="specials-grid-item">
          <img src="lemon dessert.jpg" alt="Special 1" />
          <h3>Lemon Dessert</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem.
          </p>
          <button className="btn btn-secondary">Order Delivery</button>
        </div>
      </div>
    </div>
  );
}
