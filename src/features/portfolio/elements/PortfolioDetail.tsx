import React from "react";
import { RouteComponentProps } from "react-router";
import Header from "../../../common/header/Header";
import Footer from "../../../common/footer/Footer";
import content from "../../../services/content";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
const PortfolioDetail: React.FC<Props> = ({ ...props }: Props) => {
  const projectId = Number(props.match.params.id);
  const selectedProject = content.projects.filter(p => p.id === projectId)[0];

  return (
    <>
      <Header title="Project Details" />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2 className="text-uppercase">{selectedProject.name}</h2>
            <div className="columns">
              <div className="column is-8">
                <img
                  className="img-fluid"
                  src={selectedProject.imgSrc}
                  alt=""
                />
              </div>
              <div className="column is-4">
                <ul>
                  {selectedProject.technologies.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="section-body">
            <p>{selectedProject.description}</p>
            <div>
              <button>Live</button>
              <button>Repo</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioDetail;
