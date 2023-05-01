import { FaChevronDown, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Icon } from ".";

export function Navbar() {
  return (
    <nav className="bg-neutral-400">
      <div className="h-20 px-4 flex justify-between">
        <div className="flex items-center">
          <Icon size={28} />
          <h2 className="dark:text-white text-xl font-semibold px-2">
            Platform Launch
          </h2>
          <FaChevronDown size={12} className="fill-primary" style={{}} />
        </div>
        <div className="flex items-center">
          <button className="bg-primary px-4 py-2 rounded-2xl mr-2">
            <FaPlus className="fill-gray-200" />
          </button>
          <BsThreeDotsVertical className="dark:fill-neutral-100" />
        </div>
      </div>
    </nav>
  );
}
