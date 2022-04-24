import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected && (
          <>
            <ContactForm></ContactForm>
          </>
        )}
        {resumeSelected && (
          <>
            <Resume></Resume>
          </>
        )}
        {portfolioSelected && (
          <>
            <Portfolio> </Portfolio>
          </>
        )}
        {!contactSelected && !resumeSelected && !portfolioSelected && (
          <About></About>
        )}
      </main>
    </div>
  );
}

export default App;
