import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

type Props = {
  brandName: string;
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  > div {
    display: flex;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--secondary-text);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--anim-time) ease-in-out;

  &:hover {
    color: var(--secondary-text-hover);
  }
`;

const NavButton = styled.button`
  color: var(--secondary-text);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all var(--anim-time) ease-in-out;
  padding-top: 0;
  padding-bottom: 0;

  background-color: transparent;
  border: none;

  &:hover {
    color: var(--secondary-text-hover);
    cursor: pointer;
  }
`;

const Navbar = ({ brandName }: Props) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <Nav>
      <div>
        <h2>{brandName}</h2>
      </div>
      {user ? (
        <div>
          <span> {user.email}</span>
          <NavButton onClick={handleLogoutClick}>Logout</NavButton>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
