import React from "react";
import UniqueSolutionCss from "./UniqueSolution.module.scss";
import "bootstrap/dist/css/bootstrap.css";

const UniqueSolutions = (props) => {

  return (
    <div className="my-5">
      <div className={UniqueSolutionCss.uniqueGrid}>
        {props.uniqueSolutionItems.map((cardItem) => (
          <div className="w-100 card px-2 py-3">
            <img
              className="card-img-top w-50 px-2"
              src={cardItem.img}
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{cardItem.title}</h5>
              <p className="card-text flex-grow-1">{cardItem.text}</p>
              <div className="d-flex g-5">
                {typeof cardItem.action.dest === "function" &&
                  <button className={`${UniqueSolutionCss.linkColor} fw-bold text-decoration-none btn btn-link p-0`} onClick={cardItem.action.dest}>{cardItem.action.text}</button>
                }
                {typeof cardItem.action.dest !== "function" &&
                  <a
                    href={typeof cardItem.action.dest === "undefined" ? "#" : cardItem.action.dest}
                    className={`${UniqueSolutionCss.linkColor} fw-bold text-decoration-none`}
                  >
                    {cardItem.action.text}
                  </a>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSolutions;
