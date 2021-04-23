import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { BsCircleFill } from "react-icons/bs"
import { BiX } from "react-icons/bi"

import Header from "components/Header"
import Footer from "components/Footer"
import StarRating from "components/StarRating"
import BreadCrumb from "components/BreadCrumb"
import FrequentQuestion from "components/FrequentQuestion"

const DetailContainer = (props) => {
  return (
    <div className="px-6 md:px-36 md:grid md:grid-cols-2 md:gap-x-10 mt-6">
      <div className="bg-gray-100 flex justify-center items-center mt-10" style={{ height: 500 }}>
        <img src="/detail/product.png" alt="product" />
      </div>
      <div className="mt-10 flex flex-col text-grayscale-100">
        <span className="text-lg font-bold">Awaken Nasal Spray</span>
        <span className="text-sm mt-2">For increased sexual desire</span>
        <div className="mt-4">
          <StarRating />
        </div>
        <span className="text-md font-bold mt-6">Starting at $160 / month</span>
        <span className="text-sm mt-2">(plan selected during checkout)</span>
        <button className="link text-md mt-4" onClick={() => props.setPlanLayer(true)}>See plan options {'>'}</button>
        <span className="text-sm mt-6">Enhanced with the powerful peptide,  Bremelanotide, Awaken Nasal Spray is a natural boost for your lagging sex drive. In minutes, you'll be better aroused and ready for everything that comes next.</span>
        <div className="flex items-center mt-6">
          <BsCircleFill className="w-2 " />
          <span className="text-sm ml-2">Clinically proven treatment for increased sexual desire</span>
        </div>
        <div className="flex items-center mt-6">
          <BsCircleFill className="w-2 " />
          <span className="text-sm ml-2">Puts control back in your hands, when you want it</span>
        </div>
        <div className="flex items-center mt-6">
          <BsCircleFill className="w-2 " />
          <span className="text-sm ml-2">Take as needed without any alcohol restrictions</span>
        </div>
        <div className="flex items-center mt-6">
          <BsCircleFill className="w-2 " />
          <span className="text-sm ml-2">FDA approved to treat HSDD</span>
        </div>
        <button className="btn btn-primary w-full h-10 mt-6">Start Online Visit</button>
        <button disabled className="btn btn-primary w-full h-10 mt-6">Doctor prescribed | Cancel anytime</button>
        <div className="flex justify-center mt-6">
          <span className="block w-11/12 text-xs text-center">*Prescription products require an online medical visit to determine if medication is right for you. You will only be billed if approved.</span>
        </div>
        <img src="/detail/woman.png" className="mt-10" width="100%" alt="woman" />
        <span className="text-xl font-bold mt-10">A solution you can rely on</span>
        <span className="text-md font-bold mt-6">How it works</span>
        <span className="text-sm mt-4">This powerful spray helps restore the chemical balance that leads to sexual excitement -- and can keep working for up to 18 hours. An easy-to-use, on-demand treatment, this spray sends a chemical signal to your bracin that triggers sexual desire. It works as-needed to amp up your sex drive quickly and easily, with no side effects and no lag.</span>
        <span className="text-md font-bold mt-6">How to use</span>
        <span className="text-sm mt-4">Spray one puff of Awaken Nasal Spray in each nostril 30-60 minutes prior to sexual activity.</span>
        <span className="text-md font-bold mt-6">Active ingredients</span>
        <span className="text-sm mt-4">Bremelanotide(PT-141)/2 ml</span>
        <span className="text-sm mt-2">A self-administered peptide, one injection of Bremelanotide improves sexual arousal for up to 18 hour.</span>
        <button className="link text-md mt-4">Important safety information {'>'}</button>
      </div>
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className="flex flex-col items-center my-16" style={{ backgroundColor: '#e4eff3' }}>
      <span className="block w-11/12 sm:1/2 text-3xl text-center font-bold mt-10">Find balance with at-home lab testing</span>
      <span className="block w-11/12 sm:w-1/2 text-md text-center mt-6">Hormones play a role in your overall health, and only blood work reveals the full picture. Choose a plan with an advanced, hormone test to ensure your doses are just what your body needs. Review results with your specialist and get a personalized plan. Because there's no one-size-fits-all in health.</span>
      <span className="block w-11/12 sm:w-1/2 text-md text-center mt-4">* At-home lab test ships with order to your door</span>
      <button className="link text-md my-6">See plan options {'>'}</button>
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
      label: 'Online RX Consultation Required',
      img: '/detail/cream1.png',
      subTitle: 'Enhance Cream',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WoMEN',
      label: 'Online RX Consultation Required',
      img: '/detail/cream2.png',
      subTitle: 'Replesh Cream',
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
              <div key={index} className="bg-gray-100 px-4 py-6 flex flex-col rounded-sm mt-6">
                <span className="text-sm font-bold uppercase">{item.title}</span>
                <span className="text-xs mt-3">{item.label}</span>
                <div className="bg-white flex justify-center items-center rounded-sm mt-6">
                  <img src={item.img} className="object-cover w-full h-full" alt={item.title} />
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

const ApiReviewContainer = () => {
  return (
    <div className="flex justify-center items-center h-72 sm:h-96 my-16">
      <span className="text-2xl font-bold">API Reviews</span>
    </div>
  )
}

const PlanOptionLayer = (props) => {
  const data = [
    {
      type: 'only',
      title: 'Prescription Treatment Only',
      price: '160',
      desc: 'Option to add an at-home hormone test for an additional, one-time cost of $20.'
    },
    {
      type: 'plus',
      title: 'Prescription Treatment + Doctor Consults + Hormone Test',
      price: '229',
      desc: 'Includes an at-home hormone lab test and a monthly visit with your specialist physician.'
    },
  ]

  return (
    <div className="fixed inset-0">
      <div className="bg-gray-100 w-full h-full opacity-60"></div>
      <div className="absolute inset-0 flex justify-end">
        <div className="bg-gray-300 w-full sm:w-2/3 md:w-1/3 p-10">
          <BiX className="text-2xl cursor-pointer" onClick={() => props.setOpen(false)} />
          <div className="h-full flex flex-col justify-center">
            <span className="text-2xl font-bold">Plan Options</span>
            <span className="text-sm mt-10">We offer two subscription plans. Choose your preferred option during checkout.</span>
            {
              data.map((item, index) => (
                <div key={index} className="bg-white p-2 flex flex-col mt-10">
                  <span className="text-md font-bold">{item.title}</span>
                  <span className="text-md mt-2">${item.price} / month</span>
                  <span className="text-xs mt-4">{item.desc}</span>
                </div>
              ))
            }
            <div className="flex flex-col items-center mt-10">
              <span className="text-sm">Free shipping on all orders over $75.</span>
              <span className="text-sm mt-4">Automatic Recurring Delivery. Cancel Anytime</span>
            </div>
            <div className="flex justify-center mt-10">
              <button className="btn btn-primary w-44 h-12">Got it</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  const [planLayer, setPlanLayer] = useState(false)

  return (
    <div>
      <Header theme="dark" />
      <BreadCrumb data={['Detail', id]} />
      <DetailContainer setPlanLayer={setPlanLayer} />
      <TextContainer />
      <QuestionContainer />
      <OptionContainer />
      <DoctorContainer />
      <ApiReviewContainer />
      <Footer />
      {
        planLayer &&
        <PlanOptionLayer setOpen={setPlanLayer} />
      }
    </div>
  )
}

export default Detail