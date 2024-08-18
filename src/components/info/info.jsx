import React from "react";
import style from "./info.module.scss";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaAngleDown, FaGlobeAmericas } from "react-icons/fa";
import GG from '/GG.svg';
import flag from '/Group.svg'

function Info() {
  return (
    <div className={style.center}>
      <div className={style.header}>
        <div className={style.phoneWrapper}>
          <a href="/">
            <img src={GG} alt="GG" />
          </a>
          <div className={style.phone}>
            <BsTelephoneInbound style={{ color: "white", fontSize: "18px" }} />
            <p>+4904-049-950</p>
          </div>
        </div>
        <div className={style.login}>
          <p>Get 50% Off on the Selected items </p>
          <a href="#">Shop now</a>
        </div>
        <div className={style.wrapper}>
          <div className={style.option}>
            <FaAngleDown />
            English
            <img src={flag} alt="america" />
          </div>
          <div className={style.location}>
            <FaGlobeAmericas />
            Location
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
