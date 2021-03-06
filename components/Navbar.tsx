import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  interface navBar {
    name: string;
    path: string;
    class: string;
    classSm: string;
  }

  interface classMenu {
    classNav: string;
    classNavSm: string;
  }

  const classNavMenu: classMenu = {
    classNav:
      "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    classNavSm:
      "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
  };

  const navItems: navBar[] = [
    {
      name: "ซีรีย์เกาหลี",
      path: "/kseries",
      class: classNavMenu.classNav,
      classSm: classNavMenu.classNavSm,
    },
    {
      name: "ซีรีย์ฝรั่ง",
      path: "/wseries",
      class: classNavMenu.classNav,
      classSm: classNavMenu.classNavSm,
    },
    {
      name: "ภาพยนตร์",
      path: "/movies",
      class: classNavMenu.classNav,
      classSm: classNavMenu.classNavSm,
    },
    {
      name: "การ์ตูน",
      path: "/",
      class: classNavMenu.classNav,
      classSm: classNavMenu.classNavSm,
    },
  ];
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:justify-between  justify-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Link href="/">
                <a>
                  <h1 className="text-white font-bold text-lg">RSUMOV</h1>
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <a href={item.path} key={index} className={item.class}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 absolute right-3 top-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a href={item.path} key={index} className={item.classSm}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
