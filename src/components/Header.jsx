import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
   <> 

   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
        <NavLink
            className="nav-link"
            to="/"
            tabIndex={-1}
            aria-disabled="true"
            >
            Home
          </NavLink>
        </li>

            <li
              className={`nav-item dropdown ${isOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded={isOpen}>
                Components
              </a>
              <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                <li>
                <NavLink
                  className="dropdown-item"
                  to="/state-city"
                  >
                  State City Selections
                </NavLink>
                </li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

        <li className="nav-item">
        <NavLink
            className="nav-link"
            to="/blog"
            tabIndex={-1}
            aria-disabled="true"
            >
            Blog
          </NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
</>
  );
};

export default Header;
