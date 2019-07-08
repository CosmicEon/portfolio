import React from "react";

import "./About.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import content from "../../services/content";

interface Props {}

const About: React.FC<Props> = ({ ...props }: Props) => {
  const myAge = new Date().getFullYear() - new Date("1990-01-23").getFullYear();

  return (
    <>
      <Header
        headerTitle="The portfolio of"
        title="Krasen R. Ilkov"
        subTitle="A Full Stack Developer"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>About myself</h2>
            <div className="line-dec" />
            <blockquote>"Curiosity is followed by ambition"</blockquote>
          </div>

          <div className="section-body">
            <p>
              Hello, my name is Krasen Ilkov, I'm {myAge} years old Web
              Developer. I love computer technologies and everything that brings
              with them. I work with JavaScript both in front-end with libraries
              and frameworks like Angular 2, and I work on back-end with Express
              framework. I like to stay up-to-date with the new technology and
              to experiment with them to uderstarnd how they work and how can
              improve my workflow.
            </p>

            <a
              className="button"
              href="assets/CV_Krasen_Ilkov.pdf"
              target="_blank"
              rel="noopener"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>What I’m good at?</h2>
            <div className="line-dec" />
            <p>
              It's needed knowledge about technology, proper application of it
              and dedication to make an idea come true. I know some technologies
              well and for others have some basic knowledge about them, but my
              willingness to learn gives me the opportunity to improve my
              skills.
            </p>
          </div>

          <div className="section-body skills">
            {content.skills.map((s, i) => (
              <div className="skill-item" key={i}>
                <s.icon />
                <p>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
