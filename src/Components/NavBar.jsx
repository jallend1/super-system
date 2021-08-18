import logo from "../images/2dogs-logo-1.png";

const NavBar = () => {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="Two Dogs Logo" />
      </div>
      <ul>
        <li>Our Work</li>
        <li>Services</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
