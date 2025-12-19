import { useEffect, useState, type ChangeEvent } from "react";
import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { IconRemove } from "./IconRemove";
import { Calendar } from "./Calendar";
import WarningViolet from "./assets/warningViolet.svg";
import { Hours } from "./Hours";
import { fetchData, sendApplication } from "./Api";
import type { Holiday } from "./Types";
import valueIndicator from "./assets/valueIndicator.svg";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>();
  const [fetchedData, setFetchedData] = useState<Holiday[]>([]);
  useEffect(() => {
    fetchData().then((data) => setFetchedData(data));
  }, []);
  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setImageFile(event.dataTransfer.files[0]);
    }
  };
  const foundHoliday = fetchedData.find(
    (h) => h.date == date?.toLocaleDateString("en-CA") && h.type == "OBSERVANCE"
  );

  return (
    <div className="flex justify-center text-dark-text bg-background min-h-screen">
      <div className="flex flex-col px-6 py-24 max-w-120 w-full">
        <h2 className="text-2xl mb-8">Personal info</h2>
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
            <div className="grid place-items-center">
              <img className="col-start-1 row-start-1" src={valueIndicator} />
              <span className="col-start-1 row-start-1 text-xs text-dark-violet mt-1.5">
                {age}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <div
              onDragOver={handleDragOver}
              onDrop={handleFileDrop}
              className="border flex justify-center px-4 py-9 border-light-violet bg-white rounded-lg whitespace-pre"
            >
              {imageFile ? (
                <>
                  {imageFile.name}{" "}
                  <button onClick={() => setImageFile(undefined)}>
                    <IconRemove />
                  </button>
                </>
              ) : (
                <>
                  <label
                    className="text-dark-violet underline cursor-pointer"
                    htmlFor="photo"
                  >
                    Upload a file
                  </label>
                  <span className="text-grey-text"> or drag and drop here</span>
                </>
              )}
              <input
                type="file"
                id="photo"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={updateImage}
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl mt-12 mb-8">Your workout</h2>
        <div className="flex gap-6">
          <div>
            <label>Date</label>
            <Calendar
              date={date}
              setDate={setDate}
              isDateDisabled={(date) =>
                fetchedData.some(
                  (h) =>
                    h.date == date?.toLocaleDateString("en-CA") &&
                    h.type == "NATIONAL_HOLIDAY"
                ) || date.getDay() == 0
              }
            />
            {foundHoliday ? (
              <span className="flex my-2 gap-2">
                <img src={WarningViolet} />
                It is {foundHoliday.name}.
              </span>
            ) : null}
          </div>
          <div>
            <label>Time</label>
            {date ? <Hours hour={hour} setHour={setHour} /> : null}
          </div>
        </div>
        <Button
          onClick={() => {
            if (!date || !imageFile) {
            } else {
              const formData = new FormData();
              formData.append("firstName", firstName);
              formData.append("lastName", lastName);
              formData.append("email", email);
              formData.append("age", age);
              formData.append("photo", imageFile);
              formData.append("date", date?.toLocaleDateString("en-CA"));
              formData.append("hour", hour);
              sendApplication(formData);
            }
          }}
          text="Send Application"
          disabled={
            !firstName ||
            !lastName ||
            !email ||
            !age ||
            !date ||
            !hour ||
            !imageFile
          }
        />
      </div>
    </div>
  );
}

export default App;
