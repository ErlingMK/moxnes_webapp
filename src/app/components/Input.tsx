export interface InputProps {
  name: string;
  type: string;
  header: string;
  required?: boolean;
}

export default function Input({ name, type, header, required }: InputProps) {
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
