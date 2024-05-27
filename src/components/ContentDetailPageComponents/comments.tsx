import { Avatar, Rating } from "@mui/material";
import { Comment } from "../../interfaces/content";
import { formatDate } from "../../utils/formatDate";

type CommentsProps = {
  comments: Comment[];
};

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
        Comments
      </h2>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex flex-col border-b border-slate-50 pb-5 gap-3"
        >
          <div className="flex flex-row items-center gap-3">
            <Avatar
              alt={comment.commentUserName}
              src={comment.commentUserPhoto}
            />
            <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
              {comment.commentUserName}
            </p>
            <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-gray-400">
              - {formatDate(comment.createdAt)}
            </p>
          </div>
          <div>
            <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
              {comment.commentText}
            </p>
          </div>
          <Rating name="read-only" value={3} readOnly />
        </div>
      ))}
    </div>
  );
};
