import { BiChevronDown, BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io"

import {useProvider} from "hooks/use-provider"

import Header from "components/Header"
import Footer from "components/Footer"

const LogoContainer = () => {
  return (
    <div className="relative w-full flex justify-end" style={{ background: 'linear-gradient(90deg, #699EB4 0%, #96d0ea 36.98%, #5F9DB6 100%)' }}>
      <img src="/home/logo.png" className="object-cover h-auto sm:h-96" alt="logo" />
      <div className="absolute w-full justify-center">
        <Header/>
      </div>
      <div className="absolute top-28 sm:top-40 left-6 sm:left-36">
        <span className="text-2xl sm:text-4xl text-white block">Personalized healthcare</span>
        <span className="text-2xl sm:text-4xl text-white block">looks good on you</span>
        <span className="text-xs text-white block mt-5">Safe and effective treatments, in person or online</span>
      </div>
      <div className="absolute bottom-0 w-full flex flex-col items-center text-white">
        <span className="text-xs">scroll to explore</span>
        <BiChevronDown className="text-3xl" />
      </div>
    </div>
  )
}

const LabelContainer = () => {
  return (
    <div className="hidden md:flex justify-center items-center md:space-x-8 lg:space-x-16 h-16 bg-gray-200 text-gray-800">
      <div className="flex flex-col items-center text-sm">
        <span>Vitamins</span>
        <span>& Supplements</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Mind, Brain</span>
        <span>& Neurologic</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Immune</span>
        <span>Support</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Insulin</span>
        <span>Resistance</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Performance</span>
        <span>& Physique</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Sexual</span>
        <span>Health</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Cosmetic</span>
        <span>Skincare</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Hair</span>
        <span>Restoration</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span>Weight</span>
        <span>Loss</span>
      </div>
    </div>
  )
}

const TitleContainer = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <span className="bock w-10/12 sm:w-6/12 md:w-4/12 text-center text-black text-2xl font-bold">Your goals are as unique as you are</span>
      <span className="block w-10/12 sm:w-9/12 md:w-6/12 text-center text-gray-700 text-sm mt-5">Because Health helps you optimize your body and mind using proven, physician-designed treatments to deliver ultra-personalized results.</span>
      <span className="block w-10/12 sm:w-10/12 md:w-8/12 text-center text-black text-4xl font-bold mt-8">Specialist care at your fingertips</span>
      <span className="block w-10/12 sm:w-10/12 md:w-8/12 text-center text-4xl font-bold mt-6 text-primary-70">Rx Online</span>
    </div>
  )
}

const BrandContainer = () => {
  return (
    <div className="sm:flex px-4 md:px-24 my-16">
      <div className="w-full sm:w-1/2">
        <img src="/home/brand.png" width="80%" alt="brand" className="hidden md:flex" />
        <img src="/home/brand.png" width="100%" alt="brand" className="md:hidden" />
      </div>
      <div className="w-full sm:w-1/2 px-5 py-5 flex flex-col justify-center">
        <span className="block text-black text-xl font-bold">Because Health works</span>

        <span className="block text-gray-900 text-sm font-bold mt-6">Preventive self-care</span>
        <span className="text-gray-700 text-sm mt-1">Take control of your health with online options that are available to you, wherever you are.</span>

        <span className="block text-gray-900 text-sm font-bold mt-6">The right treatment</span>
        <span className="text-gray-700 text-sm mt-1">Get premium prescriptions and services formulated for results, with a money-back guarantee.*</span>

        <span className="block text-gray-900 text-sm font-bold mt-6">Trusted physicians</span>
        <span className="text-gray-700 text-sm mt-1">Find information about procedures and assessments, such as cost, outcomes, and reviews.</span>

        <span className="block text-gray-900 text-sm font-bold mt-6">Private and personal</span>
        <span className="text-gray-700 text-sm mt-1">Prevent small issues from turning into bigger ones with a physician who really understands you.</span>
      </div>
    </div>
  )
}

const SlideContainer = () => {
  return (
    <div className="md:flex bg-gray-100 my-16">
      <div id="txt-part" className="relative w-full md:w-2/5 px-4 md:px-24 py-10">
        <span className="text-black text-xl font-bold">Jennier W.</span>
        <div id="left-right-icon" className="hidden sm:flex absolute top-10 right-1 sm:right-4 md:right-10">
          <BiChevronLeftCircle className="text-3xl mx-1 text-primary-70" />
          <BiChevronRightCircle className="text-3xl mx-1 text-primary-70" />
        </div>
        <div id="img-part-mobile" className="md:hidden w-full py-10 flex space-x-10 overflow-hidden">
          <img src="/home/jennifer.png" alt="jennifer" />
          <img src="/home/tompson.png" alt="tompson" />
          <img src="/home/tompson.png" alt="tompson" />
        </div>
        <div className="sm:flex">
          <div className="w-full sm:w-1/2 mt-4">
            <span className="block text-xs font-bold">Concerns</span>
            <span className="block text-xs">Lorem ipsum dolor sit amett</span>
          </div>
          <div className="w-full sm:w-1/2 sm:px-2 mt-4">
            <span className="block text-xs font-bold">Treatment</span>
            <span className="block text-xs">Lorem ipsum dolor sit amett</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs text-gray-800">"I was so nervous to address what I thought were embarrassing sexual issues, which is why I chose telehealth over an in-person doctor visit. I'm so glad I did! My Because Health physician immediately put me at ease by helping me understand just how common-and treatable-these issues are for women. It's been a month since I started treatment, and I'm feeling more confident than ever. Thank you!"</span>
        </div>
        <div className="flex mt-6">
          <span className="w-5 border rounded-full border-blue-700 bg-blue-700 mr-1"></span>
          <span className="w-5 border rounded-full border-blue-200 bg-blue-200 mr-1"></span>
          <span className="w-5 border rounded-full border-blue-200 bg-blue-200 mr-1"></span>
          <span className="w-5 border rounded-full border-blue-200 bg-blue-200 mr-1"></span>
          <span className="w-5 border rounded-full border-blue-200 bg-blue-200 mr-1"></span>
        </div>
      </div>

      <div id="img-part-pc" className="hidden md:flex md:w-3/5 pl-10 py-10 space-x-10 overflow-hidden">
        <img src="/home/jennifer.png" alt="jennifer" />
        <img src="/home/tompson.png" alt="tompson" />
        <img src="/home/tompson.png" alt="tompson" />
      </div>
    </div>
  )
}

const IntroContainer = () => {
  return (
    <div>
      <div className="sm:flex my-16">
        <div id="img-part" className="w-full md:w-1/2 px-6 md:px-24 mt-6">
          <div className="relative left-2">
            <img src="/home/intro_back.png" alt="intro_back" />
            <img src="/home/intro.png" alt="intro" className="absolute -top-5 -left-5" />
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-xs md:text-sm text-black font-bold">Marvin McKinney, MD - &nbsp;</span>
            <span className="text-xs md:text-sm text-gray-700"> Board Certified Plastic Surgeon</span>
          </div>
        </div>
        <div id="txt-part" className="w-full md:w-1/2 flex flex-col justify-center mt-6 pl-4 pr-4 md:pr-24">
          <span className="text-xl text-black font-bold">Improve your health</span>
          <span className="text-gray-800 mt-6">Partner with your chosen physician, virtually and in person. Because Health is designed and delivered by integrative physicians dedicated to helping you achieve optimal health.</span>

          <div id="brand-part-phone" className="sm:hidden mt-6">
            <div className="bg-gray-100">
              <div className="flex justify-center items-center h-10">
                <span className="block w-1/2 text-xs text-center text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/2 px-10"><img src="/home/harvard.png" alt="harvard" /></div>
                <div className="w-1/2 px-10"><img src="/home/stanford.png" alt="stanford" /></div>
              </div>
              <div className="flex w-full">
                <div className="w-1/2 px-10"><img src="/home/cleveland.png" alt="cleveland" /></div>
                <div className="w-1/2 px-10"><img src="/home/medicine.png" alt="medicine" /></div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary w-48 h-12 my-6">Lorem ipsum dolors</button>
        </div>
      </div>
      <div id="brand-part-pc-tablet" className="hidden sm:flex px-6 md:px-24 my-16">
        <div className="bg-gray-100 w-full">
          <div className="flex justify-center items-center h-10">
            <span className="block w-1/2 text-xs text-center text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className="flex">
            <div className="w-1/4 px-10"><img src="/home/harvard.png" alt="harvard" /></div>
            <div className="w-1/4 px-10"><img src="/home/stanford.png" alt="stanford" /></div>
            <div className="w-1/4 px-10"><img src="/home/cleveland.png" alt="cleveland" /></div>
            <div className="w-1/4 px-10"><img src="/home/medicine.png" alt="medicine" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MapContainer = () => {
  return (
    <div className="px-6 md:px-24 grid grid-rows-2 grid-y-4 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 mt-10">
      <div className="order-2 sm:order-1 flex flex-col justify-center pr-6 md:pr-16">
        <span className="text-xl text-black font-bold mt-4">Complete care, where and when you need it</span>
        <span className="text-gray-800 mt-6">Receive exceptional care, whether you're at home or on the go. We offer online treatments in 47 states - with virtual access opening soon in Nevada, Minnesota, and Mississippi. Our physical officers are in convenient locations across the US.</span>
        <button className="btn btn-primary w-48 h-12 my-6">Lorem ipsum dolors</button>
      </div>
      <div className="order-1 sm:order-2 sm:mt-6">
        <img src="/home/map.png" width="100%" alt="map" />
      </div>
    </div>
  )
}

const ToolContainer = () => {
  return (
    <div className="px-6 md:px-24 my-16">
      <div className="bg-gray-100 py-6">
        <div className="flex justify-center">
          <span className="text-xl text-black font-bold">Optimal health, virtually and in person</span>
        </div>
        <div className="sm:flex">
          <div className="w-full sm:w-1/3 flex flex-col items-center mt-10">
            <img src="/home/online.png" alt="online" />
            <span className="text-gray-900 mt-2">Online</span>
            <span className="block w-2/3 text-gray-700 text-center text-sm mt-2">Speak with a specialist physician about your specific concerns and get treatments without leaving your house.</span>
          </div>
          <div className="w-full sm:w-1/3 flex flex-col items-center mt-10">
            <img src="/home/in-person.png" alt="in-person" />
            <span className="text-gray-900 mt-2">In person</span>
            <span className="block w-2/3 text-gray-700 text-center text-sm mt-2">Partner with a board-certified physician in person to get advanced health assessments and specialist procedures near you.</span>
          </div>
          <div className="w-full sm:w-1/3 flex flex-col items-center mt-10">
            <img src="/home/testing.png" alt="testing" />
            <span className="text-gray-900 mt-2">Testing</span>
            <span className="block w-2/3 text-gray-700 text-center text-sm mt-2">Take advantage of convenient in-office labs or get comprehensive testing collected in the comfort of your home.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const StatContainer = () => {
  const {call, setCall} = useProvider()

  return (
    <div className="flex flex-col items-center my-16">
      <span className="block w-11/12 sm:w-1/3 text-xl text-center font-bold">A proven solution beyond telemedicine</span>
      <span className="block w-11/12 sm:w-1/2 text-sm text-center text-gray-800 mt-6">Unlike conventional primary care or typical telemedicine, our physicians use integrative medicine to treat chronic conditions. Treatments may include medications, creams, injections, nutritional modifications, and various specialist procedures. See for yourself how our approach can transform your health.</span>
      <div className="px-6 md:px-24 sm:flex sm:space-x-10">
        <div className="bg-gray-100 flex flex-col mt-10 p-6">
          <span className="text-3xl text-primary-70">74%<IoIosArrowRoundUp className="inline text-primary-70" /></span>
          <span className="text-sm text-black mt-2">Vitamin D</span>
          <span className="text-sm text-gray-800 mt-4">From a baseline average of 40 ng/mL, our patients generally experience a 69-74% increase to their vitamin D levels in 6 months (optimum vitamin D levels range from 50-80ng/mL).</span>
        </div>
        <div className="bg-gray-100 flex flex-col mt-10 p-6">
          <span className="text-3xl text-primary-70">23%<IoIosArrowRoundDown className="inline text-primary-70" /></span>
          <span className="text-sm text-black mt-2">Fasting Insulin</span>
          <span className="text-sm text-gray-800 mt-4">From a baseline average of 40 ng/mL, our patients generally experience a 69-74% increase to their vitamin D levels in 6 months (optimum vitamin D levels range from 50-80ng/mL).</span>
        </div>
        <div className="bg-gray-100 flex flex-col mt-10 p-6">
          <span className="text-3xl text-primary-70">12%<IoIosArrowRoundDown className="inline text-primary-70" /></span>
          <span className="text-sm text-black mt-2">HbA1c</span>
          <span className="text-sm text-gray-800 mt-4">From a baseline average of 40 ng/mL, our patients generally experience a 69-74% increase to their vitamin D levels in 6 months (optimum vitamin D levels range from 50-80ng/mL).</span>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary h-12" onClick={()=>setCall(true)}>Schedule Your Free Call</button>
      </div>
    </div>
  )
}

const ContentContainer = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <span className="block w-11/12 sm:w-1/3 text-xl text-center font-bold">Do you have healthcare content to keep me informed and motivated?</span>
      <span className="block w-11/12 sm:w-1/2 text-sm text-center text-gray-800 mt-6">Discover clinically-validated, easy-to-read articles that provide answers to your most pressing healthcare questions.</span>
      <div className="px-6 md:px-24 sm:flex sm:space-x-10">
        <div className="mt-10">
          <img src="/home/content1.png" alt="content1" width="100%" className="rounded-t-md" />
          <div className="bg-gray-100 flex flex-col p-3">
            <span className="text-sm text-gray-900 font-bold">Women's Health</span>
            <span className="text-xs text-gray-800 mt-2">Because Health launches Workplace Health COVID-19 testing services</span>
          </div>
        </div>
        <div className="mt-10">
          <img src="/home/content2.png" alt="content1" width="100%" className="rounded-t-md" />
          <div className="bg-gray-100 flex flex-col p-3">
            <span className="text-sm text-gray-900 font-bold">Women's Health</span>
            <span className="text-xs text-gray-800 mt-2">Because Health launches Workplace Health COVID-19 testing services</span>
          </div>
        </div>
        <div className="mt-10">
          <img src="/home/content3.png" alt="content1" width="100%" className="rounded-t-md" />
          <div className="bg-gray-100 flex flex-col p-3">
            <span className="text-sm text-gray-900 font-bold">Women's Health</span>
            <span className="text-xs text-gray-800 mt-2">Because Health launches Workplace Health COVID-19 testing services</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <LogoContainer />
      <LabelContainer />
      <TitleContainer />
      <BrandContainer />
      <SlideContainer />
      <IntroContainer />
      <MapContainer />
      <ToolContainer />
      <StatContainer />
      <ContentContainer />
      <Footer />
    </div>
  )
}

export default Home