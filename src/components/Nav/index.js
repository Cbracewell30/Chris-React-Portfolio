import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  // useEffect(() => {
  //   document.title = ;
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
          </span>{" "}
          Christopher Bracewell
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              About me
            </a>
          </li>

          <li
            className={`mx-1 ${
              !contactSelected && !resumeSelected && "navActive"
            }`}
          >
            <span
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${resumeSelected && "navActive"}`}>
            <span
              onClick={() => {
                setResumeSelected(true);
                setContactSelected(false);
              }}
            >
              Resume
            </span>
          </li>

          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
