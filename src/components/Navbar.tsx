import { FaChevronDown, FaPlus } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Icon } from ".";

export function Navbar() {
  return (
    <nav className="bg-neutral-400 select-none h-12 xs:h-16 px-2 xs:px-4 flex justify-between xs:text-base text-sm">
      <div className="flex flex-row items-center justify-start max-w-[3/4] group relative">
        <Icon className="w-6 xs:w-8" />
        <h2 className="dark:text-white text-md sm:text-xl font-semibold px-4 truncate">
          Platform Launch
        </h2>
        <FaChevronDown className="fill-primary group-hover:-rotate-180 duration-500" />
        <div className="hidden absolute group-focus:block group-hover:block bg-zinc-800 z-10 min-w-[85%] top-full left-10 border-x border-b border-gray-400 rounded-b-lg px-4 py-2 text-gray-400 font-semibold">
          <ul>
            <li className="flex items-center hover:text-white">
              <MdOutlineDashboard className="mr-2" />
              <p>Página 1</p>
            </li>
            <li className="flex items-center hover:text-white">
              <MdOutlineDashboard className="mr-2" />
              <p>Página 2</p>
            </li>
            <li className="flex items-center hover:text-white">
              <MdOutlineDashboard className="mr-2" />
              <p>Página 3</p>
            </li>
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
