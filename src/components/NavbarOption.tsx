import { MdOutlineDashboard } from "react-icons/md";

interface NavbarOptionProps {
  title: string;
}

export function NavbarOption({ title }: NavbarOptionProps) {
  return (
    <li className="flex items-center hover:text-white">
      <MdOutlineDashboard className="mr-2" />
      <p>{title}</p>
    </li>
  );
}
