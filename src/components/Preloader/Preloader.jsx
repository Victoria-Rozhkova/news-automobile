import React from "react";
import style from "./Preloader.module.css"
import spinner from "../../assets/images/spinner.gif";

export const Preloader = () => {
  return (
    <div className={style.loader}>
      <img src={spinner} alt="loading..." />
    </div>
  );
};