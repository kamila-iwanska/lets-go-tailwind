export function Hours({
  hour,
  setHour,
}: {
  hour: string;
  setHour: (newHour: string) => void;
}) {
  const hours = ["12:00", "14:00", "16:30", "18:30", "20:00"];
  return (
    <div className="flex flex-col gap-2">
      {hours.map((h) => (
        <div
          onClick={() => setHour(h)}
          className={
            " bg-white rounded-lg px-3.75 py-2.75 cursor-pointer " +
            (h == hour
              ? "outline-2 outline-dark-violet"
              : "outline outline-light-violet")
          }
        >
          <span>{h}</span>
        </div>
      ))}
    </div>
  );
}
