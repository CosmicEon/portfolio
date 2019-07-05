import React from "react";
import styles from "./ProgressBar.module.css";

interface Props {}
interface State {}

class ProgressBar extends React.Component<Props, State> {
  state = { width: "0%" };
  constructor(props: Props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    this.setState({ width: `${scrolled}%` });
  }

  render() {
    return (
      <div className={`s ${styles.progress_container}`}>
        <div className={styles.progress_bar} style={this.state} />
      </div>
    );
  }
}

export default ProgressBar;
