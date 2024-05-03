import { email } from "../utility";

export interface MailtoProps {
  className?: string;
  text?: string;
}

export default function Mailto({ className, text }: MailtoProps) {
  const link = "mailto:" + email;
  return (
    <a type="email" href={link} className={className ?? "underline"}>
      {text ?? email}
    </a>
  );
}
