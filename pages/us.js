import React from "react"
import { useRouter } from "next/router"
import { BsCircleFill } from "react-icons/bs";

import Header from "components/Header"
import Footer from "components/Footer"
import BreadCrumb from "components/BreadCrumb"
import SelectBox from "components/SelectBox"

import Contact from "components/us/Contact"
import PrivacyPolicy from "components/us/PrivacyPolicy"

const TitleContainer = () => {
  return (
    <div className="px-6 md:px-36 flex flex-wrap">
      <div className="w-full sm:w-1/2 flex items-end mt-6">
        <span className="text-3xl font-bold">Customer Care</span>
      </div>
      <div className="w-full sm:w-1/2 flex items-end mt-6">
        <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </div>
  )
}

const ImgContainer = () => {
  const [imgContainerSize, setImgContainerSize] = React.useState();

  return (
    <div className="px-6 md:px-36 mt-10">
      <img src="/us/imgBack.png" className="" alt="img-back" style={{ width: '100%' }} />
    </div>
  )
}

const TabContainer = (props) => {
  return (
    <div>
      <div className="hidden sm:flex justify-center items-center bg-gray-200 h-12 mx-6 md:mx-36">
        {
          props.tabs.map((tab, index) => (
            <div key={index} className="relative flex flex-col items-center cursor-pointer mx-4" onClick={() => props.setSelectedTab(tab)}>
              <span className={`text-sm text-center ${tab.value === props.selectedTab.value ? 'text-primary-60 font-bold' : 'text-grayscale-100'}`}>{tab.label}</span>
              {
                tab.value === props.selectedTab.value &&
                <BsCircleFill className="absolute -bottom-3 w-1 text-primary-60" />
              }
            </div>
          ))
        }
      </div>
      <div className="sm:hidden p-6">
        <SelectBox id="tab-selector" options={props.tabs} selectedOption={props.selectedTab} setSelectedOption={props.setSelectedTab} backColor='transparent' />
      </div>
    </div>
  )
}

const Us = () => {
  const tabs = [
    {
      label: 'Contact',
      value: 'contact',
      component: Contact
    },
    {
      label: 'Privacy Policy',
      value: 'privacypolicy',
      component: PrivacyPolicy
    }
  ]
  const [selectedTab, setSelectedTab] = React.useState(tabs[0])

  return (
    <div>
      <Header theme="dark" />
      <BreadCrumb data={['Us', selectedTab.label]} />
      <TitleContainer />
      <ImgContainer />
      <TabContainer tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <selectedTab.component />
      <Footer />
    </div>
  )
}

export default Us