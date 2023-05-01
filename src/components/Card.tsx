interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <div className="dark:bg-neutral-400 dark:text-white px-2 xs:px-4 py-4 rounded-md shadow-md max-h-[200px]">
      <p className="max-h-24 max-w-[200px] overflow-y-clip">{title}</p>
      <p className="dark:text-neutral-50 font-bold text-xs pt-4">
        3 of 3 subtasks
      </p>
    </div>
  );
}
