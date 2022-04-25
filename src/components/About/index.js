import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h2 id="about">Welcome To My Portfolio</h2>
      <img
        src={coverImage}
        className="my-2
        "
        height="400px"
        width="400px"
        alt="cover"
      />
      <div className="my-2">
        <p>
          Hello and Welcome! My name is Christopher Bracewell. I am new to
          developing. I started developing in November 2021, once I started my
          developer bootcamp. I have loved learning the different languages and
          being able to use them to create Application. In the portfolio tab,
          you can see some of my Application. If you click the images, a modal
          will provide links to the Deployment. I hope you enjoy them! Thank
          you!
        </p>
      </div>
    </section>
  );
}

export default About;
