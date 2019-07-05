import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

const Blog: React.FC = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <div className="section-heading">Blog heading</div>

          <div className="section-body">Blog body</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
