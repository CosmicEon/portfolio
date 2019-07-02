import React from "react";
import "normalize.css";

// import styles from "./App.module.css";
import Router from "./elements/Router";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default App;
