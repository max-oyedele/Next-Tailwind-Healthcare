import { BiMenu, BiUser, BiCart, BiSearchAlt2 } from "react-icons/bi";

export default function Header(props) {
  const theme = props.theme
  return (
    <div className="flex justify-center items-center h-16">
      <div className="flex justify-center w-1/4 ml-5">
        <BiMenu className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7 mx-2`} />
        <BiUser className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7 mx-2`} />
        <BiCart className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7 mx-2`} />
      </div>
      <div id="sm-input" className="invisible xs:visible w-full sm:w-1/2 h-9 bg-gray-100 flex justify-center items-center rounded-md">
        <BiSearchAlt2 className="text-gray-600 w-5 h-5" />
        <input className="w-3/4 mx-2 text-xs bg-transparent" placeholder="Search for solutions to your health concerns" />
      </div>
      <div className={`flex flex-col w-1/4 mr-8 items-end ${theme === 'dark' ? 'text-gray-700' : 'text-white'}`}>
        <span className="text-sm sm:text-lg block leading-5">Because</span>
        <span className="text-xs sm:text-sm">Health</span>
      </div>
      <div id="xs-input" className="visible xs:hidden absolute w-10/12 top-11 h-9 bg-gray-100 flex justify-center items-center rounded-md mt-5">
        <BiSearchAlt2 className="text-gray-600 w-5 h-5 ml-3" />
        <input className="w-full mx-2 text-xs bg-transparent" placeholder="Search for solutions to your health concerns" />
      </div>
    </div>
  )
}