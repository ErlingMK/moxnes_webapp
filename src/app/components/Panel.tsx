import { ReactNode } from "react";

export interface PanelProps {
  content: ReactNode;
}

export default function Panel({ content }: PanelProps) {
  return (
    <div className="transition bg-secondary-blue p-5 text-white rounded-lg lg:w-1/2 lg:ml-auto shadow-md hover:scale-[1.01] hover:shadow-lg">
      {content}
    </div>
  );
}
