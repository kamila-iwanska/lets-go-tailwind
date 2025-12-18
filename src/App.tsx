import { useState } from "react";
import { Textfield } from "./Textfield";
import { Button } from "./Button";
import remove from "./assets/remove.svg";
import removeHover from "./assets/removeHover.svg";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const availableHours = ["12:00", "14:00", "16:30", "18:30", "20:00"];

  return (
    <div className="flex justify-center text-dark-text bg-background min-h-screen">
      <div className="flex flex-col px-6 py-24 max-w-120 w-full">
        <h2 className="text-2xl">Personal info</h2>
        <div className="flex flex-col gap-6">
          <Textfield
            labelText="First Name"
            value={firstName}
            inputType="text"
            error=""
            setValue={setFirstName}
          />
          <Textfield
            value={lastName}
            labelText="Last Name"
            inputType="text"
            error=""
            setValue={setLastName}
          />
          <Textfield
            value={email}
            labelText="Email Address"
            inputType="email"
            error={errorEmail}
            onBlur={() =>
              email.includes("@")
                ? setErrorEmail("")
                : setErrorEmail(
                    "Please use correct formatting.\nExample: address@email.com"
                  )
            }
            setValue={setEmail}
          />

          <div>
            <label htmlFor="age" className="mb-2 block">
              Age
            </label>
            <div className="flex justify-between text-xs">
              <span>8</span>
              <span>100</span>
            </div>
            <input
              id="age"
              type="range"
              value={age}
              min="8"
              max="100"
              className="w-full bg-light-violet accent-dark-violet"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <div className="border flex justify-center px-4 py-9 border-light-violet bg-white rounded-lg whitespace-pre">
              <label
                className="text-dark-violet underline cursor-pointer"
                htmlFor="photo"
              >
                Upload a file
              </label>
              <span className="text-grey-text"> or drag and drop here</span>
              <input
                type="file"
                id="photo"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl">Your workout</h2>
        <label>Date</label>
        <label>Time</label>
        <Button text="Send Application" />
      </div>
    </div>
  );
}

export default App;
