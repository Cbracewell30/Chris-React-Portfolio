import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import PhotoList from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

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
            <Footer></Footer>
          </>
        )}
        {resumeSelected && (
          <>
            <Resume></Resume>
            <Footer></Footer>
          </>
        )}
        {portfolioSelected && (
          <>
            <PhotoList> </PhotoList>
            <Footer></Footer>
          </>
        )}
        {!contactSelected && !resumeSelected && !portfolioSelected && (
          <>
            {" "}
            <About></About>
            <Footer></Footer>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
