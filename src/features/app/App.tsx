import React from "react";
import "normalize.css";

import styles from "./App.module.css";
import "../../../node_modules/bulma/css/bulma.min.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/style.css";

import Router from "./elements/Router";
import ProgressBar from "../../common/progress-bar/ProgressBar";
import Sidebar from "../../common/sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <main id={styles["main-container"]}>
        <ProgressBar />
        <Router />
      </main>
    </>
  );
};

export default App;
