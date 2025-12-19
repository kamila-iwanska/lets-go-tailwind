export function Button({
  text,
  disabled,
  onClick,
}: {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <button
        disabled={disabled}
        className="py-2.5 text-white bg-dark-violet hover:bg-darker-violet disabled:bg-light-violet rounded mt-12"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
