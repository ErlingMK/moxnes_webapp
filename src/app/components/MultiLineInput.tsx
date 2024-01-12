export interface MulitLineInputProps {
  name: string;
  header: string;
}

export default function Input({ name, header }: MulitLineInputProps) {
  return (
    <div className={"flex flex-col"}>
      <label htmlFor={name}>{header}</label>
      <textarea
        cols={40}
        rows={10}
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
