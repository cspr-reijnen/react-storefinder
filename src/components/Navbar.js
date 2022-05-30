import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src="./img/logo.svg" alt="Jumbo-logo" className="nav__logo"></img>
        <ul className="nav__items">
            <li><a href="/#">Producten</a></li>
            <li><a href="/#">Aanbiedingen</a></li>
            <li><a href="/#">Win- en spaaracties</a></li>
            <li><a href="/#">Online bestellen</a></li>
            <li><a href="/#">Wat eten we?</a></li>
            <li><a href="/#">Recepten</a></li>
            <li><a href="/#">Service</a></li>
            <li><a href="/#">Zakelijk bestellen</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
