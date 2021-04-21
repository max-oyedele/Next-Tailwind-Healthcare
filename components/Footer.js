import React from "react"

import SelectBox from "components/SelectBox"

export default function Footer() {
  const newsletters = [
    {
      label: 'I\'m interested in',
      value: 'interested'
    },
    {
      label: 'Healthcare',
      value: 'healthcare'
    },
    {
      label: 'Doctor',
      value: 'doctor'
    }
  ]
  const [selectedNewsletter, setSelectedNewsletter] = React.useState(newsletters[0])

  return (
    <div className="bg-grayscale-background px-6 py-10 lg:px-40">
      <div className="flex flex-col items-center">
        <span className="text-3xl text-grayscale-100 font-bold">BECAUSE YOU MATTER</span>
        <span className="text-sm text-grayscale-80 mt-4">Begin your journey toward whole health today</span>
        <button className="btn btn-primary h-10 text-sm uppercase mt-6">Schedule Your Free Call</button>
      </div>

      <div className="sm:flex sm:flex-col md:grid md:grid-cols-3 mt-6">
        <div id="contact-us" className="flex flex-col order-first mt-10">
          <span className="text-md text-grayscale-80">Contact Us</span>
          <div className="sm:grid sm:grid-cols-3 sm:gap-x-4 md:flex md:flex-col">
            <div className="flex flex-col mt-6">
              <span className="text-md text-grayscale-100 font-bold">Customer Care</span>
              <span className="text-sm text-grayscale-80 mt-4">+1 206-751-1321</span>
              <span className="text-sm text-grayscale-80 mt-4">care@becausehealth.com</span>
            </div>
            <div className="flex flex-col mt-6">
              <span className="text-md text-grayscale-100 font-bold">To Book a Program</span>
              <span className="text-sm text-grayscale-80 mt-4">+1 206-821-3115</span>
              <span className="text-sm text-grayscale-80 mt-4">reservation@becausehealth.com</span>
            </div>
          </div>
          <button className="link text-sm mt-6">Use our Form to Contact Us {'>'}</button>
        </div>
        <div id="learn" className="flex flex-col sm:order-3 md:order-2 mt-10">
          <hr className="md:hidden border-grayscale-80 mb-10" />
          <div className="sm:grid sm:grid-cols-3 sm:gap-x-4 md:flex md:flex-col">
            <div className="flex flex-col sm:order-2 md:order-1">
              <span className="text-md text-grayscale-80">Learn</span>
              <span className="text-sm text-grayscale-80 mt-4">Blog</span>
            </div>
            <div className="flex flex-col sm:order-1 md:order-2 mt-6 sm:mt-0 md:mt-6 ">
              <span className="text-md text-grayscale-80">About Because Health</span>
              <span className="text-sm text-grayscale-80 mt-4">Legal Terms</span>
              <span className="text-sm text-grayscale-80 mt-4">Privacy Policy</span>
              <span className="text-sm text-grayscale-80 mt-4">Privacy Practices</span>
              <span className="text-sm text-grayscale-80 mt-4">Telehealth Consent</span>
              <span className="text-sm text-grayscale-80 mt-4">Site Map</span>
            </div>
          </div>
        </div>
        <div id="newsletter" className="flex flex-col sm:order-2 md:order-3 mt-10">
          <hr className="md:hidden border-grayscale-80 mb-10" />
          <span className="text-md text-grayscale-80">Newsletter Signup</span>
          <span className="text-sm text-grayscale-80 mt-4">Sign up for your personalized monthly newsletter.</span>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 md:flex md:flex-col">
            <div className="flex flex-col mt-6">
              <SelectBox options={newsletters} selectedOption={selectedNewsletter} setSelectedOption={setSelectedNewsletter} backColor='transparent' />
            </div>
            <div id="email-container" className="flex h-12 border border-grayscale-80 rounded-md mt-6 p-1">
              <input placeholder="Email address" className="w-3/4 pl-2 text-grayscale-80 bg-transparent" />
              <button className="btn w-1/4 text-sm text-grayscale-80 border border-grayscale-80 uppercase">Register</button>
            </div>
          </div>
          <span className="text-xs text-grayscale-80 mt-4">By subscribing to our newsletter, you are agreeing to our Data Protection Statement.</span>
        </div>
      </div>

      <hr className="border-grayscale-80 my-10" />

      <div className="flex flex-col">
        <span className="text-md text-grayscale-80">Popular Treatments</span>
        <div className="sm:grid sm:grid-cols-3">
          <div className="flex flex-col mt-6">
            <span className="text-sm text-grayscale-80">Women</span>
            <span className="text-xs text-grayscale-80 mt-4">Cosmetic injectables</span>
            <span className="text-xs text-grayscale-80 mt-4">Vaginal rejuvenation</span>
            <span className="text-xs text-grayscale-80 mt-4">Weight loss</span>
          </div>
          <div className="flex flex-col mt-6">
            <span className="text-sm text-grayscale-80">Men</span>
            <span className="text-xs text-grayscale-80 mt-4">Fitness recovery</span>
            <span className="text-xs text-grayscale-80 mt-4">Muscle development</span>
            <span className="text-xs text-grayscale-80 mt-4">FUE hair transplant</span>
          </div>
          <div className="flex flex-col mt-6">
            <span className="text-sm text-grayscale-80">Prescription</span>
            <span className="text-xs text-grayscale-80 mt-4">Men's sex health</span>
            <span className="text-xs text-grayscale-80 mt-4">Womens's sex health</span>
            <span className="text-xs text-grayscale-80 mt-4">CBD treatments</span>
          </div>
        </div>
      </div>

      <hr className="border-grayscale-80 my-10" />

      <div className="md:flex md:justify-between md:items-center">
        <div className="flex">
          <button><img src="/icons/facebook-gray.svg" className="" alt="facebook" /></button>
          <button><img src="/icons/instagram-gray.svg" className="ml-2" alt="instagram" /></button>
          <button><img src="/icons/twitter-gray.svg" className="ml-2" alt="twitter" /></button>
          <button><img src="/icons/youtube-gray.svg" className="ml-2" alt="youtube" /></button>
          <button><img src="/icons/linkedin-gray.svg" className="ml-2" alt="linkedin" /></button>
        </div>
        <span className="block text-xs text-grayscale-80 mt-6 md:mt-0">@Copyright @2021 Because Health. All rights reserved.</span>
      </div>
    </div>
  )
}
