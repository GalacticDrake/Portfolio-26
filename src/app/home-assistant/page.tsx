import Data from "@Data/materials/home-assistant.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";
import EmblaCarousel from "@/components/embla/embla";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: false };

const IMG_URL = "/images/home_assistant/";

const CONCEPT_1_IMAGES = [
  {
    title: "Device overall energy usage by kwh and absolute value (default)",
    subtitle:
      "This shows consumption of all devices by kWh. devices overall energy usage show the average use of energy by an adjustable time period. red zones are shown when current (target) consumption is higher than previous (baseline) consumption. interested users may look at the exact numbers (absolute values) of each device's consumption.",
    imagePath: `${IMG_URL}/oecd_av_kwh.png`,
  },
  {
    title: "Device overall energy usage by kwh and percentage",
    subtitle:
      "For a percentage comparison, users can switch the view options. this provides a cleaner look, especially helpful with more devices to compare",
    imagePath: `${IMG_URL}/oecd_perc_kwh.png`,
  },
  {
    title: "Device overall energy usage by kwh and donut",
    subtitle:
      "Donut charts are less useful, but still presents as a visualisation option for those who prefer this.",
    imagePath: `${IMG_URL}/oecd_pie_kwh.png`,
  },
  {
    title: "Device overall energy usage by cost",
    subtitle:
      "Cost is the most significant concern among every participant, so this is made available as an alternative tracking option over kWh.",
    imagePath: `${IMG_URL}/oecd_perc_euro.png`,
  },
  {
    title: "Red zones",
    subtitle:
      "Each red zone represents an overuse of energy of target over baseline (previous) use. Selecting a red zone shows more information on devices that may have consumed more energy.",
    imagePath: `${IMG_URL}/oecd_perc_kwh_spec.png`,
  },
];

const CONCEPT_2_IMAGES = [
  {
    title: "Compact Insight Cards",
    subtitle:
      "These cards show consumption, insights, predictions in a simplified way. Useful for those who love numbers.",
    imagePath: `${IMG_URL}/impact_compact.png`,
  },
  {
    title: "Detailed insight cards",
    subtitle:
      "For a descriptive method of... describing insights, this can be used instead.",
    imagePath: `${IMG_URL}/impact_detailed.png`,
  },
];

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
        <ProjectContent prevProg={0} currProg={50} currProgTip={"1 wk"}>
          <div className="pc-content">
            <div className="pc-content-title">
              what is home assistant green?
            </div>
            <div className="pc-content-body">
              home assistant green is an equipment which uses the home assistant
              (HA) system to control automation and retrieve essential
              information. this is developed by open home foundation (OHF), a
              Swiss non-profit organisation.
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">what is this research about?</div>
            <div className="pc-content-body">
              OHF is looking to expand the energy awareness in their HA system
              for users to track energy information easily. currently there are
              some integrations within, but they require more information about
              their userbase's attitude towards energy and sustainability.
            </div>
            <div className="pc-content-body">
              our goals were two-folds:
              <ul>
                <li>
                  understand the users' attitude towards energy, and what were
                  their interests.
                </li>
                <li>
                  create wireframes that reflect their needs, which will be a
                  reference for the home assistant interface.
                </li>
              </ul>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={50}
          prevProgTip={"1 wk"}
          currProg={50}
          currProgTip={"1 wk"}
        >
          <div className="pc-content">
            <div className="pc-content-title">research objectives</div>
            <div className="pc-content-body">
              to understand users' practices and attitudes on user management,
              there are three objectives:
              <ul>
                <li>what motivate users to engage in energy management?</li>
                <li>
                  how do users use smart technology for energy management?
                </li>
                <li>
                  how do household dynamics influence energy management
                  practices?
                </li>
              </ul>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={100}
          prevProgTip={"2 weeks"}
          currProg={100}
          currProgTip={"2 weeks"}
        >
          <div className="pc-content">
            <div className="pc-content-title">surveys</div>
            <div className="pc-content-body">
              surveys have been distributed through official community channels,
              receiving a total of 87 responses. this captured:
              <ul>
                <li>demographics</li>
                <li>professions</li>
                <li>integrations and setups within their homes</li>
              </ul>
            </div>
            <div className="pc-content-body">
              results show that most (89%) of users manage energy themselves,
              and that they are satisfied with their energy use (high
              satisfaction: 52%, satisfied: 37%)
            </div>
            <div className="pc-content-body">
              ⚠️ problem: survey participants were mostly americans or
              europeans, with only one from asia and africa. openly available
              statistics show that there are a number of users from asia and
              africa.
              <ul>
                <li>
                  did we fail to use the right media to share our surveys?
                </li>
                <li>were they not actively involved in the community?</li>
              </ul>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={200}
          prevProgTip={"4 weeks"}
          currProg={400}
          currProgTip={"8 weeks"}
        >
          <div className="pc-content">
            <div className="pc-content-title">interviews</div>
            <div className="pc-content-body">
              to dive deeper, interviews were conducted from the survey
              participants: 12 participated, all identified as male, varying age
              but mostly middle-aged, and very skilled technically and
              knowledgeable.
            </div>
            <div className="pc-content-body">
              we discovered:
              <ul>
                <li>
                  most users have little care about energy savings by kWh, only
                  by costs - naturally lower costs = lower energy use.
                </li>
                <li>
                  users use a variety of methods (some extremely creative) to
                  collect data regarding energy use.
                </li>
                <li>
                  more advanced users even distribute (sell) energy back to the
                  grid, which helps others.
                </li>
              </ul>
            </div>
            <div className="pc-content-body">
              their insights and opinion were processed and analysed.
            </div>
            <div className="pc-content-title">analysis</div>
            <div className="pc-content-body">
              analysis used a combination of affinity mapping and reflexive
              thematic analysis to analyse participants insights.
            </div>
            <div className="pc-content-body">
              themes:
              <ul>
                <li>
                  attention to cost savings for energy optimisation:
                  participants were frequently emphasising cost savings in
                  indirectly contributing to the energy crisis problem.
                </li>
                <li>
                  automation is imperative for improved energy use and
                  lifestyle: automations increase the quality of life of users,
                  while enabling efficient tracking of energy usage.
                </li>
                <li>
                  maximum energy use for minimum environmental impact:
                  participants were also finding interesting methods to maximise
                  their energy consumption while decreasing the undesirable
                  effects towards the environment.
                </li>
              </ul>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={600}
          prevProgTip={"12 weeks"}
          currProg={400}
          currProgTip={"8+ weeks"}
        >
          <div className="pc-content">
            <div className="pc-content-title">iterative designs</div>
            <div className="pc-content-body">
              with the results, we began designing wireframes. designs went
              through two iterations of design-test-feedback, with limited time.
            </div>
            <div className="pc-content-title">
              concept 1: comparison dashboard
            </div>
            <div className="pc-content-body">
              this concept prioritises comparison for users, by time,
              automations / equipment. there are essentially two components:
              <ul>
                <li>overall energy use, in kWh or cost</li>
                <li>individual energy use, in kWh or cost</li>
              </ul>
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={CONCEPT_1_IMAGES} options={OPTIONS} />
            </div>
            <div className="pc-content-title">concept 2: impact dashboard</div>
            <div className="pc-content-body">
              besides visualisation, we also offered algorithm-based feedback on
              energy use. this helps less tech-savvy users to understand their
              energy problem more. it also gives insights to future use by
              prediction.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={CONCEPT_2_IMAGES} options={OPTIONS} />
            </div>
            <div className="pc-content-title">calendar</div>
            <div className="pc-content-body">
              the system currently lacks a calendar that enables proper
              time-comparison. to complement the above concepts, a calendar with
              more options was also proposed.
            </div>
            <div className="pc-content-body">
              <Link
                href="https://small-jolly-09458580.figma.site/"
                className="small-link"
                target="_blank"
              >
                interactive demo
              </Link>
            </div>
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;
