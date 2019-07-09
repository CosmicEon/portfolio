import React from "react";
import Footer from "../../common/footer/Footer";

const NotFound: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading">Something went wrong</div>

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
