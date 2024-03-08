import { forwardRef } from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children }: SectionProps, ref) => {
    return (
      <section ref={ref}>
        <hr />
        <br />
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
