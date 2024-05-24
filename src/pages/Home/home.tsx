import "./home.css";
import { useEffect, useState } from "react";
import { NewAndTrendingItem } from "../../interfaces/content";
import NewAndTrendingSection from "../../components/HomeComponents/NewAndTrendingSection/newAndTrendingSection";
import PopularSection from "../../components/HomeComponents/PopularSection/popularSection";
import MostWatchedVideosSection from "../../components/HomeComponents/MostWatchedVideosSection/mostWatchedVideosSection";

export default function Home() {
  const [contentPage, setContentPage] = useState<NewAndTrendingItem[]>([]);
  const [newAndTrendingItemsToShow, setNewAndTrendingItemsToShow] = useState(9);
  const [popularItemsToShow, setPopularItemsToShow] = useState(4);
  const [disableButtonNewAndTrending, setDisableButtonNewAndTrending] =
    useState(false);
  const [disableButtonPopular, setDisableButtonPopular] = useState(false);
  const [newAndTrendingItemsRendered, setNewAndTrendingItemsRendered] =
    useState<NewAndTrendingItem[]>([]);
  const [popularContent, setPopularContent] = useState<NewAndTrendingItem[]>(
    []
  );
  const [mostWatchedVideos, setMostWatchedVideos] = useState<
    NewAndTrendingItem[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3001/contentHomePage")
      .then((response) => response.json())
      .then((data) => {
        setContentPage(data[0].newsAndTrending);
        setNewAndTrendingItemsRendered(data[0].newsAndTrending.slice(3, 12));
        setPopularContent(data[1].popular);
        setMostWatchedVideos(data[2].mostWatchedVideos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLoadMoreNewAndTrending = () => {
    const nextItemsToShow = newAndTrendingItemsToShow + 3;
    if (nextItemsToShow >= 15) {
      setDisableButtonNewAndTrending(true);
    }
    setNewAndTrendingItemsToShow(nextItemsToShow);
    setNewAndTrendingItemsRendered(contentPage.slice(2, nextItemsToShow + 2));
  };

  const handleLoadMorePopular = () => {
    const nextPopularItemsToShow = popularItemsToShow + 2;
    if (nextPopularItemsToShow >= 8) {
      setDisableButtonPopular(true);
    }
    setPopularItemsToShow(nextPopularItemsToShow);
  };

  return (
    <>
      <NewAndTrendingSection
        contentPage={contentPage}
        newAndTrendingItemsToShow={newAndTrendingItemsToShow}
        newAndTrendingItemsRendered={newAndTrendingItemsRendered}
        disableButtonNewAndTrending={disableButtonNewAndTrending}
        handleLoadMoreNewAndTrending={handleLoadMoreNewAndTrending}
      />
      <PopularSection
        popularContent={popularContent}
        popularItemsToShow={popularItemsToShow}
        disableButtonPopular={disableButtonPopular}
        handleLoadMorePopular={handleLoadMorePopular}
      />
      <MostWatchedVideosSection mostWatchedVideos={mostWatchedVideos} />
    </>
  );
}
