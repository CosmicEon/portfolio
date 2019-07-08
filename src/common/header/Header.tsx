import React from "react";
import styles from "./Header.module.css";

interface Props {
  headerTitle?: string;
  title: string;
  subTitle?: string;
}

const Header: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <header className="section">
      <div className="container">
        <div>
          <div className={styles.blur} />
          <div className="section-heading">
            {props.headerTitle && <p>{props.headerTitle}</p>}
            <h1 className={styles.header}>{props.title}</h1>
            {props.subTitle && <p>{props.subTitle}</p>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
