import { Avatar, Button, Tooltip } from "@mui/material";
import { FaFolder } from "react-icons/fa";
import { NewAndTrendingItem } from "../../interfaces/content";
import { getIconForType } from "../../utils/getIconForType";
import { Link } from "react-router-dom";

interface INewAndTrendingLittleCard {
  contentTrendingLittleCard: NewAndTrendingItem | undefined;
}

const LittleCardImage = ({ imageUrl }: { imageUrl: string | undefined }) => (
  <div className="relative col-span-3">
    <img
      src={imageUrl}
      alt="Background"
      className="w-full h-full object-cover z-0"
    />
  </div>
);

const LittleCardDetails = ({
  name,
  type,
}: {
  name: string | undefined;
  type: "game" | "art" | "video" | "audio" | "movie" | undefined;
}) => (
  <div className="flex flex-col w-full col-span-3 justify-between">
    <Tooltip title={name} arrow>
      <h3 className="line-clamp-2 overflow-hidden text-text-color [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
        {name}
      </h3>
    </Tooltip>
    <div className="icon-container bg-[#02112A] bg-opacity-50 flex flex-row items-center gap-2 w-max h-6">
      {type ? getIconForType(type) : <FaFolder />}
    </div>
  </div>
);

const LittleCardActions = ({
  authorPhoto,
}: {
  authorPhoto: string | undefined;
}) => (
  <div className="col-span-2 flex flex-col justify-between items-end">
    <Button
      sx={{
        bgcolor: "#ffffff",
        border: "none",
        color: "#000",
        width: "20%",
        "&:hover": {
          bgcolor: "#e6dfda",
          border: "none",
        },
      }}
    >
      Open
    </Button>
    <Avatar src={authorPhoto} sx={{ width: 24, height: 24 }} />
  </div>
);

export default function NewAndTrendingLittleCard({
  contentTrendingLittleCard,
}: INewAndTrendingLittleCard) {
  const { contentImage, name, type, authorDetails } =
    contentTrendingLittleCard || {};
  return (
    <Link
      to={`/contentdetails/${contentTrendingLittleCard?.type}/${contentTrendingLittleCard?.id}`}
      className="col-span-1 "
    >
      <div className="grid grid-cols-8 border-b border-slate-50 pb-3 gap-2">
        <LittleCardImage imageUrl={contentImage} />
        <LittleCardDetails name={name} type={type} />
        <LittleCardActions authorPhoto={authorDetails?.authorPhoto} />
      </div>
    </Link>
  );
}
