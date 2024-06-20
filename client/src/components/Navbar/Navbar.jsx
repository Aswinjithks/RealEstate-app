import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthConext";
import noAavatar from "../../../public/noavatar.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" className="" />
          <span>rEalEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser?.avatar ?? noAavatar} alt="" />
            <span>{currentUser?.username}</span>
            <Link to="/profile" className="profile">
              <div className="notifucation">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <Link to={"/login"}>Sigin in</Link>
            <Link className="register" to={"/register"}>
              Sigin up
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sigin in</a>
          <a href="">Sigin up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
