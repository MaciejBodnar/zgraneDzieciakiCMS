import Image from "next/image";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle: string;
  color: string;
}

export const HeroBanner = ({
  image,
  title,
  subtitle,
  color,
}: HeroBannerProps) => {
  return (
    <div className="relative mb-12 rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="w-full h-[200px] object-contain"
        width={500}
        height={200}
      />
      <div className={`absolute inset-0 ${color}`}>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
