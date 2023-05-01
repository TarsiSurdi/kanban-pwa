interface IconProps {
  size?: number;
}

export function Icon({ size }: IconProps) {
  return (
    <img
      src="/icons/iconTransparent.svg"
      alt="Kanban Logo"
      width={size}
      height={size}
    />
  );
}
