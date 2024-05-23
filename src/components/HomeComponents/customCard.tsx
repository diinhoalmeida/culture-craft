import { Tooltip } from "@mui/material";
import CustomSurplusAvatars from "./customSurplusAvatars";
import IconContainer from "./iconContainer";
import { ReactNode } from "react";

interface ICustomCard {
    title: string;
    image: string;
    icon: ReactNode;
    views: number;
    newContent?: boolean;
  }

const CustomCard = ({ title, image, icon, views, newContent = false }: ICustomCard) => (
  <div className="grid grid-rows-3 row-span-1">
    <div className="row-span-2 bg-slate-400 p-2 flex flex-col justify-between relative">
      <img src={image} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="flex flex-row items-center gap-3 z-10">
        <CustomSurplusAvatars />
        <p className="text-slate-50 icon-container">+{views} views</p>
      </div>
      <div className="flex justify-end w-full z-10">
        {newContent && (
          <div className="flex-row items-center gap-2 icon-container w-max flex">
            {icon}
            <p className="text-slate-50">New content</p>
          </div>
        )}
      </div>
    </div>
    <div className="row-span-1 pt-1">
      <h3 className="text-lg">{title.length > 35 ? `${title.slice(0, 35)}...` : title}</h3>
      <IconContainer icon={icon} text="By Josh Rosengard" avatar="/static/images/avatar/1.jpg" />
    </div>
  </div>
);

export default CustomCard;
