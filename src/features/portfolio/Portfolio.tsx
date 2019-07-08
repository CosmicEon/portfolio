import React, { useState, useEffect } from "react";

import "./Portfolio.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import content from "../../services/content";

interface Props {}

const Portfolio: React.FC<Props> = ({ ...props }: Props) => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState(content.projects);

  useEffect(() => {
    if (filter === "all") {
      setProjects(content.projects);
    } else {
      const filteredProjects = content.projects.filter(p => p.group === filter);
      setProjects(filteredProjects);
    }
  }, [filter]);

  const inputChangedHandler = (event: any) => {
    const elementId = event.target.id;

    switch (elementId) {
      case "all":
        setFilter("all");
        break;
      case "telerik":
        setFilter("Telerik Academy");
        break;
      case "motion-software":
        setFilter("Motion Software");
        break;
      case "adsuisse":
        setFilter("ADSuisse");
        break;
      default:
        setFilter("all");
        break;
    }
  };

  return (
    <>
      <Header title="Portfolio" />
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
                <input
                  id="all"
                  type="radio"
                  name="selector"
                  defaultChecked
                  onChange={event => inputChangedHandler(event)}
                />
                <span>All</span>
              </label>

              <label htmlFor="telerik">
                <input
                  id="telerik"
                  type="radio"
                  name="selector"
                  onChange={event => inputChangedHandler(event)}
                />
                <span>Telerik</span>
              </label>

              <label htmlFor="motion-software">
                <input
                  id="motion-software"
                  type="radio"
                  name="selector"
                  onChange={event => inputChangedHandler(event)}
                />
                <span>Motion Software</span>
              </label>

              <label htmlFor="adsuisse">
                <input
                  id="adsuisse"
                  type="radio"
                  name="selector"
                  onChange={event => inputChangedHandler(event)}
                />

                <span>ADSuisse</span>
              </label>
            </form>

            <div className="projects">
              {projects.map(project => (
                <div className="column is-6 portfolio-item" key={project.id}>
                  <figure className="item-wrapper">
                    <img src={project.imgSrc} alt="some text" />
                    <figcaption>
                      <a href={`portfolio/${project.id}`}>
                        <i className="fa fa-search" />
                      </a>
                      <h4>{project.group}</h4>
                      <span>{project.name}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
