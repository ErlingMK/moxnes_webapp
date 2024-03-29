"use client";

import { FormEvent, useRef, useState } from "react";
import Input from "../components/Input";
import MultiLineInput from "../components/MultiLineInput";
import { submitContactForm } from "../actions/mailAction";
import { BeatLoader, BounceLoader } from "react-spinners";

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [requirePhone, setRequirePhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    submitContactForm(new FormData(event.currentTarget))
      .then(() => {
        setRequirePhone(false);
        setIsPending(false);
        setIsSubmitted(true);
        ref.current?.reset();
      })
      .catch((e) => {
        // handle gracefully
        console.log(e);
      })
      .finally(() => {
        setIsPending(false);
      });
  }

  return (
    <div className={"pt-5 m-x flex flex-col gap-5"}>
      <h2 className={"text-3xl "}>Kontakt</h2>
      <form
        onSubmit={onSubmit}
        ref={ref}
        className={"flex flex-col gap-2 items-start mx-2"}
      >
        <fieldset>
          <Input name="name" type="text" header="Ditt navn" />
          <MultiLineInput name="message" header="Hva gjelder henvendelsen?" />
          <Input name="email" type="email" header="Din e-post" />
          <Input
            name="phone"
            type="tel"
            header="Ditt telefonnummer"
            required={requirePhone}
          />
          <div className={"flex items-center"}>
            <input
              onChange={(e) => setRequirePhone(e.target.checked)}
              className={"m-2"}
              type="checkbox"
              id="preferPhone"
              name="preferPhone"
            />
            <label htmlFor="preferPhone">
              Huk av hvis du foretrekker å bli kontaktet på telefon
            </label>
          </div>

          <div className={"mt-5 flex justify-end items-center flex-row gap-5"}>
            {isSubmitted ? (
              <h2 className={"text-md"}>Takk for din henvendelse!</h2>
            ) : null}
            <div
              className={
                "bg-sky-500 hover:bg-sky-400  text-white rounded flex flex-row items-center transition shadow-md hover:scale-105"
              }
            >
              <button
                disabled={isPending}
                type="submit"
                className={"py-3 px-8 "}
              >
                {isPending ? "Sender..." : "Send"}
              </button>
              <BeatLoader
                loading={isPending}
                color="white"
                className={"mr-3"}
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
