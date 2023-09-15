import Button from "./button";
import { FaCheck } from "react-icons/fa";

export default function Card({ data }) {
  return (
    <>
      <div
        className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] 
      hover:shadow-2xl hover:shadow-gray-600/10 flex flex-col justify-between h-full"
      >
        <div className="relative space-y-8 py-12 p-8">
          <div className="space-y-2">
            <data.Icon size={50} className="text-gray-800 dark:text-white" />
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
        </div>
        <div className="p-8 space-y-4">
          {data.id == "nextjs" || data.id == "nextjs-ai" ? (
            <>
              <p className="flex items-center space-x-2">
                <span className="line-through text-xl">{data.oldPrice}</span>
                <span className="text-4xl ml-2 text-slate-900 font-bold">
                  {data.newPrice}
                </span>
                <span className="bg-orange-700 px-3 py-1 rounded-3xl text-xs text-white font-bold">
                  {data.badgeText}
                </span>
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
                <span className="line-through text-xl">$199</span>
                <span className="text-4xl ml-2 text-slate-900 font-bold">
                  $99
                </span>
              </p>
              <Button link="#" text="Coming Soon" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
