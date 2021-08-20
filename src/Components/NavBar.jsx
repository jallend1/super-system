import logo from "../images/2dogs-logo-1.png";

const NavBar = () => {
  return (
    <nav>
      <div id="logo">
        <a href="#main">

        <img src={logo} alt="Two Dogs Logo" />
        </a>
      </div>
      <ul>
      <li><a href="#main">Home</a></li>
        <li><a href="#work">Our Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
