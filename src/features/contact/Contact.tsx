import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Contact.css";

interface Props {}

const Contact: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Contact Me</h2>
            <div className="line-dec" />
            <span>
              Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
              efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </span>
          </div>

          <div className="section-body">
            <form id="contact" action="" method="post">
              <div className="columns">
                <div className="column is-6">
                  <div className="input-wrapper">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name..."
                      required
                    />
                  </div>

                  <div className="input-wrapper">
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your email..."
                      required
                    />
                  </div>

                  <div className="input-wrapper">
                    <input
                      name="subject"
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject..."
                      required
                    />
                  </div>
                </div>

                <div className="column is-6">
                  <div className="input-wrapper">
                    <textarea
                      name="message"
                      rows={6}
                      className="form-control"
                      id="message"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column is-3 is-offset-9">
                  <button type="submit" id="form-submit" className="button">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
