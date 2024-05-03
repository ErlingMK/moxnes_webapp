"use client";

import { FormEvent, useRef, useState } from "react";
import Input from "../components/Input";
import MultiLineInput from "../components/MultiLineInput";
import { submitContactForm } from "../actions/mailAction";
import { BeatLoader } from "react-spinners";
import Popup from "reactjs-popup";
import { CloseButton } from "../components/Button";
import { email } from "../utility";

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [requirePhone, setRequirePhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
      })
      .finally(() => {
        setIsPending(false);
      });
  }

  return (
    <div className={"p-5 m-x flex flex-col gap-5"}>
      <h2 className={"text-3xl "}>Ta kontakt</h2>
      <Popup
        position="right center"
        open={isError}
        onClose={() => setIsError(false)}
      >
        <ModalPopup onClose={() => setIsError(false)} />
      </Popup>

      <form
        onSubmit={onSubmit}
        ref={ref}
        className={"flex flex-col gap-2 items-start"}
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

interface ModalPopupProps {
  onClose: () => void;
}

function ModalPopup({ onClose }: ModalPopupProps) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 border border-gray-300 rounded shadow-lg">
      <h2 className="text-md">Noe gikk galt</h2>
      <p>Det skjedde en feil ved innsending av kontaktskjema.</p>
      <p>
        Prøv igjen senere eller ta kontakt ved å sende en e-post til{" "}
        <a href={email} type="email" className="underline">
          {email}
        </a>
      </p>
      <div className="flex flex-row justify-between mt-5">
        <CloseButton onclick={onClose} />
        <a
          type="email"
          href="mailto:post@moxnesjus.no"
          className="transition bg-sky-500 hover:bg-sky-400 p-2 text-white rounded shadow-md text-center"
        >
          Opprett og send e-post
        </a>
      </div>
    </div>
  );
}
