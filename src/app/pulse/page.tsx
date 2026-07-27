import Data from "@Data/materials/pulse.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";
import EmblaCarousel from "@/components/embla/embla";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: false };

const IMG_URL = "/images/pulse/";

const WORKFLOW = [
  {
    title: "Bulk payment list with auto-suggestions and smart duplicate",
    subtitle:
      "To cut down time to find very tedious errors, problematic transactions are automatically brought up, with auto-suggestions to resolve issues or showing duplicates.",
    imagePath: `${IMG_URL}/workflow.png`,
  },
];

const FLAG_SYSTEM = [
  {
    title: "Flag system",
    subtitle: "Enables manual tracking of transactions that may have errors.",
    imagePath: `${IMG_URL}/flag_system.png`,
  },
  {
    title: "Flag system details",
    subtitle:
      "Users can enter descriptions manually, or have AI assume possible problems. Translations supported by AI for better exchange of communication across members.",
    imagePath: `${IMG_URL}/flag_system_details.png`,
  },
];

const AI = [
  {
    title: "Use of Artificial Intelligence",
    subtitle:
      "Let AI process everything, manage details and find errors, where the approvals are left to humans. Agents automatically appear if relevant to the topic.",
    imagePath: `${IMG_URL}/pulse_intelligence.png`,
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
              efficient batch payment system
            </div>
            <div className="pc-content-body">
              corporate finance managers prefer minimising the use time of
              platforms to settle their transactions with international
              employees and contractors. but there are still improvements that
              can be made...
            </div>
            <div className="pc-content-body">
              to perform bulk payments, organisations have to manually verify
              transaction data, monitor fees charged, and hope that the
              transaction arrives on time, with concerns on processing delays.
            </div>
            <div className="pc-content-body">
              therefore, we optimised this system to support smooth bulk
              payments, with live rates and transparent fees displayed. this
              aims to limit anxiety and promotes workflow.
            </div>
            <div className="pc-content-body">
              <Link
                href="https://galacticdrake.github.io/Portfolio/work/ui-pulse.html"
                target="_blank"
                className="small-link"
              >
                old reference
              </Link>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent prevProg={0} currProg={50} currProgTip={"1 wk"}>
          <div className="pc-content">
            <div className="pc-content-title">
              speeding up transactions workflow
            </div>
            <div className="pc-content-body">
              transaction data is especially sensitive, such that finance
              managers have to take care checking data. while this requires
              meticulous checking, it can be tedious and time consuming.
            </div>
            <div className="pc-content-body">
              the system should suggest changes to help speed up workflow, such
              as auto-suggestions, auto-fill, duplicate detection, resolve
              currency rail problems.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={WORKFLOW} options={OPTIONS} />
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">
              balancing visible data and impact on latency
            </div>
            <div className="pc-content-body">
              with bulk payments, there will be many single transactions. if the
              entire data was to be sent to the user, it will take a very long
              time. besides that, the platform will feel sluggish trying to show
              this data
            </div>
            <div className="pc-content-body">
              for this, the developers and us designers have discussed
              optimisations to handle this. how do we ensure all data is sent to
              the user without burdening the system?
            </div>
            <div className="pc-content-body">
              after several trials, we settled on infinite scrolling, where
              information is only shown within the screen of the user, reducing
              lag.
            </div>
            <div className="pc-content-body">
              but... with infinite scrolling... there are a few problems:
              <ul>
                <li>
                  users are particularly sensitive to transactions, which meant
                  they have to track and possibly check each transaction.
                </li>
                <li>
                  infinite scrolling does not provide a way to "track" a
                  transaction's position, as opposed to pagination where the
                  user can possibly remember the page number.
                </li>
              </ul>
            </div>
            <div className="pc-content-body">
              for transactions, a pagination view is more suitable. to reduce
              the need to remember, a feature (flag) is given for user to mark
              each transaction they think is strange, along with an optional
              description so they can view the entire flagged transactions and
              make changes.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={FLAG_SYSTEM} options={OPTIONS} />
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">ai to increase efficiency</div>
            <div className="pc-content-body">
              the use of artificial intelligence (e.g. large language models
              (llm), agentic ai) to assist simple and tedious processes is the
              next breakthrough for work efficiency. for example, have ai
              process bulk payments, auto-correct incompatible data and then
              perform calculations, where the approval is only left for the
              finance managers.
            </div>
            <div className="pc-content-body">
              powering this flow is the use of agents to auto-perform repeating
              tasks such as payrolls; from filling up details, getting them
              ready for transfer, all without human interaction after the first
              setup.
            </div>
            <div className="pc-content-body">
              with regards to the llm, relevant agents would appear at the
              sidebar for easy reference to the topic.
            </div>
            <div className="pc-content-body">
              this thus boosts workflow even more, and allows allocation of time
              for other important tasks.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={AI} options={OPTIONS} />
            </div>
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;
