import Link from "next/link";
import React from "react";

interface SubmenuProps {
  link?: string;
  children?: React.ReactNode;
  label?: string;
}

export const Submenu = ({ link, label, children }: SubmenuProps) => {
  return (
    <div className="min-w-full h-full p-2">
      <Link
        href={link ?? "/"}
        className="flex p-4 text-gray-600 hover:text-gray-900  text-center items-center justify-center gap-2"
      >
        {children}
        <span>{label}</span>
      </Link>
    </div>
  );
};
