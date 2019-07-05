import React from "react";

interface Props {}

const About: React.FC<Props> = ({ ...props }: Props) => {
  const myAge = new Date().getFullYear() - new Date("1990-01-23").getFullYear();

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>About myself</h2>
          <div className="line-dec" />
          <blockquote>"Curiosity is followed by ambition"</blockquote>
        </div>

        <div className="section-body">
          <p>
            Hello, my name is Krasen Ilkov, I'm {myAge} years old Web Developer.
            I love computer technologies and everything that brings with them. I
            work with JavaScript both in front-end with libraries and frameworks
            like Angular 2, and I work on back-end with Express framework. I
            like to stay up-to-date with the new technology and to experiment
            with them to uderstarnd how they work and how can improve my
            workflow.
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
  );
};

export default About;
