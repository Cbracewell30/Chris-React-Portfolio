import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">
        <a href={currentCategory.link}>
          {capitalizeFirstLetter(currentCategory.name)}
        </a>
      </h1>

      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
