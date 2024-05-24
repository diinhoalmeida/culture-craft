import { Button } from "@mui/material";
import NewAndTrendingBigCard from "../newAndTrendingBigCard";
import NewAndTrendingMediumCard from "../newAndTrendingMediumCard";
import NewAndTrendingLittleCard from "../newAndTrendingLittleCard";
import { NewAndTrendingItem } from "../../../interfaces/content";

interface NewAndTrendingSectionProps {
  contentPage: NewAndTrendingItem[];
  newAndTrendingItemsToShow: number;
  newAndTrendingItemsRendered: NewAndTrendingItem[];
  disableButtonNewAndTrending: boolean;
  handleLoadMoreNewAndTrending: () => void;
}

const NewAndTrendingSection: React.FC<NewAndTrendingSectionProps> = ({
  contentPage,
  newAndTrendingItemsRendered,
  disableButtonNewAndTrending,
  handleLoadMoreNewAndTrending,
}) => {
  return (
    <section>
      <div className="flex flex-col gap-5 border-b border-slate-50 pb-10 relative">
        <h1 className="text-4xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color text-center">
          New and trending
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 min-h-[450px] gap-4">
          <NewAndTrendingBigCard contentTrendingBigCard={contentPage[0]} />
          <div className="grid grid-rows-2 col-span-2 sm:col-span-1 gap-4 ">
            {contentPage.slice(1, 3).map((item, index) => (
              <NewAndTrendingMediumCard
                key={index}
                contentTrendingMediumCard={item}
              />
            ))}
          </div>
        </div>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {newAndTrendingItemsRendered.map((item, index) => (
            <li key={index}>
              <NewAndTrendingLittleCard contentTrendingLittleCard={item} />
            </li>
          ))}
        </ul>
        <Button
          disabled={disableButtonNewAndTrending}
          onClick={handleLoadMoreNewAndTrending}
          sx={{
            bgcolor: "#ffffff",
            border: "none",
            color: "#000",
            position: "absolute",
            bottom: -20,
            right: 20,
            borderRadius: "20px",
            width: "max-width",
            "&:hover": {
              bgcolor: "#e6dfda",
              border: "none",
            },
          }}
        >
          Load more
        </Button>
      </div>
    </section>
  );
};

export default NewAndTrendingSection;
