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
        className="my-2 p-3 shadow border rounded w-full focus:outline-none focus:border-sky-500 invalid:border-red-500 focus:invalid:border-red-500"
        required={required}
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
}
