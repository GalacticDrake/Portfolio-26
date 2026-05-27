import "./statement.scss";

const ProjectStatement = (props) => {
  const { generalStatements = [], mainStatement } = props || {};

  return (
    <div className="project-statement-container">
      <div className="psc-inner">
        <div className="psc-row">
          {generalStatements.map((r, i) => (
            <div className="psc-col" key={i}>
              {r}
            </div>
          ))}
        </div>
        <div className="psc-row">
          <div className="psc-col psc-main-col">{mainStatement}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatement;
