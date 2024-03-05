"use client";

import { ReactNode, useState } from "react";

export interface CollapsablePanelProps {
  header: string;
  content: ReactNode;
  defaultCollapsed?: boolean;
}

export default function CollapsablePanel({
  header,
  content,
  defaultCollapsed = true,
}: CollapsablePanelProps) {
  let [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  function toggleState(): void {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className={"flex flex-col items-start"}>
      <p className={"font-bold md:w-max"}>{header}</p>
      {isCollapsed ? null : (
        <div>
          {" "}
          <br /> {content}
        </div>
      )}
      <button
        className={"transition underline hover:scale-105 self-end"}
        onClick={toggleState}
      >
        {isCollapsed ? "Trykk for å lese mer" : "Trykk for å skjule"}
      </button>
    </div>
  );
}
