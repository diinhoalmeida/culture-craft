import { Rating } from "@mui/material";
import { formatDate } from "../../../utils/formatDate";
import { NewAndTrendingItem } from "../../../interfaces/content";

type ContentInfoProps = {
  contentDetails: NewAndTrendingItem | null;
};

export const ContentInfo: React.FC<ContentInfoProps> = ({ contentDetails }) => {
  return (
    <div className="flex flex-col border-b border-slate-50 pb-5">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
            Date:
          </p>
        </div>
        <div className="col-span-2">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            {formatDate(contentDetails?.createdAt as string)}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
            View:
          </p>
        </div>
        <div className="col-span-2">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            {contentDetails?.view}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
            Faves:
          </p>
        </div>
        <div className="col-span-2">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            {contentDetails?.faves}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
            Votes:
          </p>
        </div>
        <div className="col-span-2">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            {contentDetails?.votes}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
            Score:
          </p>
        </div>
        <div className="col-span-2">
          <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            {contentDetails?.score}
          </p>
        </div>
      </div>
      <div>
        <Rating name="read-only" value={contentDetails?.score} readOnly />
      </div>
    </div>
  );
};
