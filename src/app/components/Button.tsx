interface ButtonProps {
  onclick: (id: string) => void;
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
      Kontakt
    </button>
  );
}
