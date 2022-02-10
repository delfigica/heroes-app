import React from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../hooks/userContext";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/heroes-app/login", {
      replace: true,
    });
  };

  const {user} = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-secondary" + (isActive ? "active" : "")
            }
            to="/heroes-app/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-secondary" + (isActive ? "active" : "")
            }
            to="/heroes-app/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-secondary" + (isActive ? "active" : "")
            }
            to="/heroes-app/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-light" key={user.id}>{user.userName}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
