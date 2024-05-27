import imageTest from "../../assets/foto-perfil.jpg";
import { NewAndTrendingItem } from "../../interfaces/content";

type MoreLikeThisProps = {
  similarItems: NewAndTrendingItem[];
};

export const MoreLikeThis: React.FC<MoreLikeThisProps> = ({ similarItems }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
        More like this
      </h1>
      <div className="flex flex-col">
        {similarItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 border-b border-slate-50 pb-5 pt-5"
          >
            <img
              src={imageTest}
              alt="Background"
              className="object-cover w-[65px] h-[65px]"
            />
            <div className="flex flex-col">
              <h3 className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color line-clamp-1">
                {item.name}{" "}
              </h3>
              <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400 line-clamp-2">
                {item.description}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
