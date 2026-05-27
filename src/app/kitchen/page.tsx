import Data from "@Data/materials/kitchen.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";

const HomeAssistantPage = () => {
  const { projectStatements, yearOfCompletion, genres } = Data || {};

  return (
    <div className="project-container">
      <ProjectHeader
        {...Data}
        yearOfCompletion={yearOfCompletion}
        types={genres}
      />
      <ProjectStatement {...projectStatements} />
      <div className="project-main-content">
        <ProjectContent prevProg={0} currProg={167} currProgTip={"1 week"}>
          <div className="pc-content">
            <div className="pc-content-title">home cooking</div>
            <div className="pc-content-body">
              one of the most frequent home activity, that is not really
              questioned. different family have different cultures, shaping
              unique and interesting ways of interacting with these appliances.
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">what is this research about?</div>
            <div className="pc-content-body">
              how exactly do different people interact with appliances of
              seemingly same functional use? for example, can two people
              interact with a stove using contrasting steps, and why is that so?
            </div>
          </div>
        </ProjectContent>
        <ProjectContent prevProg={0} currProg={167} currProgTip={"1 week"}>
          <div className="pc-content">
            <div className="pc-content-title">research objectives</div>
            <div className="pc-content-body">
              to understand the different interaction behaviours executed by
              individuals when cooking, specifically involving a stove.
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={167}
          prevProgTip={"1 week"}
          currProg={500}
          currProgTip={"3 weeks"}
        >
          <div className="pc-content">
            <div className="pc-content-title">re-enactment videos (rev)</div>
            <div className="pc-content-body">
              we recruited 3 participants with consent, to re-enact their daily
              cooking activities. they were free to select a recipe that must
              include a stove, and then using think-aloud, showed us how they
              approach cooking from preparation, cooking, to any step they
              considered as final in cooking.
            </div>
            <div className="pc-content-body">
              due to the short timeline, we decided that 3 is a good enough
              number feasibility wise and still be able to extract adequate
              information for analysis.
            </div>
            <div className="pc-content-title">analysis</div>
            <div className="pc-content-body">
              analysis used reflexive thematic analysis to analyse participants
              transcripts (think-aloud statements transcribed with condens.io).
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={667}
          prevProgTip={"4 weeks"}
          currProg={333}
          currProgTip={"2 weeks"}
        >
          <div className="pc-content">
            <div className="pc-content-title">themes</div>
            <div className="pc-content-body">
              we gathered three main themes:
              <ul>
                <li>
                  <span className="pc-li-emp">
                    a battle between hygiene and efficiency:
                  </span>{" "}
                  participants were either overly conscious on hygiene,
                  unconsciously washing their hands and food, or skipping some
                  non-critical hygiene steps to finish up cooking quickly.
                </li>
                <li>
                  <span className="pc-li-emp">
                    sequential and parallel appliance use:
                  </span>{" "}
                  the constant switching between sequential and parallel use
                  enabled smooth workflow and minimised disruptions.
                </li>
                <li>
                  <span className="pc-li-emp">
                    applying knowledge, experience and strategies to maintain
                    control:
                  </span>{" "}
                  participants always prepare in advance to reduce error, and
                  monitor progress through senses and evaluation.
                </li>
              </ul>
            </div>
            <div className="pc-content-title">limitations</div>
            <div className="pc-content-body">
              due to time limitations, further works should include more than 3
              participants of even more distinct cultures to observe more
              behavioural differences.
            </div>
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;
