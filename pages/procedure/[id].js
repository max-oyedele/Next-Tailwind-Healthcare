import React, { useState } from "react"
import {useRouter} from "next/router"
import { BiCheck } from "react-icons/bi";
import { HiMinusSm } from "react-icons/hi";

import Header from "components/Header"
import Footer from "components/Footer"
import StarRating from "components/StarRating"
import SelectBox from "components/SelectBox"
import BreadCrumb from "components/BreadCrumb"
import FrequentQuestion from "components/FrequentQuestion"

const ProductContainer = () => {
  const passivePackages = [
    {
      appointment: '1 Appointment',
      price: 10,
      time: 20
    },
    {
      appointment: '2 Appointment',
      price: 20,
      time: 20
    },
    {
      appointment: '3 Appointment',
      price: 0,
      time: 20
    },
  ]

  const offices = [
    {
      id: 0,
      label: '15 Broad St. Lorem ipsum dolor sit',
      value: 'office1',
      packages: [
        {
          appointment: '1 Appointment',
          price: 10,
          time: 20
        },
        {
          appointment: '2 Appointment',
          price: 20,
          time: 20
        },
        {
          appointment: '3 Appointment',
          price: 0,
          time: 20
        },
      ]
    },
    {
      id: 1,
      label: 'office 2',
      value: 'office2',
      packages: [
        {
          appointment: '1 Appointment',
          price: 100,
          time: 25
        },
        {
          appointment: '2 Appointment',
          price: 200,
          time: 10
        },
        {
          appointment: '3 Appointment',
          price: 10,
          time: 25
        },
      ]
    },
    {
      id: 3,
      label: 'office 3',
      value: 'office3',
      packages: [
        {
          appointment: '1 Appointment',
          price: 15,
          time: 200
        },
        {
          appointment: '2 Appointment',
          price: 30,
          time: 25
        },
        {
          appointment: '3 Appointment',
          price: 11,
          time: 30
        },
      ]
    }
  ]
  const [selectedOffice, setSelectedOffice] = useState()

  const getFormatNumber = (number) => {
    if (isNaN(number)) return "-"
    const formatNumber = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(number) // '$100.00'
    return formatNumber
  }

  return (
    <div className="px-6 md:px-36 md:grid md:grid-cols-2 md:gap-x-16 mt-10">
      <div className="mt-6">
        <img src="/procedure/product.png" width="100%" alt="product" />
      </div>
      <div className="flex flex-col text-grayscale-100 mt-6">
        <span className="text-xl font-bold">Bold density DEXA scan</span>
        <span className="text-md mt-2">Protect your bones</span>
        <div className="mt-4">
          <StarRating />
        </div>
        <hr className="border-gray-300 my-4" />
        <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam morbiaenean sed uma massa quam. Sed consequat vitae, fusce diam sapien, phasellus. Turpis ultrices lectus et consequat. Scelerisque erat feugiat tortor imperdiet leo in. Ut mauris, orci, imperdiet est aliquam</span>
        <hr className="border-gray-300 my-4" />
        <span className="text-md">Choose your physician location:</span>
        <div className="mt-4">
          <SelectBox id="office-selector" options={offices} selectedOption={selectedOffice} setSelectedOption={setSelectedOffice} backColor='transparent' />
        </div>
        <hr className="border-gray-300 my-6" />
        <div id="add-cart-area">
          <span className={`text-sm ${selectedOffice ? 'text-gray-800' : 'text-gray-300'}`}>Save more with Multi-Packages:</span>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-3 mt-4">
            {
              !selectedOffice && passivePackages.map((item, index) => (
                <div key={index} className="flex flex-col border border-gray-300 rounded-md overflow-hidden p-2">
                  <span className="text-sm text-gray-300 font-bold">{item.appointment}</span>
                  <span className="text-sm text-gray-300 mt-4">{getFormatNumber(item.price)}</span>
                  <span className="text-sm text-gray-300 mt-4">{item.time} minutes</span>
                </div>
              ))
            }
            {
              selectedOffice?.packages?.map((item, index) => (
                <div key={index} className="flex flex-col border border-primary-70 rounded-md overflow-hidden p-2">
                  <span className="text-sm font-bold">{item.appointment}</span>
                  <span className="text-sm mt-4">{getFormatNumber(item.price)}</span>
                  <span className="text-sm mt-4">{item.time} minutes</span>
                </div>
              ))
            }
          </div>
          <button disabled={!selectedOffice} className="btn btn-primary w-full h-12 mt-6">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

const ProsConsContainer = () => {
  return (
    <div className="px-6 md:px-36 my-16 text-grayscale-100">
      <span className="text-2xl font-bold">What are the pros and cons of it</span>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
        <div className="bg-gray-100 flex flex-col mt-6 p-4">
          <span className="text-md font-bold">Pros</span>
          <div className="flex mt-4"><BiCheck /><span className="text-sm ml-1">Eliminates or minimizes wrinkles</span></div>
          <div className="flex mt-4"><BiCheck /><span className="text-sm ml-1">Results within 2-7days, with nearly 100% efficacy</span></div>
          <div className="flex mt-4"><BiCheck /><span className="text-sm ml-1">Convenient, with no downtime</span></div>
          <div className="flex mt-4"><BiCheck /><span className="text-sm ml-1">FDA-approved, with minimal health risks</span></div>
        </div>
        <div className="bg-gray-100 flex flex-col mt-6 p-4">
          <span className="text-md font-bold">Cons</span>
          <div className="flex mt-4"><HiMinusSm /><span className="text-sm ml-1">Eliminates or minimizes wrinkles</span></div>
          <div className="flex mt-4"><HiMinusSm /><span className="text-sm ml-1">Results within 2-7days, with nearly 100% efficacy</span></div>
          <div className="flex mt-4"><HiMinusSm /><span className="text-sm ml-1">Convenient, with no downtime</span></div>
          <div className="flex mt-4"><HiMinusSm /><span className="text-sm ml-1">FDA-approved, with minimal health risks</span></div>
        </div>
      </div>
    </div>
  )
}

const StepContainer = () => {
  const steps = [
    {
      step: 'step1',
      img: '/procedure/stepImg1.png',
      title: 'book your consultation',
      desc: 'Create an account to book online, or call for a consultation in person.'
    },
    {
      step: 'step2',
      img: '/procedure/stepImg2.png',
      title: 'discuss your goals',
      desc: 'Meet with a physician to discuss how much natural movement you would like to retain.'
    },
    {
      step: 'step3',
      img: '/procedure/stepImg3.png',
      title: 'Get your treatment',
      desc: 'Receive your personalized and preventative treatment. We prioritize maintaining your natural appearance.'
    }
  ]

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div className="px-6 md:px-36 my-16">
      <span className="text-2xl font-bold">Our Personalized Approach</span>
      <div className="sm:grid sm:grid-cols-3 sm:gap-x-4">
        {
          steps.map((step, index) => (
            <div key={index} className="bg-gray-100 flex flex-col p-4 rounded-md mt-6">
              <span className="text-sm font-bold uppercase underline" style={{ textDecorationColor: '#f2cc8f', textUnderlineOffset: 8 }}>{step.step}&nbsp;&nbsp;&nbsp;</span>
              <div className="bg-white flex justify-center items-center rounded-md h-36 mt-6">
                <img src={step.img} height="100%" alt="stepImg" />
              </div>
              <span className="text-md font-bold mt-6">{capitalize(step.title)}</span>
              <span className="text-sm mt-2">{capitalize(step.desc)}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const QuestionContainer = () => {
  const frequentQuestions = [
    {
      question: 'Who should take this?',
      answers: []
    },
    {
      question: 'Who should not take this?',
      answers: []
    },
    {
      question: 'Unusual and uncommon side effects',
      answers: []
    },
    {
      question: 'Who is a good candidate for it?',
      answers: []
    },
    {
      question: 'Are there any side effects?',
      answers: []
    },
  ]

  return (
    <FrequentQuestion data={frequentQuestions} />
  )
}

const OptionContainer = () => {
  const data = [
    {
      title: 'WoMEN',
      label: 'In-Person Consultation',
      img: '/procedure/optionImg1.png',
      subTitle: 'Botox',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'women',
      label: 'In-Person Consultation',
      img: '/procedure/optionImg2.png',
      subTitle: 'Bellafill',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    }
  ]

  return (
    <div className="px-6 md:px-36 my-16">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">Other treatment options</span>
        <span className="text-md mt-6">Find what's right for you.</span>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 sm:grid sm:grid-cols-2 sm:gap-x-6">
          {
            data.map((item, index) => (
              <div key={index} className="bg-gray-100 px-4 py-6 flex flex-col rounded-md mt-6">
                <span className="text-sm font-bold uppercase">{item.title}</span>
                <span className="text-xs mt-3">{item.label}</span>
                <div className="flex justify-center items-center rounded-sm mt-6">
                  <img src={item.img} alt={item.title} />
                </div>
                <span className="text-sm mt-6">{item.subTitle}</span>
                <span className="text-sm mt-4">{item.desc}</span>
                <span className="text-sm mt-10">{item.tag}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const DoctorContainer = () => {
  return (
    <div className="px-6 md:px-44 sm:grid sm:grid-cols-2 sm:gap-x-6">
      <img src="/detail/doctor.png" alt="doctor" />
      <div className="md:px-10 flex flex-col justify-center">
        <span className="text-xl font-bold mt-10">The Because Health difference</span>
        <span className="text-sm font-bold mt-6">Premium prescriptions on-demand</span>
        <span className="text-sm mt-4">Get access to exclusive treatments targeted to your needs and your body, all for less.</span>
        <span className="text-sm font-bold mt-6">Specialist access without the wait</span>
        <span className="text-sm mt-4">Don't wait to see a specialist. Connect with top physicians on your time, from anywhere.</span>
        <span className="text-sm font-bold mt-6">Scientifically-proven results</span>
        <span className="text-sm mt-4">Research-based treatments and targeted care for faster, more consistent results every time.</span>
        <span className="text-sm font-bold mt-6">Targeted testing and diagnoses</span>
        <span className="text-sm mt-4">Individualized diagnostics ensure you're getting the right treatment for your unique needs.</span>
      </div>
    </div>
  )
}

const MapContainer = () => {
  return (
    <div className="px-6 md:px-36 grid grid-rows-2 grid-y-4 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 mt-10">
      <div className="order-2 sm:order-1 flex flex-col justify-center pr-6 md:pr-16">
        <span className="text-xl font-bold mt-4">Complete care, where and when you need it</span>
        <span className="mt-6">Receive exceptional care, whether you're at home or on the go. We offer online treatments in 47 states - with virtual access opening soon in Nevada, Minnesota, and Mississippi. Our physical officers are in convenient locations across the US.</span>
        <button className="btn btn-primary w-48 h-12 my-6">Lorem ipsum dolors</button>
      </div>
      <div className="order-1 sm:order-2 mt-6">
        <img src="/home/map.png" width="100%" alt="map" />
      </div>
    </div>
  )
}

const ApiReviewContainer = () => {
  return (
    <div className="flex justify-center items-center h-72 sm:h-96 my-16">
      <span className="text-2xl font-bold">API Reviews</span>
    </div>
  )
}

const Procedure = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <div>
      <Header theme="dark" />
      <BreadCrumb data={['Procedure', id]}/>
      <ProductContainer />
      <ProsConsContainer />
      <StepContainer />
      <QuestionContainer />
      <OptionContainer />
      <DoctorContainer />
      <MapContainer />
      <ApiReviewContainer />
      <Footer />
    </div>
  )
}

export default Procedure