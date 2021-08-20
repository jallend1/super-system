const Work = () => {
  return (
    <div className="page work">
      {[1, 2, 3, 4].map((project) => {
        return (
          <div className="project" key={project}>
            <h2>Project # {project}</h2>
            <img
              src={`./images/landscape-${project}.jpg`}
              alt="Landscaping project"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
