import React from "react"
import { BiChevronDownCircle } from "react-icons/bi"

import Header from "components/Header"
import Footer from "components/Footer"
import BreadCrumb from "components/BreadCrumb"
import FrequentQuestion from "components/FrequentQuestion"

const Membership = () => {
  return (
    <div>
      <Header theme="dark" />
      <BreadCrumb data={['Home', 'One', 'Two']} />
      <TitleContainer />
      <HolisticContainer />
      <CompromiseContainer />
      <GridContainer />
      <FormContainer />
      <QuestionContainer />
      <Footer />
    </div>
  )
}

const TitleContainer = () => {
  return (
    <div className="h-96 flex flex-col justify-center items-center bg-success-5 my-6 px-6 md:px-36">
      <span className="text-sm text-grayscale-100">PRIVATE MEMBERSHIP</span>
      <span className="text-4xl text-center text-grayscale-100 font-bold mt-6">Life lived differently, <br /> because health</span>
      <BiChevronDownCircle className="w-7 h-7 text-grayscale-80 mt-10" />
    </div>
  )
}

const HolisticContainer = () => {
  return (
    <div className="flex flex-col items-center my-16 px-6 md:px-36">
      <span className="text-sm text-primary-100">A HOLISTIC APPROACH TO YOUR HEALTH</span>
      <span className="block md:w-1/2 lg:w-2/3 text-3xl text-center text-grayscale-100 mt-6">Experience lasting results and ongoing benefits</span>
      <span className="block md:w-2/3 lg:w-3/4 text-sm sm:text-center text-grayscale-100 mt-6">Your Because Health private membership makes it faster and easier to achieve your health goals. <br /> We've created a membership-based holistic healthcare truly designed around our patient's needs. Partner with our specialist physicians for healthcare that is integrated, proactive and personalized to address the root cause of your symptoms.</span>
      <div className="w-full md:w-2/3 lg:w-3/4 bg-grayscale-60 h-72 rounded-md mt-6"></div>
    </div>
  )
}

const CompromiseContainer = () => {
  const data = [
    {
      title: 'Diagnostics',
      subTitle: 'Detailed evaluation with ultrasound, body scans and labs',
      desc1: 'CIMT for arterial plaque',
      desc2: 'Labwork for whole health',
      desc3: 'Scans for optional performance'
    },
    {
      title: 'Trusted Partner',
      subTitle: 'One-to-One, personalized care from your specialist doctor',
      desc1: 'In-person, virtual and at home care',
      desc2: 'Progress towards health goals',
      desc3: 'Proactive wellness plan'
    },
    {
      title: 'Sophisticated Access',
      subTitle: '360° access to assessments, treatments, and services, wherever you are',
      desc1: 'Sensors for remote telehealth exams',
      desc2: 'Refresh labs and scans routinely',
      desc3: 'Evidence-based treatments'
    }
  ]

  return (
    <div className="flex flex-col items-center my-16 px-6 md:px-36">
      <span className="text-sm text-primary-100">COMPROMISE-FREE CARE</span>
      <span className="block md:w-1/2 lg:w-2/3 text-3xl text-center text-grayscale-100 mt-6">A transformative experience</span>
      <span className="block md:w-2/3 lg:w-3/4 text-sm sm:text-center text-grayscale-100 mt-6">A doctor focused on helping you reach your health and wellness goals, and not just checking for cholesterol, diabetes and blood pressure.</span>
      <div className="relative w-full mt-6">
        <div id="backbox-pc" className="w-full hidden md:flex items-center md:px-12" style={{ height: 1230 }}>
          <div className="w-full" style={{ height: 880, background: 'linear-gradient(90deg, #CFD9DF 0%, #E2EBF0 100%)' }}></div>
        </div>
        <div id="backbox-tablet-phone" className="w-screen md:hidden flex items-center -mx-6" style={{ height: 1650 }}>
          <div className="w-full" style={{ height: 1430, background: 'linear-gradient(90deg, #CFD9DF 0%, #E2EBF0 100%)' }}></div>
        </div>
        <div id="top-layer" className="absolute inset-0 flex flex-col">
          {
            data.map((item, index) => (
              <div key={index} className={`w-full md:flex items-center ${index > 0 && 'mt-10'}`}>
                <div className={`${index % 2 == 0 ? 'md:order-1 md:mr-4' : 'md:order-2 md:ml-4'} w-full md:w-2/3 h-72 sm:h-80 md:h-96 bg-grayscale-60 rounded-md`}></div>
                <div className={`${index % 2 == 0 ? 'md:order-2' : 'md:order-1'} w-full md:w-1/3 max-h-72 sm:max-h-80 md:max-h-96 flex flex-col bg-grayscale-background rounded-md my-4 p-4`}>
                  <span className="text-xl text-grayscale-100">{item.title}</span>
                  <span className="text-xs text-grayscale-100 font-bold mt-2">{item.subTitle}</span>
                  <span className="text-md text-grayscale-100 mt-2">{item.desc1}</span>
                  <span className="text-md text-grayscale-100 mt-2">{item.desc2}</span>
                  <span className="text-md text-grayscale-100 mt-2">{item.desc3}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const GridContainer = () => {
  const data = [
    {
      title: 'Quarterly Labs and Treatments',
      subTitle: 'Quarterly Labs',
      desc: 'Your doctor spends time reviewing your health data, counsels you on potential risks and opportunities, and customizes prescription supplements for health optimization.'
    },
    {
      title: 'Access All Locations',
      subTitle: 'Private Access',
      desc: 'Access our nationwide locations with Because Health membership. Each visit includes a body composition scan that tracks progress and continues with care personalized to you.'
    },
    {
      title: 'Beyond Primary Care',
      subTitle: 'Modern Care',
      desc: 'Whether you have insurance or not, you pay the same fee for care at Because Health. Our modern care model is focused on you, so we don\'t bill insurance.'
    },
    {
      title: 'Advanced Telehealth Exams',
      subTitle: 'Virtual Exams',
      desc: 'Stay connected between in-person visits through telehealth consults that capture the same vitals as an in-person medical exam.'
    },
    {
      title: 'Curated Programming',
      subTitle: 'Insider Information',
      desc: 'Listen to learning industry experts, including monthly workshops, educational seminars and social mixers.'
    },
    {
      title: 'Membership From Anywhere',
      subTitle: 'Because Health',
      desc: 'Connect with your new doctor, to begin an incredible difference in your health.'
    }
  ]

  return (
    <div className="flex flex-col items-center my-16 px-6 md:px-36">
      <span className="text-sm text-primary-100">PRIVATE MEMBERSHIP</span>
      <span className="block md:w-1/2 lg:w-2/3 text-3xl text-center text-grayscale-100 mt-6">Membership offers you the best way to beat the odds</span>
      <span className="block md:w-2/3 lg:w-3/4 text-sm sm:text-center text-grayscale-100 mt-6">The in-depth data we obtain about your body and health enables you a chance to proactively avoid disease.</span>
      <div className="relative w-full mt-6">
        <div id="grid-backbox-pc" className="w-full hidden md:flex items-center md:px-12" style={{ height: 730 }}>
          <div className="w-full bg-category-weightloss" style={{ height: 500 }}></div>
        </div>
        <div id="grid-backbox-tablet" className="w-screen hidden md:hidden sm:flex items-center -mx-6" style={{ height: 1050 }}>
          <div className="w-full bg-category-weightloss" style={{ height: 820 }}></div>
        </div>
        <div id="grid-backbox-phone" className="w-screen sm:hidden flex items-center -mx-6" style={{ height: 2150 }}>
          <div className="w-full bg-category-weightloss" style={{ height: 1820 }}></div>
        </div>
        <div id="grid-top-layer" className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 sm:gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
          {
            data.map((item, index) => (
              <div key={index} className="flex flex-col bg-grayscale-background rounded-md p-4">
                <span className="text-xs text-primary-60 uppercase">{item.title}</span>
                <div className="bg-grayscale-60 h-44 rounded-md mt-4"></div>
                <span className="text-md text-grayscale-100 font-bold mt-4">{item.subTitle}</span>
                <span className="text-xs text-grayscale-100 mt-4">{item.desc}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const FormContainer = () => {
  return (
    <div className="flex flex-col my-16">
      <div className="w-full h-72 sm:h-80 md:96 bg-grayscale-60"></div>
      <div className="w-full flex px-6 md:px-36 py-6 bg-success-5">
        <div className="hidden w-full md:flex bg-grayscale-60"></div>
        <div className="w-full flex flex-col bg-grayscale-white p-6">
          <span className="text-xl text-grayscale-100 font-bold">Members get more</span>
          <span className="text-sm text-grayscale-100 mt-4">Enter your email to receive more info on Membership.</span>
          <input placeholder="Email address" className="w-3/4 h-12 pl-2 text-grayscale-100 bg-transparent border border-grayscale-80 rounded-md mt-6" />
          <span className="text-xs text-grayscale-80 mt-2">For more about how we use your information, see our Privacy Policy</span>
          <button className="btn btn-primary w-32 h-12 mt-10">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

const QuestionContainer = () => {
  const frequentQuestions = [
    {
      question: 'Do I always work with the same doctor?',
      answers: []
    },
    {
      question: 'Where do I get my blood tests completed?',
      answers: []
    },
    {
      question: 'Does Because Health have imaging, scans, genetic testing, and sensors?',
      answers: []
    },
    {
      question: 'How does Because Health work with prescriptions and supplements?',
      answers: []
    },
    {
      question: 'Is there a membership commitment?',
      answers: []
    },
    {
      question: 'Where is Because Health\'s membership available?',
      answers: []
    }
  ]

  return (
    <div className="my-10">
      <FrequentQuestion data={frequentQuestions}/>
    </div>
  )
}

export default Membership