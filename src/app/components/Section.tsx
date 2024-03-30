import { forwardRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  first?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, first }: SectionProps, ref) => {
    return (
      <section ref={ref} id={id}>
        {first ? null : (
          <div>
            <hr />
            <br />
          </div>
        )}

        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
