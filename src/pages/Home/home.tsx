import "./home.css";
import NewAndTrendingBigCard from "../../components/HomeComponents/newAndTrendingBigCard";
import NewAndTrendingMediumCard from "../../components/HomeComponents/newAndTrendingMediumCard";
import NewAndTrendingLittleCard from "../../components/HomeComponents/newAndTrendingLittleCard";
import { useEffect, useState } from "react";
import { NewAndTrendingItem } from "../../interfaces/content";
import { Button } from "@mui/material";
import PopularCard from "../../components/HomeComponents/popularCard";

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

  useEffect(() => {
    fetch("http://localhost:3001/contentHomePage")
      .then((response) => response.json())
      .then((data) => {
        setContentPage(data[0].newsAndTrending);
        setNewAndTrendingItemsRendered(data[0].newsAndTrending.slice(3, 12));
        setPopularContent(data[1].popular);
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
      <section>
        <div className="flex flex-col gap-5 border-b border-slate-50 pb-10 relative">
          <h1 className="text-center text-4xl">New and trending</h1>
          <div className="grid grid-cols-3 min-h-[450px] gap-4">
            <NewAndTrendingBigCard contentTrendingBigCard={contentPage[0]} />
            <div className="grid grid-rows-2 col-span-1 gap-4">
              {contentPage.slice(1, 3).map((item, index) => (
                <NewAndTrendingMediumCard
                  key={index}
                  contentTrendingMediumCard={item}
                />
              ))}
            </div>
          </div>
          <ul className="grid grid-cols-3 gap-4">
            {newAndTrendingItemsRendered.map((item, index) => (
              <li key={index}>
                <NewAndTrendingLittleCard contentTrendingLittleCard={item} />
              </li>
            ))}
          </ul>
          <Button
            disabled={disableButtonNewAndTrending}
            onClick={handleLoadMoreNewAndTrending}
            sx={{
              bgcolor: "#ffffff",
              border: "none",
              color: "#000",
              position: "absolute",
              bottom: -20,
              right: 20,
              borderRadius: "20px",
              width: "max-width",
              "&:hover": {
                bgcolor: "#e6dfda",
                border: "none",
              },
            }}
          >
            Load more
          </Button>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-4xl">Popular</h1>
          <div className="grid grid-cols-2 gap-4">
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
      
    </>
  );
}
