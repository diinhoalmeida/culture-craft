import PlayerCard from "../../components/ContentDetailPageComponents/playerCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comment, NewAndTrendingItem } from "../../interfaces/content";
import { HeaderCotentDetails } from "../../components/ContentDetailPageComponents/headerContentDetails";
import { MoreLikeThis } from "../../components/ContentDetailPageComponents/moreLikeThis";
import { AuthorInfo } from "../../components/ContentDetailPageComponents/CreditsInfo/authorInfo";
import { ContentInfo } from "../../components/ContentDetailPageComponents/CreditsInfo/contentInfo";
import { Comments } from "../../components/ContentDetailPageComponents/comments";
import { Description } from "../../components/ContentDetailPageComponents/description";

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
      <HeaderCotentDetails title={contentDetails?.name} />
      <PlayerCard type={type as string} />
      <div className="grid xs:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        <div className="sm:col-span-1 col-span-2 flex flex-col gap-3">
          <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
            Credits & Info
          </h1>
          <AuthorInfo authorDetails={contentDetails?.authorDetails} />
          <ContentInfo contentDetails={contentDetails} />
          <MoreLikeThis similarItems={similarItems} />
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <Description description={contentDetails?.description} />
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
}
