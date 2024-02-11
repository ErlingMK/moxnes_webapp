import { ReactNode } from "react";

export interface PanelProps {
  content: ReactNode;
}

export default function Panel({ content }: PanelProps) {
  return (
    <div className={"bg-secondary-blue p-5 text-white rounded-lg"}>
      {content}
    </div>
  );
}
