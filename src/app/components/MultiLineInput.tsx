import { ChangeEvent } from "react";

export interface MulitLineInputProps<T> {
  name: string;
  header: string;
}

export default function Input({
  name,
  header,
}: MulitLineInputProps<HTMLTextAreaElement>) {
  return (
    <div className={"flex flex-col"}>
      <label htmlFor={name}>{header}</label>
      <textarea
        cols={80}
        rows={12}
        className={
          "m-2 shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline"
        }
        required
        id={name}
        name={name}
      />
    </div>
  );
}
