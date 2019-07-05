import React from "react";

import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import About from "./elements/About";
import Skills from "./elements/Skills";

interface Props {}

const Home: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
