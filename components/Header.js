import React from "react"
import Link from "next/link"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function Header(props) {
  const [theme, setTheme] = React.useState(props.theme)
  const [openMenu, setOpenMenu] = React.useState(false)

  React.useEffect(() => {
    const menuElement = document.querySelector('#menu')
    if (openMenu) {
      disableBodyScroll(menuElement);
      setTheme('dark')
    }
    else {
      // enableBodyScroll(menuElement);
      setTheme(props.theme)
    }

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [openMenu])

  return (
    <div className={`px-6 md:px-36 h-16 pt-4 ${openMenu && 'bg-white'}`}>
      <div className="flex w-full justify-between items-center">
        <div className="flex sm:w-1/4">
          <button className="" onClick={() => setOpenMenu(!openMenu)}>
            {
              openMenu && <img src='/icons/action/close_dark.svg' alt="close" />
            }
            {
              !openMenu && <img src={`${theme == 'dark' ? '/icons/action/hamburger_dark.svg' : '/icons/action/hamburger_light.svg'}`} alt="hamburger" />
            }
          </button>
          <Link href="/membership">
            <button className={`${openMenu ? "invisible" : ""} mx-4`}>
              <img src={`${theme == 'dark' ? '/icons/action/user_dark.svg' : '/icons/action/user_light.svg'}`} alt="user" />
            </button>
          </Link>
          <button className={`${openMenu ? "invisible" : ""}`}>
            <img src={`${theme == 'dark' ? '/icons/action/caddy_dark.svg' : '/icons/action/caddy_light.svg'}`} alt="caddy" />
          </button>
        </div>
        <div id="sm-input" className="invisible xs:visible w-full sm:w-2/4 h-9 bg-gray-100 flex justify-center items-center rounded-md mx-2">
          <img src='/icons/generic/search.svg' alt="search" />
          <input className="w-3/4 h-full mx-2 text-sm bg-transparent" placeholder="Search for solutions to your health concerns" />
        </div>
        <div className={`flex flex-col sm:w-1/4 items-end ${theme === 'dark' ? 'text-grayscale-100' : 'text-white'}`}>
          <img src={`${theme == 'dark' ? '/logo_dark.svg' : '/logo_light.svg'}`} alt="logo" />
        </div>
      </div>
      <div id="xs-input" className="visible xs:hidden h-9 bg-gray-100 flex justify-center items-center rounded-md mt-4">
        <img src='/icons/generic/search.svg' alt="search" />
        <input className="mx-2 text-xs bg-transparent" placeholder="Search for solutions to your health concerns" />
      </div>

      { openMenu && <Menu />}
    </div>
  )
}

const Menu = () => {
  const depth1Menu = [
    {
      kind: 'explore',
      menu: [
        {
          name: 'women',
          childs: [
            {
              kind: 'women concerns',
              menu: [
                {
                  name: 'gut health',
                  childs: ''
                },
                {
                  name: 'hormonal health',
                  childs: ''
                },
                {
                  name: 'mental health',
                  childs: ''
                },
                {
                  name: 'metabolic health',
                  childs: ''
                },
                {
                  name: 'sexual health',
                  childs: [
                    {
                      kind: 'women prescriptions',
                      menu: [
                        {
                          name: 'enhance cream',
                          childs: ''
                        },
                        {
                          name: 'enhance lozenges',
                          childs: ''
                        },
                        {
                          name: 'awaken nasal spray',
                          childs: ''
                        }
                      ]
                    },
                    {
                      kind: 'women procedures',
                      menu: [
                        {
                          name: 'thermVia',
                          childs: ''
                        },
                        {
                          name: 'monaLisa touch',
                          childs: ''
                        },
                        {
                          name: 'emsella chair',
                          childs: ''
                        },
                        {
                          name: 'novasure ablation',
                          childs: ''
                        },
                        {
                          name: 'o shot',
                          childs: ''
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'joint pain',
                  childs: ''
                },
                {
                  name: 'skin',
                  childs: ''
                },
              ]
            }
          ]
        },
        {
          name: 'men',
          childs: ''
        },
        {
          name: 'health center',
          childs: ''
        },
        {
          name: 'telehealth',
          childs: ''
        },
      ]
    }
  ]
  const [depth2Menu, setDepth2Menu] = React.useState()
  const [depth3Menu, setDepth3Menu] = React.useState()

  return (
    <div id="menu" className="fixed inset-0 z-10 bg-grayscale-white mt-16 px-6 md:px-36 py-10">
      <div className="md:flex h-full">
        <div id="column-1" className="md:w-1/4 md:flex md:flex-col justify-between pr-4">
          <div className="flex flex-col">
            {
              depth1Menu.map((menu, index) => (
                <div key={index} className="flex flex-col">
                  <span className={`text-xs text-grayscale-60 uppercase ${index > 0 && 'mt-10'}`}>{menu.kind}</span>
                  {
                    menu.menu && menu.menu.length > 0 && menu.menu.map((item, index) => (
                      <div key={index} className="flex justify-between items-center mt-4">
                        <span className="text-md capitalize cursor-pointer" onMouseEnter={() => { setDepth2Menu(item.childs); setDepth3Menu('') }}>{item.name}</span>
                        <button className={`${(!depth2Menu || !item.childs) && 'hidden'}`}><img src="/icons/action/chevron_right.svg" className="w-4 h-4" alt="chevron_right" /></button>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div id="pc-portal-footer" className="hidden md:flex md:flex-col">
            <hr className="w-16 border-grayscale-60 my-6" />
            <span className="text-sm text-grayscale-60">PORTAL</span>
            <span className="text-sm mt-4">CUSTOMER CARE</span>
            <span className="text-sm mt-4">CART</span>
            <span className="text-sm mt-4">LOGIN</span>

            <hr className="w-16 border-grayscale-60 my-6" />
            <span className="text-sm text-grayscale-60">FOLLOW BECAUSE HEALTH</span>
            <div className="w-full md:w-3/4 flex justify-between mt-4">
              <button><img src="/icons/facebook-light.svg" className="" alt="facebook" /></button>
              <button><img src="/icons/instagram-light.svg" className="" alt="instagram" /></button>
              <button><img src="/icons/twitter-light.svg" className="" alt="twitter" /></button>
              <button><img src="/icons/youtube-light.svg" className="" alt="youtube" /></button>
              <button><img src="/icons/linkedin-light.svg" className="" alt="linkedin" /></button>
            </div>
          </div>
        </div>

        <div id="column-2" className={`md:w-1/4 hidden md:flex md:flex-col ${depth2Menu && 'border-l'} px-4`}>
          {
            depth2Menu && depth2Menu.map((menu, index) => (
              <div key={index} className="flex flex-col">
                <span className={`text-xs text-grayscale-60 uppercase ${index > 0 && 'mt-10'}`}>{menu.kind}</span>
                {
                  menu.menu && menu.menu.length > 0 && menu.menu.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mt-4">
                      <span className="text-md capitalize cursor-pointer" onMouseEnter={() => { setDepth3Menu(item.childs) }}>{item.name}</span>
                      <button className={`${(!depth3Menu || !item.childs) && 'hidden'}`}><img src="/icons/action/chevron_right.svg" className="w-4 h-4" alt="chevron_right" /></button>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>

        <div id="column-3" className={`md:w-1/4 hidden md:flex md:flex-col ${depth3Menu && 'border-l'} px-4`}>
          {
            depth3Menu && depth3Menu.map((menu, index) => (
              <div key={index} className="flex flex-col">
                <span className={`text-xs text-grayscale-60 uppercase ${index > 0 && 'mt-10'}`}>{menu.kind}</span>
                {
                  menu.menu && menu.menu.length > 0 && menu.menu.map((item, index) => (
                    <span key={index} className="text-md capitalize cursor-pointer mt-4">{item.name}</span>
                  ))
                }
              </div>
            ))
          }
        </div>

        <hr className="md:hidden w-16 border-grayscale-60 my-6" />
        <div id="column-4-img" className="md:w-1/4 flex items-start">
          <div className="relative w-full overflow-hidden">
            <img src="/header/menu-ad-pc.png" className="hidden md:flex object-contain w-full rounded-md" alt="menu-ad" />
            <img src="/header/menu-ad-tablet.png" className="hidden sm:flex md:hidden object-contain w-full rounded-md" alt="menu-ad" />
            <img src="/header/menu-ad-phone.png" className="sm:hidden object-contain w-full rounded-md" alt="menu-ad" />
            <div className="absolute inset-0 flex flex-col justify-center bg-success-5 bg-opacity-80 rounded-md p-4">
              <span className="text-sm uppercase">One Membership</span>
              <span className="text-xl font-bold mt-4">Designed for a healthier you</span>
              <span className="text-sm mt-4">Experience modern care from specialist doctors.</span>
              <button className="mt-4"><img src="/icons/action/chevron_right_circle.svg" className="w-4 h-4" alt="chevron_right_circle" /></button>
            </div>
          </div>
        </div>

        <div id="tablet-phone-portal-footer" className="md:hidden flex flex-col">
          <hr className="w-16 border-grayscale-60 my-6" />
          <span className="text-sm text-grayscale-60">PORTAL</span>
          <span className="text-sm mt-4">CUSTOMER CARE</span>
          <span className="text-sm mt-4">CART</span>
          <span className="text-sm mt-4">LOGIN</span>

          <hr className="w-16 border-grayscale-60 my-6" />
          <span className="text-sm text-grayscale-60">FOLLOW BECAUSE HEALTH</span>
          <div className="w-1/4 md:w-3/4 flex justify-between mt-4">
            <button><img src="/icons/facebook-light.svg" className="" alt="facebook" /></button>
            <button><img src="/icons/instagram-light.svg" className="" alt="instagram" /></button>
            <button><img src="/icons/twitter-light.svg" className="" alt="twitter" /></button>
            <button><img src="/icons/youtube-light.svg" className="" alt="youtube" /></button>
            <button><img src="/icons/linkedin-light.svg" className="" alt="linkedin" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}