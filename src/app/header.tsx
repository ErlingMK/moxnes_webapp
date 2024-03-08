"use client";
import DesktopHeader from "@/app/components/Header";

export interface HeaderProps {
  scrollTo: (id: string) => void;
}

export default function Header({ scrollTo }: HeaderProps) {
  return <DesktopHeader scrollTo={scrollTo} />;
}
