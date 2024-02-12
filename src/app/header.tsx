"use client";
import sizeMe from "react-sizeme";
import DesktopHeader from "@/app/features/desktopHeader";
import MobileHeader from "@/app/features/mobileHeader";

export interface HeaderProps {
  scrollTo: (id: string) => void;
}

interface Size {
  width: number;
  height: number;
}

export default function Header({ scrollTo }: HeaderProps) {
  return <DesktopHeader scrollTo={scrollTo} />;
  // return (
  //   <div className={"sticky"}>
  //     {size.width > 390 ? <DesktopHeader /> : <MobileHeader />}
  //   </div>
  // );
}

// export default sizeMe({ monitorWidth: true })(Header);
