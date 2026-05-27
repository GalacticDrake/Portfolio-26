import "./skill-row.scss";

import GenreTab from "@Components/genre/genre-tab";

import React from "react";

interface SkillRowProps {
  groupType: any;
  list: any[];
}

const SkillRow = (props: SkillRowProps) => {
  const { groupType, list = [] } = props || {};
  const { sepColor } = groupType || {};

  return (
    <div className="skill-row-container">
      <div className="src-group">
        <GenreTab groupType={groupType} />
      </div>
      <div className="lsc-header">
        <div
          className="lsc-div"
          style={{ backgroundColor: `${sepColor}` }}
        ></div>
        <div className="lsc-skill-row">
          {list.map((l, i) => (
            <React.Fragment key={i}>
              <div
                className="src-skill-text"
                style={{
                  color: `${l.highlight ? sepColor : "var(--l-dark-grey)"}`,
                }}
              >
                {l.text}
              </div>
              {i !== list.length - 1 && <div className="src-skill-dot"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillRow;
