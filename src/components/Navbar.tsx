import { useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Icon, NavbarOption } from ".";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="bg-neutral-400 select-none h-12 xs:h-16 px-2 xs:px-4 flex justify-between xs:text-base text-sm">
      <div className="flex flex-row items-center justify-start max-w-[3/4] relative">
        <Icon className="w-6 xs:w-8" />
        <h2 className="dark:text-white text-md sm:text-xl font-semibold px-4 truncate">
          Platform Launch
        </h2>
        <FaChevronDown
          className={`fill-primary duration-300 ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
          onClick={handleClick}
        />
        <div
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } bg-zinc-800 z-10 min-w-[85%] top-full left-10 border border-gray-600 rounded-lg px-4 py-2 text-gray-400 font-semibold m-2 shadow-2xl animate-dropdown`}
        >
          <ul className="flex flex-col space-y-4">
            <NavbarOption title="Página 1" />
            <NavbarOption title="Página 2" />
            <NavbarOption title="Página 3" />
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-primary text-white font-bold sm:px-4 sm:py-2 px-1 py-1 rounded-2xl mr-2 flex justify-between items-center whitespace-nowrap">
          <FaPlus className="fill-gray-200 md:mr-2" />
          <p className="max-md:hidden">Add New Task</p>
        </button>
        <BsThreeDotsVertical className="dark:fill-neutral-100 text-2xl" />
      </div>
    </nav>
  );
}
