import "./header.scss";

import GenreTab from "@Components/genre/genre-tab";
import ProjectDetail from "../detail/detail";

const ProjectHeader = (props) => {
  const {
    types = [],
    title,
    subtitle,
    imageName,
    imageSource,
    scopeDetails,
    yearOfCompletion,
  } = props || {};

  return (
    <div className="project-header-container">
      <div
        className="phc-image-container"
        style={{ backgroundImage: `url('/landing/${imageName}')` }}
      ></div>
      <div className="phc-inner">
        <div className="phc-genre-container">
          {types.map((t, i) => (
            <GenreTab key={i} type={t} />
          ))}
        </div>
        <div className="phc-header">
          <div
            className="phc-div"
            style={{ backgroundColor: "var(--primary)" }}
          ></div>
          <div className="phc-title">{title}</div>
          <div className="phc-subtitle">{subtitle}</div>
          {imageSource && (
            <div className="phc-image-source">image source: {imageSource}</div>
          )}
        </div>
        <ProjectDetail {...scopeDetails} yearOfCompletion={yearOfCompletion} />
      </div>
    </div>
  );
};

export default ProjectHeader;
