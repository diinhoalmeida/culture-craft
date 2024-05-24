import { FaPencilAlt, FaUser, FaPlusCircle, FaFolder } from "react-icons/fa";
import image from "../../assets/culture-craft-wallpaper.jpeg";
import avatar from "../../assets/foto-perfil.jpg";
import { getIconForType } from "../../utils/getIconForType";
import IconContainer from "./iconContainer";
import { NewAndTrendingItem } from "../../interfaces/content";

interface IPopularCard {
  contentPopularCard: NewAndTrendingItem | undefined;
}

const CardHeader = ({
  name,
  authorName,
}: {
  name: string | undefined;
  authorName: string | undefined;
}) => (
  <div className="flex flex-col items-center">
    <h3 className="text-text-color line-clamp-1 text-center">{name}</h3>
    <div className="flex flex-row items-center">
      <IconContainer text={authorName} avatar={avatar} />
    </div>
  </div>
);

const CardStats = ({
  comments,
  views,
  newView,
}: {
  comments: number | undefined;
  views: number | undefined;
  newView: number | undefined;
}) => (
  <div className="grid grid-cols-3">
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-text-color">{comments}</p>
        <FaPencilAlt color="rgb(248,250,252, 10)" />
      </div>
      <p className="text-text-color">comments</p>
    </div>
    <div className="flex flex-col items-center border-l border-r border-stone-50">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-text-color">{views}</p>
        <FaUser color="rgb(248,250,252, 10)" />
      </div>
      <p className="text-text-color">views</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-2">
        <p className="text-[#01D449]">+{newView}</p>
        <FaPlusCircle color="#01D449" />
      </div>
      <p className="text-text-color">likes</p>
    </div>
  </div>
);

export default function PopularCard({ contentPopularCard }: IPopularCard) {
  return (
    <div className="p-5 flex flex-col items-center relative bg-slate-500 col-span-1 hover:cursor-pointer">
      <div className="absolute inset-0">
        <img
          src={contentPopularCard?.contentImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#02112E] opacity-90 backdrop-blur-lg"></div>
      </div>
      <div className="relative z-10 flex flex-col gap-3 w-full">
        <CardHeader
          name={contentPopularCard?.name}
          authorName={contentPopularCard?.authorDetails.authorName}
        />
        <CardStats
          comments={contentPopularCard?.comments.length}
          views={contentPopularCard?.views.length}
          newView={contentPopularCard?.newView}
        />
        <div className="w-full flex justify-center relative">
          <div className="absolute top-[46px]">
            <div className="icon-container bg-[#02112A] bg-opacity-50 flex flex-row items-center gap-2 w-max h-6">
              {contentPopularCard?.type ? (
                getIconForType(contentPopularCard?.type)
              ) : (
                <FaFolder />
              )}
            </div>
          </div>
          <img src={image} alt="Foreground" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
}
