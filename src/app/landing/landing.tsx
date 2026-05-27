import "./landing.scss";

import Link from "next/link";

import SkillData from "@Data/skills.json";

import FirstData from "@Data/materials/home-assistant.json";
import SecondData from "@Data/materials/kitchen.json";
import ThirdData from "@Data/materials/protothon-2026.json";
import FourthData from "@Data/materials/prescription.json";

import Showcase from "@Components/landing/showcase/showcase";

import SkillRow from "@Components/landing/skill-row/skill-row";
import NoticeBar from "@Components/notice/notice";

const ShowcaseData = [FirstData, SecondData, ThirdData];
const LegacyData = [FourthData];

const Landing = () => {
  return (
    <div>
      <NoticeBar />
      <div className="intro-container">
        <div className="lic-inner">
          <div className="lic-name">Laffey</div>
          <div className="lic-job-scope-container">
            <div className="lic-jsc-text-grp">
              <div className="lic-jsc-text ui">UI Designer</div>
            </div>
            <div className="lic-jsc-dot"></div>
            <div className="lic-jsc-text-grp">
              <div className="lic-jsc-text ux">UX Researcher</div>
            </div>
            <div className="lic-jsc-dot"></div>
            <div className="lic-jsc-text-grp">
              <div className="lic-jsc-hover">phasing out!</div>
              <div className="lic-jsc-text fd">Fullstack developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-container">
        {ShowcaseData.map((s, i) => {
          let sepColor = "var(--dark-grey)";

          if (i == 0) sepColor = "var(--primary)";
          if (i == 1) sepColor = "var(--secondary)";

          return (
            <Showcase
              key={s._id}
              types={s.genres}
              title={s.title}
              subtitle={s.subtitle}
              imageLink={s.imageName}
              sepColor={sepColor}
              showcaseLink={s?.showcaseLink}
            />
          );
        })}
      </div>
      <div className="legacy-container">
        <div className="llc-inner">
          {LegacyData.map((s, i) => {
            let sepColor = "var(--dark-grey)";

            return (
              <Showcase
                key={s._id}
                types={s.genres}
                title={s.title}
                subtitle={s.subtitle}
                imageLink={s.imageName}
                sepColor={sepColor}
                showcaseLink={s?.showcaseLink}
                isLegacy={true}
              />
            );
          })}
        </div>
        <div className="llc-link">
          <Link
            href={"https://galacticdrake.github.io/Portfolio/"}
            target="_blank"
          >
            archives →
          </Link>
        </div>
      </div>
      <div className="skills-container">
        <div className="lsk-inner">
          <SkillRow
            groupType={{
              text: "design",
              color: "var(--background)",
              backgroundColor: "var(--primary)",
              sepColor: "var(--primary)",
            }}
            list={SkillData["design"]}
          />
          <SkillRow
            groupType={{
              text: "research",
              color: "var(--background)",
              backgroundColor: "var(--secondary)",
              sepColor: "var(--secondary)",
            }}
            list={SkillData["research"]}
          />
          <SkillRow
            groupType={{
              text: "tech stack",
              color: "var(--background)",
              backgroundColor: "var(--dark-grey)",
              sepColor: "var(--dark-grey)",
            }}
            list={SkillData["tech stack"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
