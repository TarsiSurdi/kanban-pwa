import { FaChevronDown, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Icon } from ".";

export function Navbar() {
  return (
    <nav className="bg-neutral-400 select-none h-12 xs:h-16 px-2 xs:px-4 flex justify-between xs:text-base text-sm">
      <div className="flex flex-row items-center justify-start max-w-[3/4]">
        <Icon className="w-6 xs:w-8" />
        <h2 className="dark:text-white text-md xs:text-xl font-semibold px-4 truncate">
          Platform Launch
        </h2>
        <FaChevronDown className="fill-primary" />
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
