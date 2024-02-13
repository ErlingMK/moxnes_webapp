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
  if (isCollapsed) {
    return (
      <div className={"flex flex-col items-start"}>
        <p className={"font-bold w-max"}>{header}</p>
        <button
          className={"underline hover:scale-105 self-end"}
          onClick={toggleState}
        >
          Trykk for å lese mer
        </button>
      </div>
    );
  }

  return (
    <div className={"flex flex-col"}>
      <p className={"font-bold w-max"}>{header}</p>
      <br />
      {content}
      <button
        className={"underline hover:scale-105 self-end"}
        onClick={toggleState}
      >
        Trykk for å skjule
      </button>
    </div>
  );
}
