import { useEffect, useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./custom-day-picker.css";
import TimeButton from "../../../../components/TimeButton";

const ContactUsCalendar = () => {
  const [selectedTime, setSelectedTime] = useState("");
  /* --------- calendar --------- */
  const [selected, setSelected] = useState(new Date());
  const [lastSelected, setLastSelected] = useState(new Date());
  const currentDate = new Date();
  const previousDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);
  const disabledDays = [{ from: new Date(2023, 1, 1), to: previousDate }];

  /* --------- time --------- */
  const availableTime = {
    am: [
      "12:00",
      "12:30",
      "01:00",
      "01:30",
      "02:00",
      "02:30",
      "03:00",
      "03:30",
    ],
    pm: [
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
    ],
  };

  useEffect(() => {
    if (selected) {
      setLastSelected(selected);
    } else {
      setSelected(lastSelected);
    }
  }, [selected, lastSelected]);

  const handleButtonClick = (time) => {
    setSelectedTime(time);
  };

  const userSelectDate = () => {
    const makeTime = {
      date: selected,
      time: selectedTime,
    };
    console.log(makeTime);
    // TODO:
    // send data server
  };

  return (
    <section>
      <article className="w-[94%] max-w-4xl mx-auto my-24  shadow-md py-10 px-2">
        <div className="grid grid-cols-2">
          {/* calender */}
          <div>
            <p className="pl-16">Pick a Date and Time</p>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              fromYear={currentDate.getFullYear()}
              disabled={disabledDays}
              modifiersClassNames={{
                selected: "my-selected",
              }}
            />
          </div>
          {/* time */}
          <div>
            <p>
              Available Starting times for{" "}
              <span className="font-bold">
                {selected && format(selected, "PP")}
              </span>
            </p>
            <div className="grid grid-cols-2 mt-4">
              <div className="flex flex-col items-center space-y-3">
                <p className="text-xl font-bold text-center">AM</p>
                {availableTime.am.map((time, index) => (
                  <TimeButton
                    selectedTime={selectedTime}
                    handleButtonClick={handleButtonClick}
                    key={index}
                  >
                    {`${time} AM`}
                  </TimeButton>
                ))}
              </div>
              <div className="flex flex-col items-center space-y-3">
                <p className="text-xl font-bold text-center">PM</p>
                {availableTime.pm.map((time, index) => (
                  <TimeButton
                    selectedTime={selectedTime}
                    handleButtonClick={handleButtonClick}
                    key={index}
                  >
                    {`${time} AM`}
                  </TimeButton>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* select button */}
        <div className="flex justify-center mt-12">
          <button
            id="selectDate"
            disabled={selectedTime === "" ? true : false}
            onClick={userSelectDate}
            className="bg-[var(--secondary-color)] text-white py-5 px-12 rounded-md"
          >
            Select Date
          </button>
        </div>
      </article>
    </section>
  );
};

export default ContactUsCalendar;
