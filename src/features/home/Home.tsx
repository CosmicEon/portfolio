import React from "react";

interface Props {}
interface LinkProps {
  className?: string;
  children: any;
}

const Link = ({ className, children }: LinkProps) => (
  <a href="/test" className={className}>
    {children}
  </a>
);

const Home: React.FC<Props> = ({ ...props }: Props) => {
  // const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* <Counter /> */}
      {/* <Dialog /> */}

      <br />
      <Link>Unstyled, boring Link</Link>
      {/* <br />
        <StyledLink>Styled, exciting Link</StyledLink> */}
      <br />
      <button>Hello World</button>
      <div>test</div>
    </div>
  );
};

export default Home;
