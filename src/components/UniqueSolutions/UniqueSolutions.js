import React from "react";
import UniqueSolutionCss from "./UniqueSolution.module.scss";
import "bootstrap/dist/css/bootstrap.css";

const UniqueSolutionFile = () => {
  const uniqueSolutionItems = [
    {
      img: "./UniqueSolutionImages/img_0.png",
      title: "Create a website using Html CSS and JavaScript",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      link: "Go somewhere >>",
    },
    {
      img: "./UniqueSolutionImages/img_0.png",
      title: "Complete portfolio website tutorial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      link: "Go somewhere >>",
    },
    {
      img: "/UniqueSolutionImages/img_0.png",
      title: "Bootstrap 5 Complete tutorial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      link: "Go somewhere >>",
    },
  ];
  return (
    <div className="container my-5">
      <div className={UniqueSolutionCss.uniqueGrid}>
        {uniqueSolutionItems.map((cardItem) => (
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
                <a
                  href="#"
                  className={`${UniqueSolutionCss.linkColor} fw-bold text-decoration-none`}
                >
                  {cardItem.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSolutionFile;
