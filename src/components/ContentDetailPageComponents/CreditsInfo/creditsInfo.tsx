import { Button } from "@mui/material";
import { NewAndTrendingItem } from "../../../interfaces/content";
import { AuthorInfo } from "./authorInfo";
import { ContentInfo } from "./contentInfo";

type CreditsInfoProps = {
  contentDetails: NewAndTrendingItem | null;
};

export const CreditsInfo: React.FC<CreditsInfoProps> = ({ contentDetails }) => {
  return (
    <div className="sm:col-span-1 col-span-2 flex flex-col gap-3">
      <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
        Credits & Info
      </h1>
      <AuthorInfo authorDetails={contentDetails?.authorDetails} />
      <div className="flex justify-center items-center">
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
          Follow
        </Button>
      </div>
      <ContentInfo contentDetails={contentDetails} />
    </div>
  );
};
