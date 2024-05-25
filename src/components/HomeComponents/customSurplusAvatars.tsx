import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { UserView } from "../../interfaces/content";

interface ICustomSurplusAvatars {
  total: number | undefined;
  view: UserView[] | undefined;
}

export default function CustomSurplusAvatars({
  total,
  view,
}: ICustomSurplusAvatars) {
  return (
    <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={total}
      sx={{
        "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 16 },
      }}
    >
      {view?.map((viewDetails, index) => {
        return (
          <Avatar
            key={index}
            alt={viewDetails.userName}
            src={viewDetails.userPhoto}
          />
        );
      })}
    </AvatarGroup>
  );
}
