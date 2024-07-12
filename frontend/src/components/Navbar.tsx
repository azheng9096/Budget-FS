import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  brandName: string;
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1rem;
  }
`;

const NavButton = styled(Link)`
  color: var(--secondary-text);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--anim-time) ease-in-out;

  &:hover {
    color: var(--secondary-text-hover);
  }
`

const Navbar = ({ brandName }: Props) => {
  return (
    <Nav>
      <div>
        <h2>{brandName}</h2>
      </div>
      <div>
        <NavButton to="/">Login</NavButton>
        <NavButton to="/">Register</NavButton>
      </div>
    </Nav>
  );
};

export default Navbar;
