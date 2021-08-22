import logo from "../images/twodogs-vert.png";
import brothers from "../images/brothers.png";

const About = () => {
  return (
    <div className="page about" id="about">
      <div className="profile-image">
        <img src={brothers} alt="Thor and an SNL guy" />
        <audio controls src="/bros.mp3"></audio>
      </div>
      <div className="blurb">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2>Jason</h2>
          <p>World's preeminent expert on Legend of Zelda.</p>
        </div>
        <div>
          <h2>Joe</h2>
          <p>
            Has never even heard of Zelda, but regularly wears a green tunic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
