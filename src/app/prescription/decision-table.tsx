const decisions = [
  {
    idea: "Left panel showing visit reason, insurer, allergies and previous encounter reviews",
    status: "accepted",
    label: "Accepted",
    note: "Responsive behavior still open",
    reason:
      "Practitioners can look back at previous encounters without leaving the current screen. How the panel adapts to smaller screens is still under discussion with the team.",
  },

  {
    idea: "Autosave and save as draft",
    status: "accepted",
    label: "Accepted",
    note: "Scheduled for a later phase",
    reason:
      "Approved by stakeholders because it lets practitioners pause and check something else, but moved to a later phase to fit the development timeline.",
  },
  {
    idea: "Subtitles under almost every section title (medication, laboratory, etc.)",
    status: "rejected",
    label: "Rejected",
    note: null,
    reason:
      "The subtitles were jargon, unnecessary or already known to practitioners. Less text means faster scanning during a consultation.",
  },
  {
    idea: "Encounter status tracker at the top (e.g. awaiting practitioner → practitioner in progress)",
    status: "rejected",
    label: "Rejected",
    note: null,
    reason:
      "Most clinics don’t run live tracking at that level of detail, so it would show information the system can’t reliably provide.",
  },
];

export default function DecisionTable() {
  return (
    <div className="pct-decision-table">
      <table className="pct-table">
        <caption className="pct-caption">
          AI suggestions and my decisions
        </caption>
        <thead className="pct-thead">
          <tr className="pct-tr">
            <th scope="col" className="pct-th pct-th--idea">
              generated from v0.dev
            </th>
            <th scope="col" className="pct-th pct-th--decision">
              Decision
            </th>
            <th scope="col" className="pct-th pct-th--reason">
              Reason
            </th>
          </tr>
        </thead>
        <tbody className="pct-tbody">
          {decisions.map((item) => (
            <tr
              key={item.idea}
              className={`pct-tr pct-row pct-row--${item.status}`}
            >
              <td className="pct-td pct-td--idea" data-label="AI idea">
                {item.idea}
              </td>
              <td className="pct-td pct-td--decision" data-label="Decision">
                <span className={`pct-badge pct-badge--${item.status}`}>
                  {item.label}
                </span>
                {item.note && <span className="pct-note">{item.note}</span>}
              </td>
              <td className="pct-td pct-td--reason" data-label="Reason">
                {item.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
