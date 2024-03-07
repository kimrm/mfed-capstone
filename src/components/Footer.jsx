import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-grid">
        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#specials">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/booking">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>[Address]</li>
            <li>[Phone number]</li>
            <li>[E-mail]</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>[facebook]</li>
            <li>[instagram]</li>
            <li>[linkedin]</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
