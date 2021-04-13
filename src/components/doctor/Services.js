import { BiSlider } from "react-icons/bi";
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
              <div className="relative h-12 rounded-md">
                <img src={item.img} className="absolute inset-0" className="object-cover w-full h-full rounded-md" alt={item.name} />
                <div className="absolute inset-0 bg-gray-400 opacity-80 rounded-md"></div>
                <div className="absolute inset-0 flex justify-center items-center rounded-md">
                  <span className="text-sm text-white">{item.name}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <hr className="border-gray-300 mt-4" />
    </div>
  )
}

const BodyContainer = () => {
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
          <button className="sm:hidden w-24 h-8 flex justify-center items-center text-sm text-gray-800 border border-gray-800 rounded-md ">FILTER<BiSlider className="ml-3" /></button>
        </div>
        <hr className="hidden sm:block border-gray-300 my-4" />
        <div id="results-part" className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-24 md:block">
          {
            tags.map((tag, index) => (
              <div key={index}>
                <div className="flex items-center">
                  {/* <input id={`${tag.name}`} type="checkbox" className="cursor-pointer" /> */}
                  <label htmlFor="articles" className="text-xs cursor-pointer ml-1">{tag.name} ({tag.count})</label>
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

const Services = () => {
  return (
    <div>
      <ThumbContainer />
      <BodyContainer />
      <Paginate />
    </div>
  )
}

export default Services