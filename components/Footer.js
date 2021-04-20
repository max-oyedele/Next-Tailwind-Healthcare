import { BiChevronRight } from "react-icons/bi";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-toneblue-dark px-6 py-10 md:px-40">
      <div className="flex flex-col items-center">
        <span className="text-3xl text-white font-bold">BECAUSE YOU MATTER</span>
        <span className="text-sm text-white mt-4">Begin your journey toward whole health today</span>
        <button className="w-44 h-10 flex justify-center items-center text-gray-900 rounded-md bg-toneyellow-light hover:bg-toneyellow-dark mt-6">Schedule Your Free Call</button>
      </div>
      <div className="sm:flex">
        <div className="w-full sm:w-1/2 flex flex-col mt-16">
          <span className="text-md text-white font-bold">Complete Care Program</span>
          <span className="text-sm text-white mt-6">The right direction for you.</span>
          <span className="text-xs text-gray-300 mt-4">The correct diagnosis. The best treatment.</span>
          <span className="text-sm text-white mt-6">Learn More <BiChevronRight className="inline" /></span>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col mt-16">
          <span className="text-sm text-white font-bold">Newsletter Signup</span>
          <span className="text-xs text-gray-300 mt-4">Sign up for your personalized monthly newsletter.</span>
          <div id="email-container" className="w-full sm:w-3/4 h-12 flex border border-white rounded-md mt-4 p-1">
            <input placeholder="Email address" className="w-3/4 pl-2 text-white bg-transparent" />
            <button className="w-1/4 flex justify-center items-center text-sm text-gray-900 rounded-md bg-white hover:bg-gray-300">Register</button>
          </div>
          <span className="block w-full sm:w-3/4 text-xs text-gray-300 mt-4">By subscribing to our newsletter, you are agreeing to our Data Protection Statement</span>
        </div>
      </div>
      <div className="sm:flex mt-10">
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Live chat</span>
          <span className="text-xs text-gray-300 mt-4">Talk to Us</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">888-217-1047</span>
          <span className="text-xs text-gray-300 mt-4">Mon to Fri 9:00AM to 5:30PM (PST)</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Contact form</span>
          <span className="text-xs text-gray-300 mt-4">Submit Here</span>
        </div>
      </div>
      <hr className="mt-10 mb-4 border-gray-400" />
      <div className="sm:flex">
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">About Us</span>
          <span className="text-xs text-gray-300 mt-4">Privacy Agreement</span>
          <span className="text-xs text-gray-300 mt-4">Site Map</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Customer Service</span>
          <span className="text-xs text-gray-300 mt-4">Help Center</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Community</span>
          <span className="text-xs text-gray-300 mt-4">Blog</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Social Media</span>
          <span className="text-xs text-gray-300 mt-4"><FiInstagram className="inline mr-1" />Instagram</span>
          <span className="text-xs text-gray-300 mt-4"><FiFacebook className="inline mr-1" /> Facebook</span>
          <span className="text-xs text-gray-300 mt-4"><FiTwitter className="inline mr-1" /> Twitter</span>
        </div>
      </div>
      <hr className="mt-10 mb-4 border-gray-400" />
      <div className="sm:flex">
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">For Women</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">For Men</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
        </div>
        <div className="sm:w-1/4 flex flex-col mt-6">
          <span className="text-sm text-white font-bold">Prescriptions</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
          <span className="text-xs text-gray-300 mt-4">Lorem ipsum</span>
        </div>
      </div>
      <hr className="mt-10 mb-4 border-gray-400" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-3xl text-white">Because</span>
          <span className="text-sm text-gray-300">Health</span>
        </div>
        <span className="text-sm text-gray-300">@Because Health 2021</span>
      </div>
    </div>
  )
}
