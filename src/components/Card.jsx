import React from "react";
import "../index.css";
import Images from "./Images";

function Card(props) {
  return (
    <>
      <div className="card">
        {/* <img src={props.imgsrc} alt="netflix" className="card-image" /> */}

        <Images imgsrc = { props.imgsrc } />

        <div className="card-info">
          <span className="card-category"> {props.title} </span>
          <h3> {props.sname} </h3>
          <a href={props.serlink} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
