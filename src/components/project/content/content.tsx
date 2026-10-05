import "./content.scss";

const ProjectContent = (props: any) => {
  const {
    children,
    prevProg = 0,
    currProg,
    prevProgTip,
    currProgTip,
    showProgress = true,
    bgColor = null,
  } = props || {};

  return (
    <div
      className={`project-content-container ${bgColor && "pad-bot"}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="pcc-inner">
        {showProgress && (
          <div className="pcc-progress-container">
            <div
              className="pcc-div pcc-prev-progress"
              style={{ width: `calc((${prevProg}px / 1000px) * 100%)` }}
            >
              {prevProg !== 0 && (
                <div className="pcc-tooltip">{prevProgTip}</div>
              )}
            </div>
            <div
              className="pcc-div pcc-progress"
              style={{
                width: `calc((${currProg}px / 1000px) * 100%)`,
              }}
            >
              <div className="pcc-tooltip">{currProgTip}</div>
            </div>
          </div>
        )}
        <div className="pcc-content">{children}</div>
      </div>
    </div>
  );
};

export default ProjectContent;
