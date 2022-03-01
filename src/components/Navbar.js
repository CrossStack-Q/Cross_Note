import React, { useEffect } from "react";
import Logo from "./assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Switch, Input } from "@nextui-org/react";
import { Sun, Moon } from "./icons";

const Navbar = () => {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/login">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" width="40" height="40" />
            </a>
            Cross_Note
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/rio" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-warning mx-3 text-dark fw-bolder"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
                <Link
                  className="btn btn-warning mx-3 text-dark fw-bolder"
                  to="/login2"
                  role="button"
                >
                  Login
                </Link>
              </form>
            ) : (
              <form className="d-flex">
                <Grid.Container gap={2}>
                  <Input
                    width="720px"
                    placeholder="Seach Notes"
                    css={{
                      marginRight: 220
                    }}
                  />
                  <Grid>
                    <Switch
                      checked={true}
                      size="md"
                      squared
                      shadow
                      color="error"
                      iconOn={<Sun filled />}
                      iconOff={<Moon filled />}
                    />
                  </Grid>
                  <Grid>
                    <Button onClick={handleLogout} color="warning" auto>
                      Logout
                    </Button>
                  </Grid>
                </Grid.Container>

                {/* <button
                  onClick={handleLogout}
                  className="btn btn-warning text-dark fw-bolder"
                >
                  {" "}
                  Logout
                </button> */}
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
