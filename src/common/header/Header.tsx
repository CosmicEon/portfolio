import React from "react";
import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <header className="section">
      <div className="container">
        <div>
          <div className={styles.blur} />
          <div className="section-heading">
            <p>The portfolio of</p>
            <h1 className={styles.header}>Krasen R. Ilkov</h1>
            <p>A Full Stack Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
