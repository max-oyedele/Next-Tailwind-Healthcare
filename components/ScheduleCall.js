import React, { useState } from "react"
import { Line } from "rc-progress"
import { BiX, BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"
import { RiTimeFill, RiPhoneFill } from "react-icons/ri"

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker'

import TimezonePicker from 'react-bootstrap-timezone-picker'
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'

import { useProvider } from "hooks/use-provider"
import SelectBox from "components/SelectBox"

const ScheduleCall = () => {
  const { call, setCall } = useProvider()
  const [step, setStep] = useState(1)
  const [info, setInfo] = useState({})

  const onChangeInput = (e) => {
    let tInfo = { ...info }
    if (step == 1) tInfo.firstName = e.target.value
    else if (step == 2) tInfo.lastName = e.target.value
    else if (step == 3) tInfo.phoneNumber = e.target.value
    setInfo(tInfo)
  }

  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTimezone, setSelectedTimezone] = useState(null)
  const [selectedTime, setSelectedTime] = useState("10:00")
  React.useEffect(() => {
    let tInfo = { ...info }
    tInfo.date = selectedDay
    tInfo.timezone = selectedTimezone
    tInfo.time = selectedTime
    setInfo(tInfo)
  }, [selectedDay, selectedTimezone, selectedTime])

  return (
    <div id="call" className="fixed inset-0 z-10 bg-primary-100 text-grayscale-white px-6 md:px-36 py-10">
      <div className="flex justify-end">
        <BiX className="text-2xl cursor-pointer" onClick={() => setCall(false)} />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        {
          step == 1 &&
          <>
            <span className="w-full text-xl sm:text-center font-bold">Schedule your free call <br /> with one our care managers to help you get started.</span>
            <span className="w-full text-sm sm:text-center mt-10">Quick question to get to know you. <br />What's your first name?</span>
          </>
        }
        {
          step == 2 &&
          <>
            <span className="w-full text-xl sm:text-center font-bold">Welcome, {info.firstName}</span>
            <span className="w-full text-sm sm:text-center mt-10">What's your last name?</span>
          </>
        }
        {
          step == 3 &&
          <>
            <span className="w-full text-xl sm:text-center font-bold">Welcome, {info.firstName} {info.lastName}</span>
            <span className="w-full text-sm sm:text-center mt-10">What's your phone number?</span>
          </>
        }
        {
          step == 4 &&
          <>
            <span className="w-full text-xl sm:text-center font-bold">Hi, {info.firstName} {info.lastName}</span>
            <span className="w-full text-sm sm:text-center mt-10">Let us know when is a good time to call you.</span>
          </>
        }

        {
          step <= 3 &&
          <input
            type={`${step == 1 || step == 2 ? "text" : "number"}`}
            placeholder={`${step == 1 ? "First Name" : step == 2 ? "Last Name" : step == 3 ? "Phone Number" : ""}`}
            className="w-full sm:w-60 h-12 pl-2 text-grayscale-white bg-transparent border border-grayscale-white rounded-md mt-10"
            value={`${step == 1 ? info.firstName ?? "" : step == 2 ? info.lastName ?? "" : info.phoneNumber ?? ""}`}
            onChange={(e) => onChangeInput(e)}
          />
        }

        {
          step == 4 &&
          <div className="w-full md:w-2/3 bg-grayscale-white mt-10 p-2">
            <div className="w-full h-full md:flex shadow-md rounded-md border p-4">
              <div id="left-box" className="hidden md:flex md:flex-col w-full md:w-1/2 md:border-r border-grayscale-60 pr-4">
                <div className="flex flex-col h-24 justify-center items-center border-b border-grayscale-60">
                  <span className="text-2xl text-primary-100 font-bold">Because</span>
                  <span className="text-md text-primary-100">Health</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-grayscale-80 mt-6">Pablo Chiquival</span>
                  <span className="text-xl text-grayscale-100 font-bold mt-2">Pablo Chiquival 1:1</span>
                  <div className="flex mt-6"><RiTimeFill className="text-grayscale-80" /><span className="text-xs text-grayscale-80 ml-1">30 min</span></div>
                  <div className="flex mt-4"><RiPhoneFill className="text-grayscale-80" /><span className="text-xs text-grayscale-80 ml-1">Phone call</span></div>
                  <span className="text-sm text-grayscale-80 mt-6">Because Health's COVID-19 testing and Workplace Health™ health services.</span>
                </div>
              </div>
              <div id="right-box" className="w-full md:w-1/2 mt-6 sm:mt-0 sm:pl-4">
                <span className="text-md text-grayscale-100 font-bold mt-2">Select a Date & Time</span>
                <div className="flex flex-col items-center mt-6">
                  <Calendar
                    value={selectedDay}
                    onChange={setSelectedDay}
                    colorPrimary="#264653"
                    calendarClassName="custom-calendar"
                    shouldHighlightWeekends
                  />
                  <div className="w-full flex justify-between">
                    <div className="w-1/2">
                      <TimezonePicker
                        absolute={true}
                        defaultValue={selectedTimezone}
                        placeholder="Select timezone..."
                        onChange={setSelectedTimezone}
                      />
                    </div>
                    <div className="w-1/2">
                      <SelectBox id="time-selector" options={times} selectedOption={selectedTime} setSelectedOption={setSelectedTime} height={35} placeholder="Time" backColor='transparent' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="flex justify-center">
          {
            step > 1 && step < 5 &&
            <button
              onClick={() => setStep(step - 1)}
            >
              <BiChevronLeftCircle className="w-8 h-8 text-grayscale-white mt-10 mx-2" />
            </button>
          }
          {
            step < 5 &&
            <button
              disabled={(step == 1 && !info.firstName) || (step == 2 && !info.lastName) || (step == 3 && !info.phoneNumber) || (step == 4 && (!info.date || !info.timezone || !info.time))}
              onClick={() => setStep(step + 1)}
            >
              <BiChevronRightCircle className="w-8 h-8 text-grayscale-white mt-10 mx-2" />
            </button>
          }
        </div>

        {
          step < 5 &&
          <>
            <div className="w-full sm:w-2/3 md:w-1/2 mt-10">
              <Line percent={step * 20} strokeColor="#F2CC8F" trailColor="#ffffff" />
            </div>
            <span className="w-full md:w-2/3 text-xs sm:text-center mt-10">We will never share your data with 3rd parties for marketing purposes. For more information about how Because Health, shares and protects your personal data, see our Privacy Policy.</span>
          </>
        }

        {
          step == 5 &&
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row">
            <div className="w-full order-2 md:order-1 flex flex-col justify-center sm:items-center md:items-start pr-6">
              <span className="text-xl text-grayscale-white font-bold mt-10">{info.firstName},<br />We'll contact you soon!</span>
              <span className="text-sm text-grayscale-white mt-4">Your free call request with one our care managers has been received.</span>
              <button className="btn btn-secondary w-52 h-12 uppercase mt-6" onClick={() => setCall(false)}>Return to the site</button>
            </div>
            <div className="w-full h-96 sm:h-72 md:h-96 order-1 md:order-2 bg-grayscale-60 rounded-md"></div>
          </div>
        }

      </div>
    </div>
  )
}

export default ScheduleCall

const times = [
  {
    label: '00:00',
    value: '00:00'
  },
  {
    label: '00:15',
    value: '00:15'
  },
  {
    label: '00:30',
    value: '00:30'
  },
  {
    label: '00:45',
    value: '00:45'
  },
  {
    label: '01:00',
    value: '01:00'
  },
  {
    label: '01:15',
    value: '01:15'
  },
  {
    label: '01:30',
    value: '01:30'
  },
  {
    label: '01:45',
    value: '01:45'
  },
  {
    label: '02:00',
    value: '02:00'
  },
  {
    label: '02:15',
    value: '02:15'
  },
  {
    label: '02:30',
    value: '02:30'
  },
  {
    label: '02:45',
    value: '02:45'
  },
  {
    label: '03:00',
    value: '03:00'
  },
  {
    label: '03:15',
    value: '03:15'
  },
  {
    label: '03:30',
    value: '03:30'
  },
  {
    label: '03:45',
    value: '03:45'
  },
  {
    label: '04:00',
    value: '04:00'
  },
  {
    label: '04:15',
    value: '04:15'
  },
  {
    label: '04:30',
    value: '04:30'
  },
  {
    label: '04:45',
    value: '04:45'
  },
  {
    label: '05:00',
    value: '05:00'
  },
  {
    label: '05:15',
    value: '05:15'
  },
  {
    label: '05:30',
    value: '05:30'
  },
  {
    label: '05:45',
    value: '05:45'
  },
  {
    label: '06:00',
    value: '06:00'
  },
  {
    label: '06:15',
    value: '06:15'
  },
  {
    label: '06:30',
    value: '06:30'
  },
  {
    label: '06:45',
    value: '06:45'
  },
  {
    label: '07:00',
    value: '07:00'
  },
  {
    label: '07:15',
    value: '07:15'
  },
  {
    label: '07:30',
    value: '07:30'
  },
  {
    label: '07:45',
    value: '07:45'
  },
  {
    label: '08:00',
    value: '08:00'
  },
  {
    label: '08:15',
    value: '08:15'
  },
  {
    label: '08:30',
    value: '08:30'
  },
  {
    label: '08:45',
    value: '08:45'
  },
  {
    label: '09:00',
    value: '09:00'
  },
  {
    label: '09:15',
    value: '09:15'
  },
  {
    label: '09:30',
    value: '09:30'
  },
  {
    label: '09:45',
    value: '09:45'
  },
  {
    label: '10:00',
    value: '10:00'
  },
  {
    label: '10:15',
    value: '10:15'
  },
  {
    label: '10:30',
    value: '10:30'
  },
  {
    label: '10:45',
    value: '10:45'
  },
  {
    label: '11:00',
    value: '11:00'
  },
  {
    label: '11:15',
    value: '11:15'
  },
  {
    label: '11:30',
    value: '11:30'
  },
  {
    label: '11:45',
    value: '11:45'
  },
  {
    label: '12:00',
    value: '12:00'
  },
  {
    label: '12:15',
    value: '12:15'
  },
  {
    label: '12:30',
    value: '12:30'
  },
  {
    label: '12:45',
    value: '12:45'
  },
  {
    label: '13:00',
    value: '13:00'
  },
  {
    label: '13:15',
    value: '13:15'
  },
  {
    label: '13:30',
    value: '13:30'
  },
  {
    label: '13:45',
    value: '13:45'
  },
  {
    label: '14:00',
    value: '14:00'
  },
  {
    label: '14:15',
    value: '14:15'
  },
  {
    label: '14:30',
    value: '14:30'
  },
  {
    label: '14:45',
    value: '14:45'
  },
  {
    label: '15:00',
    value: '15:00'
  },
  {
    label: '15:15',
    value: '15:15'
  },
  {
    label: '15:30',
    value: '15:30'
  },
  {
    label: '15:45',
    value: '15:45'
  },
  {
    label: '16:00',
    value: '16:00'
  },
  {
    label: '16:15',
    value: '16:15'
  },
  {
    label: '16:30',
    value: '16:30'
  },
  {
    label: '16:45',
    value: '16:45'
  },
  {
    label: '17:00',
    value: '17:00'
  },
  {
    label: '17:15',
    value: '17:15'
  },
  {
    label: '17:30',
    value: '17:30'
  },
  {
    label: '17:45',
    value: '17:45'
  },
  {
    label: '18:00',
    value: '18:00'
  },
  {
    label: '18:15',
    value: '18:15'
  },
  {
    label: '18:30',
    value: '18:30'
  },
  {
    label: '18:45',
    value: '18:45'
  },
  {
    label: '19:00',
    value: '19:00'
  },
  {
    label: '19:15',
    value: '19:15'
  },
  {
    label: '19:30',
    value: '19:30'
  },
  {
    label: '19:45',
    value: '19:45'
  },
  {
    label: '20:00',
    value: '20:00'
  },
  {
    label: '20:15',
    value: '20:15'
  },
  {
    label: '20:30',
    value: '20:30'
  },
  {
    label: '20:45',
    value: '20:45'
  },
  {
    label: '21:00',
    value: '21:00'
  },
  {
    label: '21:15',
    value: '21:15'
  },
  {
    label: '21:30',
    value: '21:30'
  },
  {
    label: '21:45',
    value: '21:45'
  },
  {
    label: '22:00',
    value: '22:00'
  },
  {
    label: '22:15',
    value: '22:15'
  },
  {
    label: '22:30',
    value: '22:30'
  },
  {
    label: '22:45',
    value: '22:45'
  },
  {
    label: '23:00',
    value: '23:00'
  },
  {
    label: '23:15',
    value: '23:15'
  },
  {
    label: '23:30',
    value: '23:30'
  },
  {
    label: '23:45',
    value: '23:45'
  }
]
