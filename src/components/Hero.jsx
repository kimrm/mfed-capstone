import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
              <Link to="/booking" role="button" className="btn btn-primary">
                Order Online
              </Link>
            </div>
          </div>
          <img src="restauranfood.jpg" alt="Little Lemon" width={300} />
        </div>
      </div>
    </section>
  );
}
