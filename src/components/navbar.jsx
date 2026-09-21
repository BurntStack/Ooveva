import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Menu", "/menu"],
    ["Reservations", "/reservations"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" aria-label="Ooveva home">
          <img
            className="logo-mark"
            src="/logo.png"
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span>OOVEVA</span>
        </Link>

        <nav className="desktop-nav">
          {links.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <Link to="/reservations" className="nav-button">
            Reserve a table
          </Link>
          <button
            className="mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav container">
          {links.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}
          <Link to="/reservations" onClick={() => setOpen(false)}>
            Reserve a table
          </Link>
        </div>
      )}
    </header>
  );
}
