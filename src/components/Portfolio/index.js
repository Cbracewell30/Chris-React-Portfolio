import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Allstar Sporting Goods",
      imgid: 0,
      link: "https://cryptic-sea-45670.herokuapp.com/",
      github: "https://github.com/Cbracewell30/Allstar-Sporting-Company",
      description: "This application is an inventory management system. ",
    },
    {
      name: " NY Best Sellers API",
      imgid: 2,
      link: "https://cbracewell30.github.io/Book-library/",
      github: "https://github.com/Cbracewell30/Book-library",
      description:
        "This application allows you to get reviews, by genre, for the weekly NY Best Sellers",
    },
    {
      name: "City Weather App",
      imgid: 1,
      link: "https://cbracewell30.github.io/Chris-Weather-Forcaster",
      github: "https://github.com/Cbracewell30/Chris-Weather-Forcaster",
      description:
        "This application allows you to get the 5 day weather forecast for a city, after searching the city's name. ",
    },
    {
      name: "NFL-Quiz",
      imgid: 3,
      link: "https://cbracewell30.github.io/NFL-Random-Question-Quiz/",
      github: "https://github.com/Cbracewell30/NFL-quiz",
      description: "This application is a NFL Quiz.",
    },
    {
      name: " NoteTake",
      imgid: 4,
      link: "https://afternoon-fortress-30590.herokuapp.com/",
      github: "https://github.com/Cbracewell30/express-journal",
      description:
        "This application allows you to add and remove daily notes. ",
    },
    {
      name: " Daily Scheduler",
      imgid: 5,
      link: "https://cbracewell30.github.io/Chris--daily-calendar-/",
      github:
        "https://github.com/Cbracewell30/Chris--daily-calendar-/blob/main/README.md",
      description: "This application allows you to schedule your day.",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {photos.map((image, i) => (
          <>
            <div className="projects">
              <h1 className="img-thumbnail">{image.name}</h1>
              <img
                src={`./assets/apps/${image.imgid}.jpg`}
                alt={image.name}
                className="img-thumbnail mx-2"
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
