import Data from "@Data/materials/prescription.json";

import ProjectHeader from "@/components/project/header/header";
import ProjectStatement from "@/components/project/statement/statement";
import ProjectContent from "@/components/project/content/content";
import EmblaCarousel from "@/components/embla/embla";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import DecisionTable from "./decision-table";

const OPTIONS: EmblaOptionsType = { loop: false };

const IMG_URL = "/images/prescription/";

const USER_FLOW_IMAGE = [
  {
    title: "User flow",
    imagePath: `${IMG_URL}/user_flow.png`,
  },
];

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

const AI_IMAGES = [
  {
    title: "v0.dev main encounter screen",
    imagePath: `${IMG_URL}/desktop_ai.png`,
  },
  {
    title: "v0.dev generated medication screen",
    imagePath: `${IMG_URL}/desktop_ai_med.png`,
  },
  {
    title: "v0.dev generated vital signs screen",
    imagePath: `${IMG_URL}/desktop_ai_vitals.png`,
  },
];

const MERGED_IMAGES = [
  {
    title: "(1) Landing",
    subtitle:
      "Placed the patient info details at the left. Retained a much cleaner look as opposed to what v0.dev has given.",
    imagePath: `${IMG_URL}/encounter_landing.png`,
  },
  {
    title: "(2) Vital signs",
    subtitle: "Same fields. Allows practitioners to review last visit.",
    imagePath: `${IMG_URL}/vital_signs.png`,
  },
  {
    title: "(3) Vital signs with last visit reference",
    subtitle:
      "When referencing is turned on, practitioners can look at previous records, and replace if needed. Admittedly, there is a UX problem here, where practitioners can get confused if the purple means the input has automatically inserted.",
    imagePath: `${IMG_URL}/vs_last_visit.png`,
  },
  {
    title: "(4) Medication",
    subtitle:
      "Medication is a bit more complex, where additional records might exist in this encounter.",
    imagePath: `${IMG_URL}/medication_default.png`,
  },
  {
    title: "(5) Editing medication",
    subtitle:
      "When editing existing record, data automatically goes back into the form. Naturally there should be an overwrite alert if the form has been filled but yet to be saved, but this is not shown here.",
    imagePath: `${IMG_URL}/medication_edit.png`,
  },
  {
    title: "(6) Summary",
    subtitle: "Summary shows the records.",
    imagePath: `${IMG_URL}/summary_expanded.png`,
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

const DECISION_IMAGES = [
  {
    title: "Main encounter screen",
    subtitle:
      "Red marks to be removed, the tabs can be compressed into one row, and greens are very useful to be added.",
    imagePath: `${IMG_URL}/decision_main.png`,
  },
  {
    title: "Medication screen",
    subtitle:
      "Problem with unable to input fields into quantity. Others are auto filled which is great, though the lock icon should not be there at all as it might tell the practitioners they could be editable even though it will never be the case.",
    imagePath: `${IMG_URL}/decision_med.png`,
  },
  {
    title: "Vital sign screen",
    subtitle:
      "Similarly, inputs here cannot be edited manually. The blood pressure is particularly problematic as it's actually two input fields, where the increment/decrement buttons will not be suitable.",
    imagePath: `${IMG_URL}/decision_vitals.png`,
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
        <ProjectContent
          prevProg={0}
          currProg={100}
          currProgTip={"intro"}
          bgColor={"hsl(147, 100%, 98%)"}
        >
          <div className="pc-content-title ">introduction</div>
          <div className="pc-content-body">
            we worked with practitioners in clinics by first addressing their
            potential frustrations. they were working across separate systems
            for patient records, prescriptions and financial transactions, which
            made it hard to look back at the patient's history during a
            consultation. this section highlights on the encounter-focused
            interface that brings all the pieces together.
          </div>
          <div className="pc-content-title green">problem</div>
          <div className="pc-content-body">
            practitioners had to first look at the patient's information, then
            prescribe medication, and then look back it again, and then check if
            the medication is suitable. this was done by referring to different
            systems. the system could not flag potentially unsuitable
            medication, and in this fast-paced environment, using separate
            systems became a problem.
          </div>
          <div className="pc-content-title green">goals</div>
          <div className="pc-content-body">
            <ul>
              <li>
                practitioners should be able to look at patient, prescription,
                billing history without leaving the encounter.
              </li>
              <li>
                system should automatically show inventory stocks during the
                prescription phase.
              </li>
            </ul>
          </div>
          <div className="pc-content-body">
            constraints: this section is part of a much larger ecosystem, thus
            has to work flawlessly. team size was adequate, but timeline had to
            be refined to meet deployment times.
          </div>
          <div className="pc-content-title green">user flow</div>
          <div className="pc-content-body">
            a simple user flow here describes how a practitioner might interact
            with the system, specifically focused on the encounter.
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={USER_FLOW_IMAGE} options={OPTIONS} />
          </div>
          <div className="pc-content-title green">design process</div>
          <div className="pc-content-body">
            the grey sketch presents a baseline for the outcome. tabs were
            selected as prescriptions were more often decided during
            consultation than linear steps.
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={OLD_IMAGES} options={OPTIONS} />
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={DESKTOP_IMAGES} options={OPTIONS} />
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={0}
          currProg={100}
          currProgTip={"intro"}
          bgColor={"#F7F7F7"}
        >
          <div className="pc-content-title ">second perspective: ai</div>
          <div className="pc-content-body">
            since i only had one design direction, i was interested to see how
            AI would handle this problem. it would also be useful to first cover
            potentially missing requirements.
          </div>
          <div className="pc-content-body">
            i first draft a brief with claude, and discussed with it. screenshot
            of the brief is shown below.
          </div>
          <div className="pc-content-title green">ai prototyping</div>
          <div className="pc-content-body">
            i passed this brief to v0.dev for it to prototype the design.
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={AI_IMAGES} options={OPTIONS} />
          </div>
          <div className="pc-content-body">
            i evaluated the designs it showed, by writing it down as it is
            easier for me to picture the changes. the screenshot below shows the
            sketched evaluation.
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={DECISION_IMAGES} options={OPTIONS} />
          </div>
          <div className="pc-content-title ">prototyping limitation</div>
          <div className="pc-content-body">
            problem: on the free plan, there was a very restrictive credit
            limit. ai generation was fast, but adjusting and altering cost
            credits. so, i took the ideas and rebuilt them myself.
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={0}
          currProg={100}
          currProgTip={"intro"}
          bgColor={"#E3FAFF"}
        >
          <div className="pc-content-title ">decision table</div>
          <div className="pc-content-body">
            i brought the ideas made by v0.dev and then evaluated against the
            same criteria: clear hierarchy, quick scanning and low risk of
            clinical error. here are a few decisions made, not everything is
            shown for brevity.
          </div>
          <div className="pc-content-body">{DecisionTable()}</div>
          <div className="pc-content-title ">design walkthrough</div>
          <div className="pc-content-body">
            designs below combine previous work and newer ideas. nevertheless
            much more iterations were still needed to improve it.
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={MERGED_IMAGES} options={OPTIONS} />
          </div>
        </ProjectContent>
      </div>
    </div>
  );
};

export default HomeAssistantPage;

//  <ProjectContent prevProg={0} currProg={100} currProgTip={"intro"}>
//    <div className="pc-content">
//      <div className="pc-content-title">what is this exactly?</div>
//      <div className="pc-content-body">
//        LLL Sdn. Bhd, Malaysia, specialises in developing systems, where
//        specialisation is in the medical field (clinics). One of the
//        system is an ecosystem that bundles patient records, prescription
//        system, inventory system, claims and invoices, and many more.
//      </div>
//    </div>
//    <div className="pc-content">
//      <div className="pc-content-title">
//        prescription management system
//      </div>
//      <div className="pc-content-body">
//        Management systems are usually optimised only for desktop views.
//        Due to the information density, it is usually not recommended to
//        be used on smaller displays. For this however, the practitioners
//        (e.g. doctors, nurses) may require checking patient information on
//        the go.
//      </div>
//    </div>
//  </ProjectContent>
//  <ProjectContent currProg={100} currProgTip={"desc"}>
//    <div className="pc-content">
//      <div className="pc-content-title">design background</div>
//      <div className="pc-content-body">
//        initially, the lead designer only made the designs for web, based
//        on the design specification of the project managers. there was a
//        problem with user-flow, shown below using a low-fi wireframe (due
//        to intellectual property, the actual design could not be
//        revealed), but this was not noticed. Reassessing this, there were
//        multiple problems:
//        <ul>
//          <li>
//            <span className="pc-li-emp">
//              multiple buttons with constructive process:
//            </span>{" "}
//            there exists at least two constructive buttons (e.g. add,
//            confirm), but one button (confirm) can be more problematic as
//            practitioners could click on confirm when trying to save a
//            record in the prescription, with more to be queued.
//          </li>
//          <li>
//            <span className="pc-li-emp">
//              multiple buttons with destructive process:
//            </span>{" "}
//            there exists at least two destructive buttons (e.g. cancel,
//            delete), where cancel in the summary popup clears all records.
//            even with a warning modal, practitioners may press OK
//            unintentionally. this is known as action slip in human
//            computer interaction (HCI).
//          </li>
//          <li>
//            <span className="pc-li-emp">record adding confusion:</span>{" "}
//            for a practitioner new to the system or not very
//            tech-literate, after adding a record, the form gets cleared.
//            this can be a source of confusion, where the practitioner may
//            think the information is removed, leading to frustration.
//          </li>
//        </ul>
//      </div>
//      <div className="pc-content-body gallery">
//        <EmblaCarousel slides={OLD_IMAGES} options={OPTIONS} />
//      </div>
//      <div className="pc-content-body">
//        The project specification had changed mid-way to involve mobile.
//        it is a much larger challenge to design desktop-first than
//        mobile-first.
//      </div>
//      <div className="pc-content-body">
//        with the deadline unchanged, we had to settle on a compromise. the
//        final design fitted the specification, but was not unanimously
//        agreed by the project managers.
//      </div>
//    </div>
//  </ProjectContent>
//  <ProjectContent prevProg={0} currProg={100} currProgTip={"intro"}>
//    <div className="pc-content">
//      <div className="pc-content-title">case study</div>
//      <div className="pc-content-body">
//        the developed design was fairly hard to use, saddled with
//        additional and unnecessary clicks. to facilitate simpler design
//        process for developers and faster use, the following is proposed.
//      </div>
//      <div className="pc-content-body gallery">
//        <EmblaCarousel slides={MOBILE_IMAGES} options={OPTIONS} />
//      </div>
//      <div className="pc-content-body">
//        this eliminated a few problems listed previously.
//        <ul>
//          <li>
//            <span className="pc-li-emp">
//              one button with constructive process:
//            </span>{" "}
//            now, there is only one button with confirm, clear to the users
//            that confirm meant submitting information to the backend.
//          </li>
//          <li>
//            <span className="pc-li-emp">
//              multiple buttons with destructive process:
//            </span>{" "}
//            while there exists multiple destructive buttons, they are
//            placed far from each other.
//          </li>
//          <li>
//            <span className="pc-li-emp">intuitive record saving:</span>{" "}
//            instead of clearing information every save, this presents an
//            advantage where users can add information halfway, create
//            another record, fill that in, and return to the previous
//            progress. A plus to "User Control and Freedom" by Nielsen
//            Norman.
//          </li>
//          <li>
//            <span className="pc-li-emp">responsive scaling:</span> this
//            design also enable easy responsive scaling. for larger
//            screens, this can scale automatically, and for widescreens,
//            more columns can be fit per row without much changes.
//          </li>
//        </ul>
//      </div>
//      <div className="pc-content-body">
//        desktop variant is shown below.
//      </div>
//      <div className="pc-content-body gallery">
//        <EmblaCarousel slides={DESKTOP_IMAGES} options={OPTIONS} />
//      </div>
//    </div>
//  </ProjectContent>
