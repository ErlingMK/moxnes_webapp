import { ReactNode } from "react";

export interface PanelProps {
  content: ReactNode;
}

export default function Panel({ content }: PanelProps) {
  return <div className={"bg-gray-300 p-5 text-black"}>{content}</div>;
}
