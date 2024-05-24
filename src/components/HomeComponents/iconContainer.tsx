import { Avatar } from "@mui/material";

interface IIconContainer {
  icon?: React.ReactNode;
  text?: string;
  textColor?: string;
  bgColor?: string;
  bgOpacity?: string;
  avatar?: string;
}

const IconContainer = ({
  icon,
  text,
  textColor = "text-slate-50",
  bgColor = "bg-[#02112A]",
  bgOpacity = "bg-opacity-50",
  avatar,
}: IIconContainer) => (
  <div
    className={`${
      icon && "icon-container"
    } ${bgColor} ${bgOpacity} flex flex-row items-center gap-2 w-max`}
  >
    {icon}
    <p className={textColor}>
      {avatar && "By"} {text}
    </p>
    {avatar && (
      <Avatar alt="Avatar" src={avatar} sx={{ width: 24, height: 24 }} />
    )}
  </div>
);

export default IconContainer;
