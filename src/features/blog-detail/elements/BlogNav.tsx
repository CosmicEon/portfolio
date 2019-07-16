import React from "react";

interface Props {
  arrowValues: any;
}

const BlogNav: React.FC<Props> = ({ ...props }: Props) => {
  const arrowValues = props.arrowValues;

  return (
    <div className="navigation-area">
      <div className="columns">
        <a
          href={`/blog/${arrowValues.previous.index}`}
          className="column is-6 left"
        >
          <div className="thumb">
            <i className="fas fa-arrow-left" />
          </div>
          <div className="detials">
            <p>Prev Post</p>
            <h4>{arrowValues.previous.text}</h4>
          </div>
        </a>
        <a
          href={`/blog/${arrowValues.next.index}`}
          className="column is-6 right"
        >
          <div className="detials">
            <p>Next Post</p>
            <h4>{arrowValues.next.text}</h4>
          </div>
          <div className="thumb">
            <i className="fas fa-arrow-right" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogNav;
