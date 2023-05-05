import { MdOutlineCancel } from "react-icons/md";

interface TaskModalProps {
  title?: string;
  description?: string;
}

export function TaskModal({ title, description }: TaskModalProps) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-[70%] h-[50%] bg-neutral-400 text-white p-6 rounded-lg shadow-xl">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <MdOutlineCancel className="text-2xl text-neutral-100" />
        </header>
        <hr className="my-4 h-[1px] border-t-0 bg-neutral-200" />
        <p>{description}</p>
      </div>
    </div>
  );
}
