export function Button({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <>
      <button
        disabled={disabled}
        className="py-2.5 text-white bg-dark-violet hover:bg-darker-violet disabled:bg-light-violet rounded"
      >
        {text}
      </button>
    </>
  );
}
