import "./genre-tab.scss";

const TEXT_TYPE = {
  UI: {
    text: "User Interface",
    backgroundColor: "var(--primary)",
    color: "var(--background)",
  },
  UX: {
    text: "User Experience",
    backgroundColor: "var(--secondary)",
    color: "var(--background)",
  },
};

const GenreTab = (props) => {
  const { type, groupType = {} } = props || {};

  const { text, backgroundColor, color } = groupType?.text
    ? groupType
    : TEXT_TYPE?.[type];

  return (
    <div
      className="grt-container"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="grt-text" style={{ color: `${color}` }}>
        {text}
      </div>
    </div>
  );
};

export default GenreTab;
