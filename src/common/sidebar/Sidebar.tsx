import React from "react";
import "./Sidebar.css";
import profile_picture from "../../assets/images/profile_picture.jpg";

const Sidebar: React.FC = () => {
  return (
    <section className="sidebar">
      <i className="fa fa-bars" id="menu-toggle" />

      <div className="menu">
        <i className="fa fa-times" id="menu-close" />

        <div className="container">
          <div className="section-heading">
            <a className="image-container" href="/">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${profile_picture})`
                }}
              />
            </a>

            <div className="profile-content">
              <h4>Krasen Ilkov</h4>
              <span>Full Stack Developer</span>
            </div>
          </div>

          <div className="section-body">
            <nav className="main-nav">
              <ul>
                <li>
                  <a href="/about">About Me</a>
                </li>

                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>

                <li>
                  <a href="/blog">Blog</a>
                </li>

                <li>
                  <a href="/contact">Contact Me</a>
                </li>
              </ul>
            </nav>

            <div className="social-network">
              <ul className="soial-icons">
                <li>
                  <a href="/">
                    <i className="fab fa-github" />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
