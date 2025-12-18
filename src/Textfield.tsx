import { useId } from "react";
import warning from "./assets/warning.svg";

export function Textfield({
  labelText,
  value,
  inputType,
  error,
  onBlur,
  setValue,
}: {
  labelText: string;
  value: string;
  inputType: string;
  error: string;
  onBlur?: () => void;
  setValue: (newValue: string) => void;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        onBlur={onBlur}
        type={inputType}
        value={value}
        className={
          error
            ? "border-2 rounded-lg px-4 py-3 border-red bg-light-red outline-none"
            : "border rounded-lg px-4 py-3 border-light-violet bg-white focus:border-dark-violet focus:border-2 outline-none"
        }
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={error ? "flex items-start" : "hidden"}>
        <img className=" mt-1.25 mr-2" src={warning} />
        <span className="whitespace-pre">{error}</span>
      </div>
    </div>
  );
}
