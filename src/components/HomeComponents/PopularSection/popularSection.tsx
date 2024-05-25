// PopularSection.js
import { Button } from "@mui/material";
import PopularCard from "../popularCard";
import { NewAndTrendingItem } from "../../../interfaces/content";

interface PopularSectionProps {
  popularContent: NewAndTrendingItem[];
  popularItemsToShow: number;
  disableButtonPopular: boolean;
  handleLoadMorePopular: () => void;
}

const PopularSection: React.FC<PopularSectionProps> = ({
  popularContent,
  popularItemsToShow,
  disableButtonPopular,
  handleLoadMorePopular,
}) => {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color text-center">
          Popular
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {popularContent.slice(0, popularItemsToShow).map((item, index) => (
            <PopularCard key={index} contentPopularCard={item} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <Button
            disabled={disableButtonPopular}
            onClick={handleLoadMorePopular}
            sx={{
              bgcolor: "#ffffff",
              border: "none",
              color: "#000",
              borderRadius: "80px",
              "&:hover": {
                bgcolor: "#e6dfda",
                border: "none",
              },
            }}
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
