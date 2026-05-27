import "./detail.scss";

import React from "react";

type participantObj = {
  [key: string]: number;
};

const ProjectDetail = (props) => {
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

  return (
    <div className="project-detail-container">
      <div className="pdc-inner">
        <div className="pdc-row">
          {roleScope.map((r, i) => (
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
          {Object.keys(participantNo).map((o, i) => {
            if (participantNo[o] == 0) return null;

            return (
              <React.Fragment key={i}>
                <div className="pdc-col">
                  {participantNo[o] + ` ${o}${participantNo[o] > 0 && "s"}`}
                </div>
                {i !== Object.keys(participantNo).length - 1 && (
                  <div className="pdc-dot"></div>
                )}
              </React.Fragment>
            );
          })}
          {/* {researcherNo > 0 && (
            <div className="pdc-col">
              {researcherNo} researcher{parseInt(researcherNo) > 0 && "s"}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
