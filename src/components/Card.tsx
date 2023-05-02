import { FaPlusSquare } from "react-icons/fa";

type CardVariants = "normal" | "add";

interface CardProps {
  title?: string;
  variant?: CardVariants;
}

export function Card({ title, variant = "normal" }: CardProps) {
  switch (variant) {
    case "normal": {
      return (
        <div className="dark:bg-neutral-400 dark:text-white p-4 rounded-md shadow-md min-h-[100px] w-[200px]">
          <p className="line-clamp-5">{title}</p>
          <p className="dark:text-neutral-50 font-bold text-xs pt-4">
            3 of 3 subtasks
          </p>
        </div>
      );
    }
    case "add": {
      return (
        <div className="dark:bg-neutral-400 dark:text-white p-4 rounded-md shadow-md min-h-[100px] w-[200px] gap-y-4 flex flex-col items-center">
          <FaPlusSquare className="text-4xl text-neutral-100" />
          <p className="text-sm text-neutral-100 font-semibold">
            Adicionar Coluna
          </p>
        </div>
      );
    }
    default: {
      throw new Error("No variant provided to <Card />");
    }
  }
}
