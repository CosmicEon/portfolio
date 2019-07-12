import React from "react";

import { BlogPost } from "../../../services/content";

interface Props {
  blogPost: BlogPost;
  handleToggleModal: (id: number) => void;
}

const Comments: React.FC<Props> = ({ ...props }: Props) => {
  const blogPost = props.blogPost;
  const toggleModal = props.handleToggleModal;

  return (
    <div className="comments-area">
      <h4>{blogPost.comments.length} Comments</h4>
      {blogPost.comments.map((comment, i) => (
        <div className="single-comment" key={i}>
          <div className="comment-info">
            <div className="thumb">
              <i className="fas fa-user" />
            </div>
            <div className="desc">
              <h5>{comment.user}</h5>
              <p className="date">{comment.date}</p>
            </div>
            <button
              className="button comment-reply-btn"
              onClick={() => toggleModal(comment.id)}
            >
              reply
            </button>
          </div>

          <div className="comment-content">
            <p className="comment">{comment.message}</p>
          </div>
          {comment.replayes.length > 0 && (
            <div className="comment-replayes">
              {comment.replayes.map((replay, ind) => (
                <div className="single-comment  left-padding" key={ind}>
                  <div className="comment-info">
                    <div className="thumb">
                      <i className="fas fa-user" />
                    </div>
                    <div className="desc">
                      <h5>{replay.user}</h5>
                      <p className="date">{replay.date}</p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p className="comment">{replay.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
