import { Avatar, Button } from "@mui/material";
import imageTest from "../../../assets/foto-perfil.jpg";
import { NewAndTrendingItem } from "../../../interfaces/content";

type AuthorInfoProps = {
  authorDetails: NewAndTrendingItem["authorDetails"] | undefined;
};

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ authorDetails }) => {
  return (
    <div className="grid grid-cols-8 gap-5">
      <div className="md-3:col-span-1 col-span-2">
        <Avatar alt={authorDetails?.authorName} src={imageTest} />
      </div>
      <div className="flex flex-col md-3:col-span-4 col-span-3">
        <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
          {authorDetails?.authorName}
        </p>
        <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
          Author
        </p>
      </div>
      <div className="md-3:col-span-3 col-span-2 flex justify-center items-center">
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
    </div>
  );
};
