import Data from "@Data/materials/prescription.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";
import EmblaCarousel from "@/components/embla/embla";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: false };

const IMG_URL = "/images/prescription/";

const OLD_IMAGES = [
  {
    title: "(1) Default view when entering prescription",
    subtitle:
      "This example shows a practitioner selecting vital signs of a patient. Nothing has been filed, it simply is a form. One can immediately understand to fill information in.",
    imagePath: `${IMG_URL}/old_base.png`,
  },
  {
    title: "(2) Information entered",
    subtitle:
      "Information has been filled in, but has not been added to the records.",
    imagePath: `${IMG_URL}/old_filled.png`,
  },
  {
    title: "(3) Record added",
    subtitle:
      "Default behaviour when adding a form is that the record will be saved to the backend, but in this case it is not added yet, rather queued in the summary. When the record is added, the form is immediately cleared for new information to be entered.",
    imagePath: `${IMG_URL}/old_added.png`,
  },
  {
    title: "(4) Editing current record",
    subtitle:
      "Clicking edit at the right will fill the information at the left. This added complexity, where if the active tab is say, vital signs, but medication is to be edited, how should 1. information entered midway be handled?, 2. progress be teleported to the vital sign tab?",
    imagePath: `${IMG_URL}/old_edit.png`,
  },
];

const MOBILE_IMAGES = [
  {
    title: "(1) Default view when entering prescription",
    subtitle:
      "Practitioners can choose which to add. This eliminates the navigation tab in the old design, giving more space for more important details (i.e. records).",
    imagePath: `${IMG_URL}/mobile_base.png`,
  },
  {
    title: "(2) Information entered",
    subtitle: "Old information is not cleared, and users can add a new record.",
    imagePath: `${IMG_URL}/mobile_filled.png`,
  },
  {
    title: "(3) Record added",
    subtitle:
      "More records can be added, with the ability to lock them to prevent undesired changes.",
    imagePath: `${IMG_URL}/mobile_added.png`,
  },
  {
    title: "(4) Locked record",
    subtitle:
      "Viewing locked records only allow view-only, good for comparing across different same types of records.",
    imagePath: `${IMG_URL}/mobile_locked.png`,
  },
];

const DESKTOP_IMAGES = [
  {
    title: "(1) Default view when entering prescription",
    imagePath: `${IMG_URL}/desktop_base.png`,
  },
  {
    title: "(2) Information entered",
    imagePath: `${IMG_URL}/desktop_filled.png`,
  },
  {
    title: "(3) Record added",
    imagePath: `${IMG_URL}/desktop_added.png`,
  },
  {
    title: "(4) Locked record",
    imagePath: `${IMG_URL}/desktop_locked.png`,
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
            <div className="pc-content-title">what is this exactly?</div>
            <div className="pc-content-body">
              LLL Sdn. Bhd, Malaysia, specialises in developing systems, where
              specialisation is in the medical field (clinics). One of the
              system is an ecosystem that bundles patient records, prescription
              system, inventory system, claims and invoices, and many more.
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-content-title">
              prescription management system
            </div>
            <div className="pc-content-body">
              Management systems are usually optimised only for desktop views.
              Due to the information density, it is usually not recommended to
              be used on smaller displays. For this however, the practitioners
              (e.g. doctors, nurses) may require checking patient information on
              the go.
            </div>
          </div>
        </ProjectContent>
        <ProjectContent currProg={100} currProgTip={"desc"}>
          <div className="pc-content">
            <div className="pc-content-title">design background</div>
            <div className="pc-content-body">
              initially, the lead designer only made the designs for web, based
              on the design specification of the project managers. there was a
              problem with user-flow, shown below using a low-fi wireframe (due
              to intellectual property, the actual design could not be
              revealed), but this was not noticed. Reassessing this, there were
              multiple problems:
              <ul>
                <li>
                  <span className="pc-li-emp">
                    multiple buttons with constructive process:
                  </span>{" "}
                  there exists at least two constructive buttons (e.g. add,
                  confirm), but one button (confirm) can be more problematic as
                  practitioners could click on confirm when trying to save a
                  record in the prescription, with more to be queued.
                </li>
                <li>
                  <span className="pc-li-emp">
                    multiple buttons with destructive process:
                  </span>{" "}
                  there exists at least two destructive buttons (e.g. cancel,
                  delete), where cancel in the summary popup clears all records.
                  even with a warning modal, practitioners may press OK
                  unintentionally. this is known as action slip in human
                  computer interaction (HCI).
                </li>
                <li>
                  <span className="pc-li-emp">record adding confusion:</span>{" "}
                  for a practitioner new to the system or not very
                  tech-literate, after adding a record, the form gets cleared.
                  this can be a source of confusion, where the practitioner may
                  think the information is removed, leading to frustration.
                </li>
              </ul>
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={OLD_IMAGES} options={OPTIONS} />
            </div>
            <div className="pc-content-body">
              The project specification had changed mid-way to involve mobile.
              it is a much larger challenge to design desktop-first than
              mobile-first.
            </div>
            <div className="pc-content-body">
              with the deadline unchanged, we had to settle on a compromise. the
              final design fitted the specification, but was not unanimously
              agreed by the project managers.
            </div>
          </div>
        </ProjectContent>
        <ProjectContent prevProg={0} currProg={100} currProgTip={"intro"}>
          <div className="pc-content">
            <div className="pc-content-title">case study</div>
            <div className="pc-content-body">
              the developed design was fairly hard to use, saddled with
              additional and unnecessary clicks. to facilitate simpler design
              process for developers and faster use, the following is proposed.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={MOBILE_IMAGES} options={OPTIONS} />
            </div>
            <div className="pc-content-body">
              this eliminated a few problems listed previously.
              <ul>
                <li>
                  <span className="pc-li-emp">
                    one button with constructive process:
                  </span>{" "}
                  now, there is only one button with confirm, clear to the users
                  that confirm meant submitting information to the backend.
                </li>
                <li>
                  <span className="pc-li-emp">
                    multiple buttons with destructive process:
                  </span>{" "}
                  while there exists multiple destructive buttons, they are
                  placed far from each other.
                </li>
                <li>
                  <span className="pc-li-emp">intuitive record saving:</span>{" "}
                  instead of clearing information every save, this presents an
                  advantage where users can add information halfway, create
                  another record, fill that in, and return to the previous
                  progress. A plus to "User Control and Freedom" by Nielsen
                  Norman.
                </li>
                <li>
                  <span className="pc-li-emp">responsive scaling:</span> this
                  design also enable easy responsive scaling. for larger
                  screens, this can scale automatically, and for widescreens,
                  more columns can be fit per row without much changes.
                </li>
              </ul>
            </div>
            <div className="pc-content-body">
              desktop variant is shown below.
            </div>
            <div className="pc-content-body gallery">
              <EmblaCarousel slides={DESKTOP_IMAGES} options={OPTIONS} />
            </div>
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;
