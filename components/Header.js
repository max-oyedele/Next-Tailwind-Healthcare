import { BiMenu, BiUser, BiCart, BiSearchAlt2 } from "react-icons/bi";

export default function Header(props) {
  const theme = props.theme
  return (
    <div className="px-6 md:px-36 h-16 mt-4">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <BiMenu className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-6`} />
          <BiUser className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-6`} />
          <BiCart className={`${theme === 'dark' ? 'text-gray-700' : 'text-white'} w-5 h-5 sm:w-7 sm:h-7`} />
        </div>
        <div id="sm-input" className="invisible xs:visible w-full sm:w-2/4 h-9 bg-gray-100 flex justify-center items-center rounded-md mx-2">
          <BiSearchAlt2 className="text-gray-600 w-5 h-5" />
          <input className="w-3/4 h-full mx-2 text-sm bg-transparent" placeholder="Search for solutions to your health concerns" />
        </div>
        <div className={`flex flex-col items-end ${theme === 'dark' ? 'text-gray-700' : 'text-white'}`}>
          <span className="text-sm sm:text-lg block leading-5">Because</span>
          <span className="text-xs sm:text-sm">Health</span>
        </div>
      </div>
      <div id="xs-input" className="visible xs:hidden h-9 bg-gray-100 flex justify-center items-center rounded-md mt-4">
        <BiSearchAlt2 className="text-gray-600 w-5 h-5 ml-3" />
        <input className="w-full mx-2 text-xs bg-transparent" placeholder="Search for solutions to your health concerns" />
      </div>
    </div>
  )
}