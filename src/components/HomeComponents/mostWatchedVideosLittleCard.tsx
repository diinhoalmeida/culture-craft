import { Tooltip } from "@mui/material";
import { NewAndTrendingItem } from "../../interfaces/content";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

interface IMostWatchedVideosLittleCard {
  mostWatchedVideosLittleCardContent: NewAndTrendingItem | undefined;
}

export default function MostWatchedVideosLittleCard({
  mostWatchedVideosLittleCardContent,
}: IMostWatchedVideosLittleCard) {
  return (
    <Link
      to={`/contentdetails/${mostWatchedVideosLittleCardContent?.type}/${mostWatchedVideosLittleCardContent?.id}`}
      className="row-span-1"
    >
      <div className="grid grid-cols-3 gap-2 hover:cursor-pointer">
        <div className="relative col-span-1">
          <img
            src={mostWatchedVideosLittleCardContent?.contentImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <Tooltip title={mostWatchedVideosLittleCardContent?.name} arrow>
            <h3 className="text-text-color line-clamp-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
              {mostWatchedVideosLittleCardContent?.name}
            </h3>
          </Tooltip>
          <p className="text-gray-400">
            {formatDate(
              mostWatchedVideosLittleCardContent?.createdAt as string
            )}{" "}
            - {mostWatchedVideosLittleCardContent?.authorDetails.authorName}
          </p>
        </div>
      </div>
    </Link>
  );
}
