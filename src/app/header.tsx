"use client";
import DesktopHeader from "@/app/features/desktopHeader";

export interface HeaderProps {
  scrollTo: (id: string) => void;
}

export default function Header({ scrollTo }: HeaderProps) {
  return <DesktopHeader scrollTo={scrollTo} />;
}
