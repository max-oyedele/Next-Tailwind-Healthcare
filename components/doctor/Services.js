import React from "react"
import { BiSlider, BiX } from "react-icons/bi"
import Paginate from "components/Paginate"

const ThumbContainer = () => {
  const data = [
    {
      name: 'Women',
      img: '/doctor/thumb.png'
    },
    {
      name: 'Lorem ipsum',
      img: '/doctor/thumb.png'
    },
    {
      name: 'Women',
      img: '/doctor/thumb.png'
    },
    {
      name: 'Women',
      img: '/doctor/thumb.png'
    },
    {
      name: 'Lorem ipsum',
      img: '/doctor/thumb.png'
    }
  ]

  return (
    <div className="hidden lg:flex lg:flex-col my-6">
      <hr className="border-gray-300" />
      <div className="px-6 lg:px-36 mt-4">
        <div className="w-full grid grid-cols-5 gap-x-4">
          {
            data.map((item, index) => (
              <div className="relative h-12 rounded-md cursor-pointer">
                <img src={item.img} className="absolute inset-0" className="object-cover w-full h-full rounded-md" alt={item.name} />
                <button className="btn btn-product absolute inset-0 w-full h-full">{item.name}</button>
              </div>
            ))
          }
        </div>
      </div>
      <hr className="border-gray-300 mt-4" />
    </div>
  )
}

const BodyContainer = (props) => {
  const tags = [
    {
      name: 'All Gender',
      count: 2
    },
    {
      name: 'Health Needs',
      count: 1
    },
    {
      name: 'Form',
      count: 2
    },
    {
      name: 'Online',
      count: 0
    }
  ]

  const data = [
    {
      title: 'Women',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg1.png',
      subTitle: 'Botox',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WoMen',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg2.png',
      subTitle: 'Bone density DEXA scan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMEN',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg3.png',
      subTitle: 'Chemical Peel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMen',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg4.png',
      subTitle: 'Dermaplaning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'Women',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg5.png',
      subTitle: 'Dysport',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMeN',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg6.png',
      subTitle: 'InstaLift',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMeN',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg7.png',
      subTitle: 'Exosome "frozen" facial',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMeN',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg8.png',
      subTitle: 'Hydrafacial',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMeN',
      label: 'In-Person Consultation',
      img: '/doctor/serviceImg9.png',
      subTitle: 'Vampire Facial',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
  ]

  return (
    <div className="px-6 md:px-10 md:flex mt-6">
      <div className="w-full md:w-1/4 md:pr-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold">{data.length} Results</span>
          <div className="sm:hidden">
            <button onClick={() => props.setFilterLayer(true)} className="btn h-8 text-sm text-gray-800 border border-gray-800">FILTER<BiSlider className="ml-3" /></button>
          </div>
        </div>
        <hr className="hidden sm:block border-gray-300 my-4" />
        <div id="results-part" className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-24 md:block">
          {
            tags.map((tag, index) => (
              <div key={index}>
                <div className="flex items-center">
                  {/* <input id={`${tag.name}`} type="checkbox" className="cursor-pointer" /> */}
                  <label htmlFor="articles" className="text-xs text-gray-900 cursor-pointer ml-1">{tag.name} ({tag.count})</label>
                </div>
                <hr className="border-gray-300 my-4" />
              </div>
            ))
          }
        </div>
      </div>
      <div id="img-grid" className="w-full md:w-3/4 sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid md:grid-cols-3 md:gap-x-4">
        {
          data.map((item, index) => (
            <div key={index} className="bg-gray-100 p-3 flex flex-col mb-6">
              <span className="text-sm text-gray-800 font-bold uppercase">{item.title}</span>
              <span className="text-xs text-gray-700 mt-1">{item.label}</span>
              <img src={item.img} className="mt-4" alt="result" />
              <span className="text-sm text-gray-800 mt-4 font-bold">{item.subTitle}</span>
              <span className="text-xs text-gray-700 mt-1">{item.desc}</span>
              <span className="text-xs text-gray-800 mt-4 font-bold">{item.tag}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const FilterLayer = (props) => {
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
      <div id="full-overlay" className="bg-gray-100 w-full h-full opacity-60"></div>
      <div id="right-sidebar" className="absolute inset-0 flex justify-end">
        <div className="bg-gray-200 w-full">
          <div id="header" className="flex justify-between items-center bg-gray-300 h-20 p-10">
            <div className="flex items-center">
              <BiSlider />
              <span className="text-md text-gray-900 font-bold uppercase ml-1">FILTER BY</span>
            </div>
            <BiX className="text-2xl cursor-pointer" onClick={() => props.setFilterLayer(false)} />
          </div>
          <div id="body" className="flex flex-col m-10">
            <span className="text-xl text-gray-900 font-bold">Gender</span>
            <div className="grid grid-cols-2 gap-x-4 mt-4">
              <div className="flex items-center">
                <input id="women" type="checkbox" className="cursor-pointer" />
                <label htmlFor="women" className="text-md text-gray-900 cursor-pointer ml-1">Women</label>
              </div>
              <div className="flex items-center">
                <input id="men" type="checkbox" className="cursor-pointer" />
                <label htmlFor="men" className="text-md text-gray-900 cursor-pointer ml-1">Men</label>
              </div>
            </div>
            <hr className="border-gray-300 my-6" />
            <span className="text-xl text-gray-900 font-bold">Health Needs</span>
            {
              [1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-center mt-4">
                  <input id={`lorem_${_}`} type="checkbox" className="cursor-pointer" />
                  <label htmlFor={`lorem_${_}`} className="text-md text-gray-900 cursor-pointer ml-1">Lorem ipsum</label>
                </div>
              ))
            }
          </div>
          <div id="footer" className="absolute w-full bottom-0">
            <button onClick={() => props.applyFilter()} className="btn w-full h-12 bg-primary-100 hover:bg-primary-70 text-sm text-white">Apply</button>
          </div>
        </div>
      </div>
    </div >
  )
}


const Services = () => {
  const [filterLayer, setFilterLayer] = React.useState(false)
  const applyFilter = () => {
    //to do
    setFilterLayer(false)
  }

  return (
    <div>
      <ThumbContainer />
      <BodyContainer setFilterLayer={setFilterLayer} />
      <Paginate />
      {
        filterLayer &&
        <FilterLayer setFilterLayer={setFilterLayer} applyFilter={applyFilter} />
      }
    </div>
  )
}

export default Services