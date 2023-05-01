interface IconProps {
  size?: number;
  className: string;
}

export function Icon({ size, className }: IconProps) {
  return (
    <img
      src="/icons/iconTransparent.svg"
      alt="Kanban Logo"
      className={className}
      width={size}
      height={size}
    />
  );
}
