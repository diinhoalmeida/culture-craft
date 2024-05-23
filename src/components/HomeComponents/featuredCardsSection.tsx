import { FaGamepad, FaMicrophone } from "react-icons/fa";
import CustomCard from "./customCard";

interface IFeaturedCardsSection {
    title: string;
}

const FeaturedCardsSection = ({ title }: IFeaturedCardsSection) => {
  const imageTest = "/path/to/culture-craft-wallpaper.jpeg";

  return (
    <div className="grid grid-rows-2 col-span-1 gap-4">
      <CustomCard
        title={title}
        image={imageTest}
        icon={<FaGamepad color="rgb(248,250,252, 10)" />}
        views={136}
        newContent={true}
      />
      <CustomCard
        title={title}
        image={imageTest}
        icon={<FaMicrophone color="rgb(248,250,252, 10)" />}
        views={136}
        newContent={true}
      />
    </div>
  );
};

export default FeaturedCardsSection;
