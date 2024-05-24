import { NewAndTrendingItem } from "../../../interfaces/content";
import MostWatchedVideosBigCard from "../mostWatchedVideosBigCard";
import MostWatchedVideosLittleCard from "../mostWatchedVideosLittleCard";

interface MostWatchedVideosSectionProps {
  mostWatchedVideos: NewAndTrendingItem[];
}

const MostWatchedVideosSection: React.FC<MostWatchedVideosSectionProps> = ({
  mostWatchedVideos,
}) => {
  return (
    <section>
      <div className="flex flex-col gap-5 border-b border-slate-50 pb-10 relative">
        <h1 className="text-4xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color text-center">
          Most watched videos
        </h1>
        <div className="grid md-2:grid-cols-3 grid-cols-2 min-h-[450px] gap-4">
          <MostWatchedVideosBigCard
            mostWatchedVideosBigCardContent={mostWatchedVideos[0]}
          />
          <div className="grid grid-rows-5 md-2:col-span-1 col-span-2 gap-4">
            {mostWatchedVideos.slice(1).map((item, index) => (
              <MostWatchedVideosLittleCard
                key={index}
                mostWatchedVideosLittleCardContent={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostWatchedVideosSection;
