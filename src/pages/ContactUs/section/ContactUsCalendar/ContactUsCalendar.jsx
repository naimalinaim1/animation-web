import { useEffect, useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./custom-day-picker.css";
import TimeButton from "../../../../components/TimeButton";
import backIcon from "../../../../assets/basic-icon/back-arrow-icon.svg";

import Swal from "sweetalert2";

const ContactUsCalendar = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState([]);
  const [formError, setFormError] = useState("");
  const [isFormSubmit, setIsFormSubmit] = useState(false);

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
    setIsShowForm(true);
  };

  // backToTimePick
  const backToTimePick = () => {
    setIsShowForm(false);
    setSelectedService([]);
  };

  // handle checkbox
  const handleCheckBox = (addService) => {
    if (selectedService.includes(addService)) {
      setSelectedService(
        selectedService.filter((service) => service !== addService)
      );
    } else {
      setSelectedService([...selectedService, addService]);
    }
  };

  // handle form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const websiteUrl = form.websiteUrl.value;
    const message = form.message.value;

    // check value
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === ""
    ) {
      setFormError("Input (first name, last name, email, phone) required");
      return;
    }

    const data = {
      meetingTime: {
        date: selected,
        time: selectedTime,
      },
      userInfo: {
        firstName,
        lastName,
        email,
        phoneNumber,
        websiteUrl,
        message,
        serviceLook: selectedService,
      },
    };

    // TODO:
    // send data server
    fetch("https://animation-web-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setIsFormSubmit(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer:
              '<a href="/contact-us/">Please reload this page. <span class="text-cyan-500">click</span></a>',
          });
        } else {
          Swal.fire({
            title: "Good job!",
            text: "Form Submit successfully",
            icon: "success",
          });
          setIsFormSubmit(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <div className="w-[94%] max-w-4xl mx-auto my-24 shadow-sm py-10 px-2">
        {isShowForm === false ? (
          // calendar & time
          <article>
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
        ) : isFormSubmit === false ? (
          // contact us form
          <article className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-gray-500 border-b pb-6 mb-8">
              <p className="flex items-center gap-4">
                <img
                  onClick={backToTimePick}
                  src={backIcon}
                  className="p-1"
                  alt="back Icon"
                />
                <span>{selectedTime} - 30 Minutes</span>
              </p>
              <p>{format(selected, "PP")}</p>
            </div>
            <form onSubmit={handleFormSubmit}>
              {/* input filed */}
              <div className="space-y-4 text-lg font-medium mx-6">
                {/* first name */}
                <label className="form-control w-full">
                  <div className="label">
                    <span>
                      First Name <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    className="input border-2 input-warning border-[var(--primary-color)] w-full"
                    required
                  />
                </label>
                {/* last name */}
                <label className="form-control w-full">
                  <div className="label">
                    <span>
                      Last Name <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    className="input border-2 input-warning border-[var(--primary-color)] w-full"
                    required
                  />
                </label>
                {/* email */}
                <label className="form-control w-full">
                  <div className="label">
                    <span>
                      Email <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="input border-2 input-warning border-[var(--primary-color)] w-full"
                    required
                  />
                </label>
                {/* phone number */}
                <label className="form-control w-full">
                  <div className="label">
                    <span>
                      Phone <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <input
                    type="number"
                    placeholder="Number"
                    id="phoneNumber"
                    className="input border-2 input-warning border-[var(--primary-color)] w-full"
                    required
                  />
                </label>
                {/* Website url */}
                <label className="form-control w-full">
                  <div className="label">
                    <span>Website</span>
                  </div>
                  <input
                    type="url"
                    placeholder="Web URL goes here"
                    id="websiteUrl"
                    className="input border-2 input-warning border-[var(--primary-color)] w-full"
                  />
                  <p className="text-red-500">{formError}</p>
                </label>
                {/* checkbox */}
                <div className="pl-2 space-y-4">
                  <p className="mt-8">
                    <label>What service you are looking for?</label>
                  </p>
                  {/* checkbox 1 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() =>
                        handleCheckBox("Animated Explainer Video")
                      }
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Animated Explainer Video
                  </label>
                  {/* checkbox 2 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() =>
                        handleCheckBox("Animated Promotional Video")
                      }
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Animated Promotional Video
                  </label>
                  {/* checkbox 3 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() => handleCheckBox("Demo/Walkthrough Video")}
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Demo/Walkthrough Video
                  </label>
                  {/* checkbox 4 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() =>
                        handleCheckBox("Feature Showcase Animation")
                      }
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Feature Showcase Animation
                  </label>
                  {/* checkbox 5 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() => handleCheckBox("Logo Animation")}
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Logo Animation
                  </label>
                  {/* checkbox 6 */}
                  <label className="flex gap-3 items-center">
                    <input
                      onChange={() => handleCheckBox("Other")}
                      type="checkbox"
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                    Other
                  </label>
                </div>
                {/* message */}
                <div className="pt-6">
                  <label>
                    Do you have questions before the meeting?
                    <textarea
                      id="message"
                      placeholder="Please share anything that will help prepare for our meeting."
                      className="font-normal input border-2 input-warning border-[var(--primary-color)] w-full h-24 mt-3 py-2"
                    ></textarea>
                  </label>
                </div>
              </div>
              {/* submit button */}
              <div className="flex justify-center mt-10">
                <input
                  className="cursor-pointer bg-[var(--secondary-color)] text-2xl font-medium text-white py-4 px-6 rounded-md"
                  type="submit"
                  value="Schedule Now"
                />
              </div>
            </form>
          </article>
        ) : (
          <article className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold">Reminder</h3>
            <div className="mt-4 space-x-6">
              <a
                className="btn btn-primary"
                onClick={() =>
                  window.open("https://calendar.google.com/calendar/u/0/r")
                }
              >
                Google Calendar
              </a>
              <a
                className="btn btn-secondary"
                target="blank"
                onClick={() =>
                  window.open("https://outlook.live.com/calendar/0/view/month")
                }
              >
                Outlook Calendar
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default ContactUsCalendar;
