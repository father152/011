import { NavLink, Outlet, Link } from "react-router-dom";
import "./Layout.css";
import image from "./гори.png";
import imag from "./глобус.png";

const Layout = () => {
  return (
    <>
      <header>
        <div className="pic">
          <Link to="/">
            <img className="picture" src={image} alt="" />
          </Link>
        </div>

        <NavLink to="/" className="link">
          ГОЛОВНА{" "}
        </NavLink>
        <NavLink to="/about" className="link">
          {" "}
          ПРО НАС
        </NavLink>
        <NavLink to="/bron" className="link">
          {" "}
          ЗАБРОНЮВАТИ
        </NavLink>
        <NavLink to="/contact" className="link">
          КОНТАКТИ{" "}
        </NavLink>
        <NavLink to="/house" className="link">
          ОСОБИСТИЙ КАБІНЕТ{" "}
        </NavLink>
        <div className="globus">
          <Link>
            <img className="globus" src={imag} alt="" />
          </Link>
          <p>UA</p>
        </div>
      </header>

      <Outlet />

      <footer>© 2021 HolidayTime. All rights reserved.</footer>
    </>
  );
};

export { Layout };
