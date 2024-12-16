import Image from "next/image";

const dressStyles = [
  {
    id: 1,
    title: "Casual",
    imageSrc: "/casual.png",
    size: "small",
  },
  {
    id: 2,
    title: "Formal",
    imageSrc: "/formal.png",
    size: "large",
  },
  {
    id: 3,
    title: "Party",
    imageSrc: "/party.png",
    size: "large",
  },
  {
    id: 4,
    title: "Gym",
    imageSrc: "/gym.png",
    size: "small",
  },
];

export default function DressStyles() {
  return (
    <section className="py-8 px-24 bg-[#f0f0f0] rounded-3xl w-[1160px] ml-14">
      <h2 className="text-3xl font-extrabold text-center mb-6">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* First Row */}
        <div className="relative rounded-xl overflow-hidden bg-white w-96 h-64">
          <Image
            src={dressStyles[0].imageSrc}
            alt={dressStyles[0].title}
            layout="fill"
            objectFit="fill"
          />
          <div className="absolute top-2 left-2 bg-white bg-opacity-75 px-3 py-1 rounded-md">
            <p className="text-2xl font-semibold text-gray-800">{dressStyles[0].title}</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-white w-[600px] ml-[-90px] h-64">
          <Image
            src={dressStyles[1].imageSrc}
            alt={dressStyles[1].title}
            layout="fill"
            objectFit="fill"
          />
          <div className="absolute top-2 left-2 bg-white bg-opacity-75 px-3 py-1 rounded-md">
            <p className="text-2xl font-semibold text-gray-800">{dressStyles[1].title}</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative rounded-xl overflow-hidden bg-white h-64 w-[600px]">
          <Image
            src={dressStyles[2].imageSrc}
            alt={dressStyles[2].title}
            layout="fill"
            objectFit="fill"
          />
          <div className="absolute top-2 left-2 bg-white bg-opacity-75 px-3 py-1 rounded-md">
            <p className="text-2xl font-semibold text-gray-800">{dressStyles[2].title}</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-white h-64 w-96 ml-32">
          <Image
            src={dressStyles[3].imageSrc}
            alt={dressStyles[3].title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 left-2 bg-white bg-opacity-75 px-3 py-1 rounded-md">
            <p className="text-2xl font-semibold text-gray-800">{dressStyles[3].title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
