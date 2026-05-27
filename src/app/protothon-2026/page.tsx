import Data from "@Data/materials/protothon-2026.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";
import EmblaCarousel from "@/components/embla/embla";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: false };

const IMG_URL = "/images/protothon-2026/";

const CONCEPT_1_IMAGES = [
  {
    title: "Dashboard",
    subtitle:
      "The first page that greets users. This shows the summary of all assets, and warns the operator about high priority events.",
    imagePath: `${IMG_URL}/dashboard.png`,
  },
  {
    title: "Check In / Check Out",
    subtitle:
      "Any asset that requires check in (items are returned to the operator) or check out (items are lent out) will go through this process.",
    imagePath: `${IMG_URL}/check_in_check_out.png`,
  },
  {
    title: "Asset Description",
    subtitle: "Operators can view the asset description in detail.",
    imagePath: `${IMG_URL}/asset_details.png`,
  },
  {
    title: "Incident Control",
    subtitle:
      "Operators handle incident control here; that is, when an asset is misplaced, lost, or damaged.",
    imagePath: `${IMG_URL}/incident_control.png`,
  },
  {
    title: "Artificial Intelligence",
    subtitle:
      "Instead of navigating through all the pages, the AI can help facilitate the process of check in, check out, and even accommodate bulk processing.",
    imagePath: `${IMG_URL}/ai_promotion.png`,
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
        <ProjectContent prevProg={0} currProg={100} currProgTip={"intro"}>
          <div className="pc-content">
            <div className="pc-content-title">what is protothon?</div>
            <div className="pc-content-body">
              this is a hackathon held by dubstech annually, hosted globally for
              individuals to showcase their design talents and problem solving
              skills. there are many themes; we chose the enterprise track.
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">
              equipment inventory management system
            </div>
            <div className="pc-content-body">
              for this equipment system, it targets customers who prefer
              tracking items through barcodes. this meant that when checking out
              to an employee or staff, the entity is first scanned for checkout,
              and then the system assists in tracking every movement.
            </div>
            <div className="pc-content-body">
              thus, the ims must be able to handle:
              <ul>
                <li>rapid check-in check-out</li>
                <li>check-out user tracking of item</li>
                <li>incident report system</li>
              </ul>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent prevProg={0} currProg={250} currProgTip={"3 hours"}>
          <div className="pc-content">
            <div className="pc-content-title">design process</div>
            <div className="pc-content-body">
              due to time limitation and vastly different design (work)
              experience, we settled with the workflow of:
              <ul>
                <li>
                  using AI to generate designs and thus wireframes based on our
                  own prompting.
                </li>
                <li>refine the designs in Figma.</li>
                <li>connect with prototypes.</li>
              </ul>
            </div>
          </div>
          <div className="pc-content-body">we call our system Osiris.</div>
        </ProjectContent>
        <ProjectContent
          prevProg={250}
          prevProgTip={"3 hours"}
          currProg={750}
          currProgTip={"9 hours"}
        >
          <div className="pc-content">
            <div className="pc-content-title">design showcase</div>
            <div className="pc-content-body">
              below are a selection of our designs, with the complete version
              submitted to the protothon, accessible by the following links:
              <ul>
                <li>
                  <Link
                    href="https://www.figma.com/design/yB20TaORzDRtIhb6DC9eG2/Enterprise-Management-System-Prototype-%7C-OSIRIS-%7C-3rd-Prize---Protothon-2026--Team-Pixlay-qUIn?node-id=21-1601&t=IZPipXe8Ts41GnjH-1"
                    target="_blank"
                    className="small-link"
                  >
                    figma
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.figma.com/deck/hc5Uuj5rUPWt4DJNaZ5w97"
                    target="_blank"
                    className="small-link"
                  >
                    slide deck
                  </Link>
                </li>
              </ul>
              <div className="pc-content-body gallery">
                <EmblaCarousel slides={CONCEPT_1_IMAGES} options={OPTIONS} />
              </div>
            </div>
          </div>
        </ProjectContent>
        <ProjectContent prevProg={1000} prevProgTip={"final"}>
          <div className="pc-content">
            <div className="pc-content-title">limitations</div>
            <div className="pc-content-body">
              AI helps to generate beautiful designs, but there were many user
              experience problems and user flow issues. some texts are not
              immmediately obvious in describing the page's functions (e.g. what
              is live processing?)
            </div>
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;
