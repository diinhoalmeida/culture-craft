import { FaFolder, FaHandsHelping, FaMeteor } from "react-icons/fa";
import CustomSurplusAvatars from "./customSurplusAvatars";
import imageTest from "../../assets/culture-craft-wallpaper.jpeg";
import { NewAndTrendingItem } from "../../interfaces/content";
import IconContainer from "./iconContainer";
import { getIconForType } from "../../utils/getIconForType";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

interface INewAndTrendingMediumCard {
  contentTrendingMediumCard: NewAndTrendingItem | undefined;
}

export default function NewAndTrendingMediumCard({
  contentTrendingMediumCard,
}: INewAndTrendingMediumCard) {
  return (
    <Link to={`/contentdetails/${contentTrendingMediumCard?.type}/${contentTrendingMediumCard?.id}`} className="row-span-1 col-span-1">
    <div className="grid grid-rows-3 hover:cursor-pointer">
      <div className="row-span-2 bg-slate-400 p-2 flex flex-col justify-between relative">
        <img
          src={imageTest}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="flex flex-row items-center gap-3 z-10">
          <CustomSurplusAvatars
            total={contentTrendingMediumCard?.views.length}
            view={contentTrendingMediumCard?.views}
          />
          <div className="icon-container bg-[#02112A] bg-opacity-50">
            <p className="text-slate-50 ">
              +{contentTrendingMediumCard?.newView}
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full z-10">
          <IconContainer
            icon={
              contentTrendingMediumCard?.newContent ? (
                <FaMeteor color="#e9fa00" />
              ) : (
                <FaHandsHelping color="#e9fa00" />
              )
            }
            text={
              contentTrendingMediumCard?.newContent
                ? "New content"
                : "Recommended"
            }
          />
        </div>
      </div>
      <div className="row-span-1  pt-1">
        <Tooltip title={contentTrendingMediumCard?.name} arrow>
          <h2 className="text-lg text-slate-50 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] lg:line-clamp-1 line-clamp-2 overflow-hidden">
            {contentTrendingMediumCard?.name}
          </h2>
        </Tooltip>
        <IconContainer
          icon={
            contentTrendingMediumCard?.type ? (
              getIconForType(contentTrendingMediumCard.type)
            ) : (
              <FaFolder />
            )
          }
          text={contentTrendingMediumCard?.authorDetails.authorName}
          avatar={contentTrendingMediumCard?.authorDetails?.authorPhoto}
        />
      </div>
    </div>
    </Link>
  );
}
