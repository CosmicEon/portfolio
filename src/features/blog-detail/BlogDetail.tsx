import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

import "./BlogDetail.scss";
import Footer from "../../common/footer/Footer";
import Comments from "./elements/Comments";
import Replay from "./elements/Replay";
import content from "../../services/content";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const BlogDetail: React.FC<Props> = ({ ...props }: Props) => {
  const [name, setName] = useState(""); // 1 comment as
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [selectedId, setSelectedId] = useState(0); // 1 comment as
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPostId = Number(props.match.params.id);
  const selectedBlogPost = content.blogPosts.filter(
    bp => bp.id === blogPostId
  )[0];
  const modalClasses = ["modal", isModalOpen ? "is-active" : null].join(" ");

  const setInputValue = (type: string) => (e: any) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createCommentModal = (id: number) => {
    console.log("createCommentModal", id);
    setSelectedId(id);
    toggleModal();
  };

  const createComment = (e: any) => {
    e.preventDefault();
    console.log("createComment", name, email, message);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <section className="section blog-detail">
        <div className="container">
          <div className="section-heading">
            <h2 className="text-uppercase">{selectedBlogPost.title}</h2>
            <ul className="blog-info">
              <li>
                <i className="far fa-calendar" />
                <span>{selectedBlogPost.date}</span>
              </li>
              <li>
                <i className="far fa-eye" />
                <span>{selectedBlogPost.views} Views</span>
              </li>
              <li>
                <i className="far fa-comment" />
                <span>{selectedBlogPost.comments.length} Comments</span>
              </li>
            </ul>
          </div>

          <div className="section-body">
            <div className="blog-image">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${selectedBlogPost.imgSrc})`
                }}
              />
            </div>

            <div className="blog-content">
              {selectedBlogPost.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <div className="navigation-area">
              <div className="columns">
                <a href="/" className="column is-6 left">
                  <div className="thumb">
                    <i className="fas fa-arrow-left" />
                  </div>
                  <div className="detials">
                    <p>Prev Post</p>
                    <h4>Space The Final Frontier</h4>
                  </div>
                </a>
                <a href="/" className="column is-6 right">
                  <div className="detials">
                    <p>Next Post</p>
                    <h4>Telescopes 101</h4>
                  </div>
                  <div className="thumb">
                    <i className="fas fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>

            {selectedBlogPost.comments.length > 0 && (
              <Comments
                blogPost={selectedBlogPost}
                handleToggleModal={toggleModal}
              />
            )}

            {/* <div className={modalClasses}>
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Modal title</p>
                  <i className="fas fa-times" onClick={toggleModal} />
                </header>
                <section className="modal-card-body">
                  <Replay handleToggleModal={toggleModal} />
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-success" onClick={toggleModal}>
                    Save changes
                  </button>
                  <button className="button" onClick={toggleModal}>
                    Cancel
                  </button>
                </footer>
              </div>
            </div> */}

            <Replay
              handleCreateComment={createComment}
              handleInputValue={setInputValue}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
