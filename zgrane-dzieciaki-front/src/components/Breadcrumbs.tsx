"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  capitalizeLinks?: boolean;
};

export const Breadcrumbs = ({
  homeElement,
  separator,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className="py-2 px-6 uppercase rounded-md max-w-6xl mx-auto flex items-center flex-wrap text-lg">
        {pathNames.length > 0 && separator && (
          <li className="text-gray-600 hover:text-blue-500">
            <Link href={"/"}>{homeElement}</Link>
          </li>
        )}
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const last = index === pathNames.length - 1;
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={href}>
              <li className="flex items-center">
                {last ? (
                  <span className="text-blue-500">{itemLink}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    {itemLink}
                  </Link>
                )}
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
