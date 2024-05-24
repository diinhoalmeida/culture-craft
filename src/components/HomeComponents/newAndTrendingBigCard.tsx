import { FaFolder, FaHandsHelping, FaMeteor } from "react-icons/fa";
import IconContainer from "./iconContainer";
import { Button, Tooltip } from "@mui/material";
import CustomSurplusAvatars from "./customSurplusAvatars";
import { NewAndTrendingItem } from "../../interfaces/content";
import { getIconForType } from "../../utils/getIconForType";
import { Link } from "react-router-dom";

interface NewAndTrendingBigCardProps {
  contentTrendingBigCard: NewAndTrendingItem | undefined;
}

export default function NewAndTrendingBigCard({
  contentTrendingBigCard,
}: NewAndTrendingBigCardProps) {
  return (
    <div className="flex justify-center items-center col-span-2 relative sm:py-0 py-10">
      <div className="px-10 z-10 flex flex-col gap-2 bg-opacity-80 min-w-[90%]">
        <div className="flex flex-row gap-2 items-center">
          <IconContainer
            icon={
              contentTrendingBigCard?.type ? (
                getIconForType(contentTrendingBigCard.type)
              ) : (
                <FaFolder />
              )
            }
            text={contentTrendingBigCard?.authorDetails.authorName}
            avatar={contentTrendingBigCard?.authorDetails?.authorPhoto}
          />
          <IconContainer
            icon={
              contentTrendingBigCard?.newContent ? (
                <FaMeteor color="#e9fa00" />
              ) : (
                <FaHandsHelping color="#e9fa00" />
              )
            }
            text={
              contentTrendingBigCard?.newContent ? "New content" : "Recommended"
            }
          />
        </div>
        <Tooltip title={contentTrendingBigCard?.name} arrow>
          <h2 className="text-8xl text-slate-50 stroke-slate-950 line-clamp-2 overflow-hidden [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
            {contentTrendingBigCard?.name}
          </h2>
        </Tooltip>
        <Link to={`/contentdetails/${contentTrendingBigCard?.type}/${contentTrendingBigCard?.id}`}>
        <Button
          sx={{
            bgcolor: "#ffffff",
            border: "none",
            color: "#000",
            "&:hover": {
              bgcolor: "#e6dfda",
              border: "none",
            },
          }}
        >
          EXPLORE
        </Button>

        </Link>
        <div className="flex flex-row items-center gap-3">
          <CustomSurplusAvatars
            total={contentTrendingBigCard?.views.length}
            view={contentTrendingBigCard?.views}
          />
          <div className="icon-container bg-[#02112A] bg-opacity-50">
            <p className="text-slate-50 ">+{contentTrendingBigCard?.newView}</p>
          </div>
        </div>
      </div>
      {contentTrendingBigCard?.contentImage && (
        <img
          src={contentTrendingBigCard.contentImage}
          alt={contentTrendingBigCard.name}
          className="absolute inset-0 w-full h-full object-cover z-0 filter blur-[2px]"
        />
      )}
    </div>
  );
}
