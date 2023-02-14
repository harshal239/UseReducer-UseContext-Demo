import { NavLink } from "react-router-dom";

const ActiveClass = "underline";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? ActiveClass : undefined)}
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className="navitems__container">
      <h3>Amazon</h3>
      <ul className="navitems__list">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/cart">Cart</NavItem>
      </ul>
    </div>
  );
};
export default Navbar;
