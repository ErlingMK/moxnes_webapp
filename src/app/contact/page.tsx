"use client";

import { useRef, useState } from "react";
import Input from "../components/Input";
import MultiLineInput from "../components/MultiLineInput";
import { SendButton } from "../components/SendButton";
import { submitContactForm } from "../actions/mailAction";

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);

  const [requirePhone, setRequirePhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={"p-5 m-x flex flex-col gap-5"}>
      <h2 className={"text-3xl "}>Kontakt</h2>

      <form
        ref={ref}
        action={async (formData) => {
          await submitContactForm(formData);
          ref.current?.reset();
          setIsSubmitted(true);
        }}
        className={"flex flex-col gap-2 items-start mx-2"}
      >
        <fieldset>
          <Input name="name" type="text" header="Fullt navn" />

          <MultiLineInput name="message" header="Henvendelse" />

          <Input name="email" type="email" header="E-post" />

          <Input
            name="phone"
            type="tel"
            header="Telefon"
            required={requirePhone}
          />

          <div className={"flex items-center"}>
            <input
              onChange={(e) => setRequirePhone(e.target.checked)}
              className={"m-2"}
              type="checkbox"
              id="preferEmail"
              name="preferEmail"
            />
            <label htmlFor="preferEmail">
              Huk av hvis du foretrekker å bli kontaktet på telefon
            </label>
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
