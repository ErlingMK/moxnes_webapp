import { ChangeEvent } from "react";
import { MulitLineInputProps } from "./MultiLineInput";

export interface InputProps<T> extends MulitLineInputProps<T> {
  type: string;
  required?: boolean;
}

export default function Input({
  name,
  type,
  header,
  required,
}: InputProps<HTMLInputElement>) {
  return (
    <div className={"flex flex-col"}>
      <label htmlFor={name}>{header}</label>
      <input
        className={
          "m-2 shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline"
        }
        required={required}
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
}
