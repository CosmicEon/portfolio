import React from "react";

interface Props {
  handleCreateComment: (e: any) => void;
  handleInputValue: (e: any) => (ev: any) => void;
}

const Replay: React.FC<Props> = ({ ...props }: Props) => {
  const createComment = props.handleCreateComment;
  const setInputValue = props.handleInputValue;

  return (
    <div className="comment-form">
      <h4>Leave a Reply</h4>
      <form onSubmit={e => createComment(e)}>
        <div className="form-group form-inline">
          <div className="form-group col-lg-6 col-md-6 name">
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={setInputValue("name")}
            />
          </div>
          <div className="form-group col-lg-6 col-md-6 email">
            <input
              id="email"
              className="form-control"
              type="email"
              placeholder="Enter email address"
              name="email"
              onChange={setInputValue("email")}
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control mb-10"
            rows={5}
            name="message"
            placeholder="Messege"
            onChange={setInputValue("message")}
            required
          />
        </div>
        <button type="submit" className="primary-btn primary_btn">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Replay;
