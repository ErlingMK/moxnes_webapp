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
        <h1 className={"font-bold md:w-max"}>{header}</h1>
        <button className={"underline hover:scale-105"} onClick={toggleState}>
          Trykk for å lese mer
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className={"font-bold"}>{header}</h1>
      <br />
      {content}
      <button className={"underline hover:scale-105"} onClick={toggleState}>
        Trykk for å skjule
      </button>
    </div>
  );
}
