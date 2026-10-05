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

const AI_IMAGES = [
  {
    title: "v0.dev generated screens",
    imagePath: `${IMG_URL}/desktop_ai.png`,
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
          <div className="pc-content-title ">backstory</div>
          <div className="pc-content-body">
            working with lifelinelab sdn.bhd, a designer and i were tasked with
            a module - prescription system as part of a wider ecosystem. This
            system supports the entire flow of a typical patient management life
            cycle.
          </div>
          <div className="pc-content-title green">prescription - input</div>
          <div className="pc-content-body">
            for demonstration purposes, here i have used part of an earlier
            sketch based on the requirements. for legal purposes it does not
            represent the final product. however, it fulfils the following:
            <ul>
              <li>reference current patient</li>
              <li>enable prescription of medication, procedure, vaccines</li>
              <li>lookup allergies</li>
              <li>create medical certificate on the fly</li>
              <li>supports mobile screen</li>
            </ul>
          </div>
          <div className="pc-content-body">
            this is based on:
            <ul>
              <li>current design library and tokens</li>
              <li>older materials</li>
            </ul>
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={OLD_IMAGES} options={OPTIONS} />
          </div>
          <div className="pc-content-title ">my own attempt</div>
          <div className="pc-content-body">
            i attempted to draft one myself to include responsiveness. may not
            be beautiful, but it is optimised for responsiveness.
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
          <div className="pc-content-title ">brief with claude</div>
          <div className="pc-content-body">
            we may have missed out on a few requirements; so for assistance, i
            conversed with an LLM, claude AI, passing in prompts to create a
            brief. this brief contains all the requirements, questions that we
            could only later answer, and so on.
          </div>
          <div className="pc-content-title green">v0.dev</div>
          <div className="pc-content-body">
            with the brief, this is then passed onto v0.dev, an ai assistant
            that takes in information within the brief and then develop screens.
            however, the results are not used directly, because:
            <ul>
              <li>
                designs might look beautiful, but lacks user experience and
                proper user flow
              </li>
              <li>requires tokens ($$$) to modify designs</li>
              <li>not great with responsive screens</li>
            </ul>
          </div>
          <div className="pc-content-title ">back to claude</div>
          <div className="pc-content-body">
            with the ai-developed screens, i again used LLM to discuss about
            potential issues, such as: any dark UX patterns? does the flow make
            sense? with all the heuristics available by experts, what are
            possible violations?
            <ul>
              <li>
                treating myself as the UX expert, i eliminated some redundant or
                unnecessary features/flow that were found in the developed
                screens.
              </li>
            </ul>
          </div>
          <div className="pc-content-body gallery">
            <EmblaCarousel slides={AI_IMAGES} options={OPTIONS} />
          </div>
        </ProjectContent>
        <ProjectContent
          prevProg={0}
          currProg={100}
          currProgTip={"intro"}
          bgColor={"#E3FAFF"}
        >
          <div className="pc-content-title ">
            cooperation between ai and human
          </div>
          <div className="pc-content-body">
            after all, using ai is the key for the best efficiency. the designs
            produced were edited back into Figma, and then modified.
            <ul>
              <li>
                for design showcase, i did not examine the usefulness and
                practicality. performing a ux research / a/b testing / etc will
                require investing more time, so for now, this is the final
                result.
              </li>
              <li>
                i still retained the cleaner look as time is important for
                practitioners, and too many features might slow down their
                process.
              </li>
            </ul>
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
