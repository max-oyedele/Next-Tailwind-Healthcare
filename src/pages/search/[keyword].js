import {useRouter} from "next/router"
import { BiSlider } from "react-icons/bi";

import Header from "components/Header"
import Footer from "components/Footer"
import Paginate from "components/Paginate"
import BreadCrumb from "components/BreadCrumb"

const WordContainer = () => {
  return (
    <div className="bg-gray-100 my-10 px-6 sm:px-36 py-10">
      <span className="text-3xl text-black font-bold">beauty</span>
      <hr className="border-gray-300 mt-6" />
    </div>
  )
}

const BodyContainer = () => {
  const tags = [
    {
      name: 'Articles',
      count: 2
    },
    {
      name: 'Products',
      count: 1
    },
    {
      name: 'Procedures',
      count: 2
    },
    {
      name: 'Assessments',
      count: 0
    },
    {
      name: 'Physicians',
      count: 1
    }
  ]

  const data = [
    {
      title: 'SARAH FIELDING',
      label: 'Jul 13, 2020',
      img: '/search/img1.png',
      subTitle: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: '4 min read'
    },
    {
      title: 'JANE COOPER',
      label: 'Jul 26, 2020',
      img: '/search/img2.png',
      subTitle: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: '4 min read'
    },
    {
      title: 'WOMEN',
      label: 'Online RX Consultation Required',
      img: '/search/img3.png',
      subTitle: 'Calm tablets',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'BOSTON',
      label: '211B Thomridge Cir. Syracuse, Connecticut 35624',
      img: '/search/img4.png',
      subTitle: 'Tanya Judge, MD',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'Virtual Consultation Available'
    },
    {
      title: 'Women',
      label: 'In-Person Consultation',
      img: '/search/img5.png',
      subTitle: 'Bellafill',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
    {
      title: 'WOMeN',
      label: 'In-Person Consultation',
      img: '/search/img6.png',
      subTitle: 'Chemical Peel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'From $75'
    },
  ]

  return (
    <div className="px-6 md:px-10 md:flex mt-6">
      <div className="w-full md:w-1/4 md:pr-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold">6 Results</span>
          <button className="sm:hidden w-24 h-8 flex justify-center items-center text-sm text-gray-800 border border-gray-800 rounded-md ">FILTER<BiSlider className="ml-3" /></button>
        </div>
        <hr className="hidden sm:block border-gray-300 my-4" />
        <div id="results-part" className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-24 md:block">
          {
            tags.map((tag, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <input id={`${tag.name}`} type="checkbox" className="cursor-pointer" />
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

const Search = () => {
  const router = useRouter()
  const {keyword} = router.query

  return (
    <div>
      <Header theme="dark" />
      <BreadCrumb data={['Search', keyword]}/>
      <WordContainer />
      <BodyContainer />
      <Paginate />
      <Footer />
    </div>
  )
}

export default Search