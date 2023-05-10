import Image from "next/image";

export default function EventCards({ title, type, dates, image, description }) {
  return (
    <>
      <div className="flex items-center md:flex-row sm:flex-col overflow-hidden mx-20 my-10 w-100 md:h-64 sm:h-auto bg-white drop-shadow-xl rounded-md">
        <div className="flex lg:w-96 md:w-96 h-64 sm:w-94 rounded-md overflow-hidden">
          {image}
        </div>
        <div className="mx-10 mt-10">
          <div className="mb-3">
            <h1 className="text-xl text-slate-600 font-bold">{dates}</h1>
            <h1 className="text-4xl text-black font-bold">{title}</h1>
          </div>
          <h1 className="text-md text-black ">{description}</h1>
          <div className="bg-slate-200 w-fit p-1 px-2 mb-10 mt-5 rounded-md bottom-2">
            <h1 className="text-md text-black font-bold">{type}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
