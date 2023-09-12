import Button from "./button";
import { FaCheck } from "react-icons/fa";

export default function Card({ data }) {
  return (
    <>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8 border-b border-gray-100 dark:border-gray-700">
          <data.Icon size={50} className="text-gray-800 dark:text-white" />
          <div className="space-y-2">
            <h5 className="text-2xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              {data.title}
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              {data.description}
            </p>
          </div>
          <hr className="w-1/3" />
          <ul className="list-none list-inside mb-6 text-left">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2 text-green-900" />
                {feature}
              </li>
            ))}
          </ul>
          {data.title == "NextJs" ? (
            <>
              <p>
                <span className="line-through text-xl">$99</span>
                <span className="text-4xl ml-2 text-slate-900 font-bold">
                  $49
                </span>
                <span className="text-lgl ml-2">USD</span>
              </p>
              <div className="flex space-x-2">
                <Button
                  link={data.buyLink}
                  text="Get it now"
                  type="primary"
                  customClass="lemonsqueezy-button"
                />
                <Button
                  link={data.moreDetails}
                  text="More details"
                  customClass="lemonsqueezy-button"
                />
              </div>
            </>
          ) : (
            <>
              <p>
                <span className="line-through text-xl">$99</span>
                <span className="text-4xl ml-2 text-slate-900 font-bold">
                  $29
                </span>
                <span className="text-lgl ml-2">USD</span>
              </p>
              <Button link="#" text="Coming Soon" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
