"use client";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";

interface Service {
  name: string;
  price: string;
}

export default function Page() {
  const [pricingCategories, setPricingCategories] = useState<SanityDocument[]>(
    []
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type=="cennik"]|order(_createdAt)`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setPricingCategories(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaMoneyBill className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Cennik</h1>
        </div>

        {/* Pricing Tables */}
        <div className="p-6 space-y-8">
          {pricingCategories.map((category) => (
            <div key={category._id} className="overflow-hidden">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 px-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Zajęcia/Usługa
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                      >
                        Cena
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.services.map((service: Service, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {service.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                          {service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 space-y-3">
          <p className="text-sm text-gray-600">
            * dla dzieci, które korzystają z dwóch godzin terapii w tygodniu lub
            z terapii SI i innej terapii dostępnej w CRD Zgrane Dzieciaki lub
            rodzeństwa
          </p>
          <p className="text-sm text-gray-600">
            ** Karnet ważny w ciągu 5 tygodni od daty pierwszych zajęć z pakietu
          </p>
        </div>
      </div>
    </div>
  );
}
