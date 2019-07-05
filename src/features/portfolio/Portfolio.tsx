import React from "react";
import "./Portfolio.css";
import project_1 from "../../assets/images/projects/project_1.jpg";

interface Props {}

const Portfolio: React.FC<Props> = ({ ...props }: Props) => {
  // TODO: filter

  // const skills = [{},{}];
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Some work that I've done</h2>
          <div className="line-dec" />
          <span>
            Here you can see the projects that I made. For some, I contributed
            to as a team work and for others I made by my own.
          </span>
        </div>

        <div className="section-body">
          <form className="portfolio-toolbar">
            <label htmlFor="all">
              <input id="all" type="radio" name="foobar" checked />
              <span>All</span>
            </label>

            <label htmlFor="telerik">
              <input id="telerik" type="radio" name="foobar" />
              <span>Telerik</span>
            </label>

            <label htmlFor="motion-software">
              <input id="motion-software" type="radio" name="foobar" />
              <span>Motion Software</span>
            </label>

            <label htmlFor="adsuisse">
              <input id="adsuisse" type="radio" name="foobar" />
              <span>ADSuisse</span>
            </label>
          </form>

          <div className="columns">
            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>

            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="columns">
            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>

            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="columns">
            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>

            <div className="column is-6 portfolio-item">
              <figure className="item-wrapper">
                <img src={project_1} alt="some text" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg">
                    <i className="fa fa-search" />
                  </a>
                  <h4>Telerik Academy</h4>
                  <span>Minesweeper game</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
