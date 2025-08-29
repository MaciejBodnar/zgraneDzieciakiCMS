// import { Link, useLocation } from 'react-router-dom';
// import { FaChevronRight } from 'react-icons/fa';

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter(x => x);

//   // Create breadcrumb mapping
//   const breadcrumbNameMap = {
//     oferta: 'Oferta',
//     'intergacja-sensoryczna': 'Integracja Sensoryczna',
//     'trening-umiejetnosci-spolecznych': 'Trening umiejętności społecznych',
//     'o-nas': 'O nas',
//     'standardy-ochrony-maloletnich':
//       'Standardy ochrony małoletnich w Centrum Rozwoju Dziecka "Zgrane Dzieciaki"',
//     // gallery: 'Galeria',
//     // office: 'Office',
//     // classes: 'Classes',
//     // therapy: 'Therapy',
//     rodo: 'RODO',
//     'terapia-kregoslupa': 'Terapia Czaszkowo-Krzyżowa',
//     'trening-neuroflow': 'Neuroflow',
//     korektywa: 'Korektywa',
//     'terapia-dloni': 'Terapia Ręki',
//     logopedia: 'Logopedia',
//     cennik: 'Cennik',
//     kontakt: 'Kontakt',
//   };

//   return (
//     <div className="bg-gray-100 py-2 px-4 rounded-md mb-6 flex items-center flex-wrap">
//       <Link to="/" className="text-gray-600 hover:text-blue-500">
//         Strona główna
//       </Link>

//       {pathnames.map((value, index) => {
//         const last = index === pathnames.length - 1;
//         const to = `/${pathnames.slice(0, index + 1).join('/')}`;

//         return (
//           <div key={to} className="flex items-center">
//             <FaChevronRight className="mx-2 text-gray-400" size={12} />
//             {last ? (
//               <span className="text-blue-500">{breadcrumbNameMap[value] || value}</span>
//             ) : (
//               <Link to={to} className="text-gray-600 hover:text-blue-500">
//                 {breadcrumbNameMap[value] || value}
//               </Link>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Breadcrumbs;

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
