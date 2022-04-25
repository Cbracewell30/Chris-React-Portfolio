import React from "react";
import logo from "../../assets/logo-blue.png";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    setPortfolioSelected,
    portfolioSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>
          Christopher Bracewell
          <img
            src={logo}
            alt="logo"
            className="logo"
            width="50px"
            height="50px"
          ></img>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2 navActive">
            <a
              data-testid="about"
              href="#about"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              About me
            </a>
          </li>

          <li
            className={`mx-1 ${portfolioSelected &&
              !contactSelected &&
              !resumeSelected &&
              "navActive"}`}
          >
            <span
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(true);
              }}
            >
              Portfolio
            </span>
          </li>
          <li
            className={`mx-2 ${resumeSelected &&
              !contactSelected &&
              !portfolioSelected &&
              "navActive"}`}
          >
            <span
              onClick={() => {
                setResumeSelected(true);
                setContactSelected(false);
                setPortfolioSelected(false);
              }}
            >
              Resume
            </span>
          </li>

          <li
            className={`mx-2 ${contactSelected &&
              !resumeSelected &&
              !portfolioSelected &&
              "navActive"}`}
          >
            <span
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
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
