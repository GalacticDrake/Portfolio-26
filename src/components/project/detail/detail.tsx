import "./detail.scss";

import React from "react";

type participantObj = {
  [key: string]: number;
};

const ProjectDetail = (props: any) => {
  const {
    roleScope = [],
    timeScope,
    researcherNo = "0",
    designerNo = "0",
    developerNo = "0",
    yearOfCompletion,
  } = props || {};

  // combine designerNo, developerNo, researcherNo for checking
  const participantNo: participantObj = {
    researcher: researcherNo,
    designer: designerNo,
    developer: developerNo,
  };

  // extract only the ones with more than 0
  let entries = Object.entries(participantNo).filter(([, value]) => value > 0);

  return (
    <div className="project-detail-container">
      <div className="pdc-inner">
        <div className="pdc-row">
          {roleScope.map((r: string, i: number) => (
            <React.Fragment key={i}>
              <div className="pdc-col">{r}</div>
              {i !== roleScope.length - 1 && <div className="pdc-dot"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="pdc-row">
          <div className="pdc-col">{timeScope}</div>
          <div className="pdc-dot"></div>
          <div className="pdc-col">{yearOfCompletion}</div>
        </div>
        <div className="pdc-row">
          {entries.map(([name, value], i) => {
            return (
              <React.Fragment key={i}>
                {i > 0 && <div className="pdc-dot"></div>}
                <div className="pdc-col">
                  {value + ` ${name}${value > 0 && "s"}`}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
