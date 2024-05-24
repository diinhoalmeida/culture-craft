import imageTest from "../../assets/culture-craft-wallpaper.jpeg";
import { FaPlayCircle } from "react-icons/fa";

interface IPlayerCard {
    type: string;
}

export default function PlayerCard({type}: IPlayerCard) {
  return (
    <div className="sm:min-h-[450px] relative w-full flex justify-center items-center hover:text-[#FF130A] hover:cursor-pointer">
      {type !== "art" && (
        <div className="absolute z-10">
          <FaPlayCircle size={90}/>
        </div>
      )}
      <img
        src={imageTest}
        alt="Background"
        className={`w-full h-full object-cover z-0 ${type !== "art" && "hover:blur-[1px]"}`}
      />
    </div>
  );
}
