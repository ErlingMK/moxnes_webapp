"use client";
import { experimental_useFormStatus } from "react-dom";

export function SendButton() {
  const pending = false;
  return (
    <div className={"mt-5"}>
      <button
        disabled={pending}
        type="submit"
        className={"bg-sky-500 hover:bg-sky-700 p-2 text-white rounded"}
      >
        {pending ? "Sender..." : "Send"}
      </button>
    </div>
  );
}
