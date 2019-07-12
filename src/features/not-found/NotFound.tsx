import React from "react";
import Footer from "../../common/footer/Footer";

const NotFound: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Something went wrong</h2>
          </div>

          <div className="section-body">
            <p>Animation here</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
