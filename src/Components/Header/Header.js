import React from 'react';
import './Header.css';

function Header() {
  return(
    <header className="header">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-quotes" href="/">Home</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/quotes">Quotes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">Books</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
