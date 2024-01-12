"use client";

import { useRef, useState } from "react";
import Input from "../components/Input";
import MultiLineInput from "../components/MultiLineInput";
import { SendButton } from "../components/SendButton";
import { submitContactForm } from "../serverActions";

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={"p-5"}>
      <form
        ref={ref}
        action={async (formData) => {
          await submitContactForm(formData);
          ref.current?.reset();
          setIsSubmitted(true);
        }}
        className={"flex flex-col gap-2 items-start"}
      >
        <fieldset>
          <Input name="name" type="text" header="Fullt navn" />

          <MultiLineInput name="message" header="Henvendelse" />

          <Input name="email" type="email" header="E-post" />

          <Input name="phone" type="tel" header="Telefon" />

          <div className={"flex items-start"}>
            <input
              className={"m-2"}
              type="checkbox"
              id="preferEmail"
              name="preferEmail"
            />
            <label htmlFor="preferEmail">Foretrekk e-post</label>
          </div>
          <SendButton />
        </fieldset>
      </form>

      {isSubmitted ? (
        <h2 className={"text-lg mt-5"}>Takk for din henvendelse!</h2>
      ) : null}
    </div>
  );
}
