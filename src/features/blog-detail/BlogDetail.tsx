import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

import "./BlogDetail.scss";
import Footer from "../../common/footer/Footer";
import BlogNav from "./elements/BlogNav";
import Comments from "./elements/Comments";
import Replay from "./elements/Replay";
import content from "../../services/content";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const BlogDetail: React.FC<Props> = ({ ...props }: Props) => {
  const blogPostId = Number(props.match.params.id);
  const selectedBlogPost = content.blogPosts.filter(
    bp => bp.id === blogPostId
  )[0];

  const [blogPost, setBlogPost] = useState(selectedBlogPost);

  const [selectedCommentId, setSelectedCommentId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClasses = ["modal", isModalOpen ? "is-active" : null].join(" ");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleReplayModal = (id: number) => {
    setSelectedCommentId(id);
    toggleModal();
  };

  const createComment = (e: any, formValues: any) => {
    e.preventDefault();

    const newComment = {
      id: blogPost.comments.length + 1,
      user: formValues.name,
      email: formValues.email,
      date: new Date().toDateString(),
      message: formValues.message,
      replayes: []
    };
    const updatedBlogPost = {
      ...blogPost,
      comments: [...blogPost.comments, newComment]
    };

    setBlogPost(updatedBlogPost);
    setIsModalOpen(false);
  };

  const createReplayComment = (e: any, formValues: any) => {
    e.preventDefault();

    const newReplay = {
      user: formValues.name,
      date: new Date().toDateString(),
      message: formValues.message
    };
    const updatedComents = blogPost.comments.map(coment => {
      if (coment.id === selectedCommentId) {
        return { ...coment, replayes: [...coment.replayes, newReplay] };
      }
      return coment;
    });

    const updatedBlogPost = {
      ...blogPost,
      comments: [...updatedComents]
    };

    setBlogPost(updatedBlogPost);
    toggleModal();
  };

  const navValues = () => {
    const blogPostIndex = content.blogPosts.findIndex(b => b.id === blogPostId);
    const formValues = {
      previous: { index: 42, text: "" },
      next: { index: 42, text: "" }
    };

    // previous
    if (blogPostIndex === 0) {
      formValues.previous.index = content.blogPosts[blogPostIndex].id;
      formValues.previous.text = content.blogPosts[blogPostIndex].title;
    } else {
      formValues.previous.index = content.blogPosts[blogPostIndex - 1].id;
      formValues.previous.text = content.blogPosts[blogPostIndex - 1].title;
    }

    // next
    if (blogPostIndex === content.blogPosts.length) {
      formValues.next.index = content.blogPosts[blogPostIndex].id;
      formValues.next.text = content.blogPosts[blogPostIndex].title;
    } else {
      formValues.next.index = content.blogPosts[blogPostIndex + 1].id;
      formValues.next.text = content.blogPosts[blogPostIndex + 1].title;
    }

    return formValues;
  };

  return (
    <>
      <section className="section blog-detail">
        <div className="container">
          <div className="section-heading">
            <h2 className="text-uppercase">{blogPost.title}</h2>
            <ul className="blog-info">
              <li>
                <i className="far fa-calendar" />
                <span>{blogPost.date}</span>
              </li>
              <li>
                <i className="far fa-eye" />
                <span>{blogPost.views} Views</span>
              </li>
              <li>
                <i className="far fa-comment" />
                <span>{blogPost.comments.length} Comments</span>
              </li>
            </ul>
          </div>

          <div className="section-body">
            <div className="blog-image">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${blogPost.imgSrc})`
                }}
              />
            </div>

            <div className="blog-content">
              {blogPost.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <BlogNav arrowValues={navValues()} />

            {blogPost.comments.length > 0 && (
              <Comments
                blogPost={blogPost}
                handleToggleReplayModal={toggleReplayModal}
              />
            )}

            <div className={modalClasses}>
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title" />
                  <i className="fas fa-times" onClick={toggleModal} />
                </header>
                <Replay handleCreateComment={createReplayComment} />
              </div>
            </div>

            <Replay handleCreateComment={createComment} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
