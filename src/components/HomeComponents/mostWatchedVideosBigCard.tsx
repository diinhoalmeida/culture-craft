import { FaYoutube } from "react-icons/fa";
import { NewAndTrendingItem } from "../../interfaces/content";
import { Tooltip } from "@mui/material";

interface IMostWatchedVideosBigCard {
  mostWatchedVideosBigCardContent: NewAndTrendingItem | undefined;
}

export default function MostWatchedVideosBigCard({
  mostWatchedVideosBigCardContent,
}: IMostWatchedVideosBigCard) {
  return (
    <div className="col-span-2 flex flex-col justify-center relative hover:cursor-pointer gap-2">
      <div className="relative w-full h-full">
        <div className="absolute z-10 w-full h-full flex items-center justify-center hover:text-[#FF130A]">
          <FaYoutube size={70} />
        </div>
        {mostWatchedVideosBigCardContent?.contentImage && (
          <img
            src={mostWatchedVideosBigCardContent.contentImage}
            alt={mostWatchedVideosBigCardContent.name}
            className="absolute inset-0 object-cover z-0 filter w-full h-full blur-[2px]"
          />
        )}
      </div>
      <div className="flex flex-col">
        <Tooltip title={mostWatchedVideosBigCardContent?.name} arrow>
          <h2 className="text-text-color text-4xl stroke-slate-950 line-clamp-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
            {mostWatchedVideosBigCardContent?.name}
          </h2>
        </Tooltip>
        <p className="text-md text-gray-500">
          {mostWatchedVideosBigCardContent?.createdAt} -{" "}
          {mostWatchedVideosBigCardContent?.authorDetails.authorName}
        </p>
      </div>
    </div>
  );
}
