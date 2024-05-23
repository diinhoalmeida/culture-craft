import { Avatar, Button, Tooltip } from "@mui/material";
import { FaFolder } from "react-icons/fa";
import { NewAndTrendingItem } from "../../interfaces/content";
import { getIconForType } from "../../utils/getIconForType";

interface INewAndTrendingLitteCard {
  contentTrendingLittleCard: NewAndTrendingItem | undefined;
}

export default function NewAndTrendingLitteCard({
  contentTrendingLittleCard,
}: INewAndTrendingLitteCard) {
  return (
    <div className="col-span-1 grid grid-cols-8 border-b border-slate-50 pb-3 gap-2">
      <div className="relative col-span-3">
        <img
          src={contentTrendingLittleCard?.contentImage}
          alt="Background"
          className="w-full h-full object-cover z-0 "
        />
      </div>
      <div className="flex flex-col w-full col-span-3 justify-between">
        <Tooltip title={contentTrendingLittleCard?.name} arrow>
          <h3 className="line-clamp-2 overflow-hidden text-text-color">
            {contentTrendingLittleCard?.name}
          </h3>
        </Tooltip>
        <div className="icon-container bg-[#02112A] bg-opacity-50 flex flex-row items-center gap-2 w-max h-6">
          {contentTrendingLittleCard?.type ? (
            getIconForType(contentTrendingLittleCard.type)
          ) : (
            <FaFolder />
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-between items-end">
        <Button
          sx={{
            bgcolor: "#ffffff",
            border: "none",
            color: "#000",
            width: "20%",
            "&:hover": {
              bgcolor: "#e6dfda",
              border: "none",
            },
          }}
        >
          Open
        </Button>
        <Avatar
          alt={contentTrendingLittleCard?.authorDetails.authorName}
          src={contentTrendingLittleCard?.authorDetails.authorPhoto}
          sx={{ width: 24, height: 24 }}
        />
      </div>
    </div>
  );
}
