interface ButtonProps {
  onclick: (param: any) => void;
  text: string;
}

export default function Button({ onclick, text }: ButtonProps) {
  return (
    <button
      key={text}
      className={
        "transition bg-sky-500 hover:bg-sky-400 p-2 text-white rounded shadow-md hover:scale-105"
      }
      onClick={() => onclick(text)}
    >
      {text}
    </button>
  );
}

export function CloseButton({ onclick }: { onclick: () => void }) {
  return (
    <button
      className={
        "transition bg-white hover:bg-gray-100 p-2 text-black border border-gray-200 rounded shadow-md hover:scale-105"
      }
      onClick={onclick}
    >
      Lukk
    </button>
  );
}
