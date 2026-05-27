"use client";

import "./notice.scss";

import { useSession } from "@Hooks/use-session";

export default function NoticeBar() {
  const { visible, setItem, hydrated } = useSession('alert-view-large"');

  if (!hydrated || !visible) {
    return null;
  }

  return (
    <div className="notice-container">
      <div className="notice-inner">
        <div className="notice-symbol">
          <span className="material-symbols-outlined">error</span>
        </div>
        <div className="notice-text">
          View this on desktop screens for a better experience.
        </div>
        <div className="notice-btn" onClick={setItem}>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>
  );
}
