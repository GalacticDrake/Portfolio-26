import Link from "next/link";
import "./showcase.scss";
import GenreTab from "@Components/genre/genre-tab";

interface ShowcaseProps {
  imageLink: string;
  title: string;
  subtitle: string;
  types: string[];
  sepColor: string;
  isLegacy?: boolean;
  showcaseLink?: string | null;
}

const Showcase = (props: ShowcaseProps) => {
  const {
    imageLink,
    title,
    subtitle,
    types = [],
    sepColor = "var(--primary)",
    isLegacy = false,
    showcaseLink = null,
  } = props || {};

  return (
    <div className="lsc-outer">
      <div className={`lsc-inner${isLegacy ? " legacy" : ""}`}>
        <div
          className="lsc-col img-col"
          style={{ backgroundImage: `url('/landing/${imageLink}')` }}
        ></div>
        <div className="lsc-col">
          <div className="lsc-genre-cat">
            {types.map((t, i) => (
              <GenreTab key={i} type={t} />
            ))}
          </div>
          <div className="lsc-header">
            {!isLegacy && (
              <div
                className="lsc-div"
                style={{ backgroundColor: `${sepColor}` }}
              ></div>
            )}
            <div className="lsc-title">
              {showcaseLink ? (
                <Link href={showcaseLink} className="d-link">
                  {title}
                </Link>
              ) : (
                title
              )}
            </div>
            <div className="lsc-subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
