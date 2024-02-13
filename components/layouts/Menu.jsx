import React,{useState} from 'react'
import Link from "next/link";

export default function Menu({cart,user}) {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div  className="mobile:flex mobile:pt-[150px] mobile:justify-center mobile:gap-2  mobile:w-[100%] mobile:h-[100vh] ">
              <div className="mobile:w-[150px] mobile:h-[50px] mobile:flex mobile:justify-center mobile:items-center">
              {!user ? (
                      <Link
                        onClick={(e) => { 
                          setIsNavOpen(false)
                          e.stopPropagation();
                        }}
                        href="/login"
                        className="w-[100%] h-[100%] px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-400 rounded-md hover:bg-gray-100 hover:border-gray-300"
                      >
                        <i className="text-gray-400 w-5 fa fa-user"></i>
                        <span className="hidden laptop:inline ml-1">Sign in</span>
                      </Link>
                    ) : (
                      <Link 
                        onClick={(e) => { 
                          setIsNavOpen(false)
                          e.stopPropagation();
                        }}
                        href="/me">
                        <div className="w-[100%] h-[100%] flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                          {/* <img
                            className="w-10 h-10 rounded-full"
                            src={
                              user?.avatar ? user?.avatar?.url : "/images/default.png"
                            }
                          /> */}
                          <div className="space-y-1 font-medium">
                            <p>
                              {user?.name}
                              <time className="block text-sm text-gray-500 dark:text-gray-400">
                                {user?.email}
                              </time>
                            </p>
                          </div>
                        </div>
                      </Link>
                    )}
              </div>
              <div className="mobile:w-[150px] mobile:h-[50px] mobile:flex mobile:justify-center mobile:items-center ">
                <Link
                href="/cart"
                onClick={(e) => { 
                  setIsNavOpen(false)
                  e.stopPropagation();
                }}
                className=" w-[100%] h-[100%] px-3 py-2 text-center text-gray-700 bg-white shadow-sm border border-gray-400 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <span className="hidden laptop:inline ml-1" >
                Cart (<b>{cart?.length || 0}</b>)
                </span>
              </Link>
              </div>
              
            </div>
          </div>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </section>
  )
}
