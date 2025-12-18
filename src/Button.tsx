export function Button({ text }: { text: string }) {
  return (
    <>
      <button className="py-2.5 text-white bg-dark-violet hover:bg-darker-violet disabled:bg-light-violet rounded">
        {text}
      </button>
    </>
  );
}
