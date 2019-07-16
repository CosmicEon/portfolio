import React, { useState } from "react";

interface Props {
  handleCreateComment: (e: any, ev: any) => void;
}

const Replay: React.FC<Props> = ({ ...props }: Props) => {
  const createComment = props.handleCreateComment;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const formValues = () => {
    const formValues = {
      name,
      email,
      message
    };
    setName("");
    setEmail("");
    setMessage("");
    return formValues;
  };

  return (
    <div className="comment-form">
      <h4>Leave a Reply</h4>
      <form onSubmit={e => createComment(e, formValues())}>
        <div className="form-group form-inline">
          <div className="form-group col-lg-6 col-md-6 name">
            <input
              id="name"
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={setInputValue("name")}
            />
          </div>
          <div className="form-group col-lg-6 col-md-6 email">
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
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
            value={message}
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
