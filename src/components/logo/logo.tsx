import "./logo.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import SignIn from "../signIn/signIn";

const Logo = () => {
  const [selected, setSelected] = useState("login");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="rightContainer">
        <div className="imgContainer">
          <img
            src={require("../../assets/images/logo.png")}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="lockText">
          Protect & Manage every <br />
          password in your business
        </div>
      </div>

      <div className="mobileLogo">
        <div className="logoDesign">
          <img
            src={require("../../assets/images/logo (3).png")}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="bloc-tabs">
          <div className={toggleState === 1 ? "underline" : ""} onClick={()=>toggleTab(1)}>
            <Link to="/" className="mobileSignIn">
              sign In
            </Link>
          </div>
          <div className={toggleState === 2 ? "underline" : ""} onClick={() => toggleTab(2)}>
            <Link to="/register" className="mobileSignIn">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
