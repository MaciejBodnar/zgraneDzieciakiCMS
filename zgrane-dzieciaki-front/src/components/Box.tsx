interface BoxProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  backgroundColor?: string;
  url?: string;
}

export const Box = ({
  children,
  className = "",
  padding = "p-4",
  backgroundColor = "bg-white",
  url,
}: BoxProps) => {
  return (
    <a href={url}>
      <div
        className={`${padding} ${backgroundColor} rounded-lg shadow-md ${className}`}
      >
        {children}
      </div>
    </a>
  );
};
