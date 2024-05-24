import { Avatar, Button, Rating } from "@mui/material";
import PlayerCard from "../../components/ContentDetailPageComponents/playerCard";
import imageTest from "../../assets/foto-perfil.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comment, NewAndTrendingItem } from "../../interfaces/content";

export default function ContentDetailPage() {
  const { id, type } = useParams();
  const [contentDetails, setContentDetails] =
    useState<NewAndTrendingItem | null>(null);
  const [similarItems, setSimilarItems] = useState<NewAndTrendingItem[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetchRelatedItems() {
      try {
        const response = await fetch(`http://localhost:3001/${type}s`);
        const data = await response.json();
        const item = data[0][type + "sContent"].find(
          (content: NewAndTrendingItem) => content.id === Number(id)
        );

        const similarItemsFilter = data[0][type + "sContent"].filter(
          (content: NewAndTrendingItem) => {
            return content.type === item.type && content.id !== item.id;
          }
        );

        setSimilarItems(similarItemsFilter.slice(0, 3));
        setContentDetails(item);

        if (item && item.comments) {
          setComments(item.comments);
        } else {
          setComments([]);
        }
      } catch (error) {
        console.error("Error fetching related items:", error);
      }
    }

    fetchRelatedItems();
  }, [id, type]);

  return (
    <div className="flex flex-col w-full gap-4 pb-10">
      <h1 className="text-3xl text-slate-50 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] lg:line-clamp-1 line-clamp-2 overflow-hidden">
        {contentDetails?.name}
      </h1>
      <PlayerCard type={type as string} />
      <div className="grid xs:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        <div className="sm:col-span-1 col-span-2 flex flex-col gap-3">
          <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            Credits & Info
          </h1>
          <div className="grid grid-cols-8 border-b border-slate-50 gap-3 pb-5">
            <div className="md-3:col-span-1 col-span-2">
              <Avatar alt="test" src={imageTest} />
            </div>
            <div className="fle flex-col items-center md-3:col-span-4 col-span-3">
              <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
                {contentDetails?.authorDetails.authorName}
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
          <div className="flex flex-col border-b border-slate-50 pb-5">
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
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex flex-col border-b border-slate-50 pb-5">
            <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
              Description by author
            </h1>
            <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
              {contentDetails?.description}
            </p>
          </div>
          <h2 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            Comments
          </h2>
          <div className="flex flex-col gap-1">
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
                    - {comment.createdAt}
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
        </div>
      </div>
    </div>
  );
}
