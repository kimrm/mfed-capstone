import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <header className="container">
      <nav>
        <Link to="/" onClick={handleLinkClick}>
          <img src="logo.svg" alt="Little Lemon" />
        </Link>
        <ul className={isOpen ? "open" : undefined}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="#specials" onClick={handleLinkClick}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={handleLinkClick}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={handleLinkClick}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
        </ul>
        <button
          className="hamburger"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src="hamburger.svg"
            alt="hamburger menu"
            width={32}
            height={32}
          />
        </button>
      </nav>
    </header>
  );
}
