import Link from "next/link";
import { ReactNode } from "react";

interface QuickLinksProps {
  href?: string;
  title?: string;
  icon?: ReactNode;
}

export const QuickLinks = ({ href, title, icon }: QuickLinksProps) => {
  return (
    <Link
      href={href ?? ""}
      className="bg-gray-100 rounded-2xl px-4 py-8 w-full hover:shadow-xl transition-all"
    >
      <div className="flex gap-2">
        {icon}
        <p className="font-bold">{title}</p>
      </div>
    </Link>
  );
};
