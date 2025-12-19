import arrowR from "./assets/arrowRight.svg";
import arrowL from "./assets/arrowLeft.svg";
import { useState } from "react";

function numbersToN(n: number) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
function daysInMonth(month: number) {
  return new Date(now.getFullYear(), now.getMonth() + 1 + month, 0).getDate();
}
function weekDay(month: number) {
  return new Date(now.getFullYear(), now.getMonth() + month, 1).getDay();
}
const now = new Date();

export function Calendar({
  date,
  setDate,
  isDateDisabled,
}: {
  date?: Date;
  setDate: (newDate: Date) => void;
  isDateDisabled: (newDate: Date) => boolean;
}) {
  const [month, setMonth] = useState<number>(0);
  return (
    <div className="border border-light-violet bg-white rounded-lg p-6 ">
      <div className="flex justify-between mb-8">
        <button onClick={() => setMonth(month - 1)}>
          <img src={arrowL} />
        </button>
        <span>
          {new Date(
            now.getFullYear(),
            now.getMonth() + month,
            1
          ).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={() => setMonth(month + 1)}>
          <img src={arrowR} />
        </button>
      </div>
      <div className="grid text-center grid-cols-7 gap-2.5">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
        {numbersToN((weekDay(month) + 6) % 7).map(() => (
          <span />
        ))}
        {numbersToN(daysInMonth(month)).map((d) => (
          <button
            disabled={isDateDisabled(
              new Date(now.getFullYear(), now.getMonth() + month, d)
            )}
            key={d}
            className={
              "cursor-pointer rounded-full w-8 h-8 disabled:text-grey-text" +
              (new Date(
                now.getFullYear(),
                now.getMonth() + month,
                d
              ).getTime() == date?.getTime()
                ? " bg-dark-violet text-white"
                : "")
            }
            onClick={() =>
              setDate(new Date(now.getFullYear(), now.getMonth() + month, d))
            }
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
