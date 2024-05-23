import "./home.css";

import NewAndTrendingBigCard from "../../components/HomeComponents/newAndTrendingBigCard";
import NewAndTrendingMediumCard from "../../components/HomeComponents/newAndTrendingMediumCard";
import NewAndTrendingLitteCard from "../../components/HomeComponents/newAndTrendingLitteCard";
import { useEffect, useState } from "react";
import { NewAndTrendingItem } from "../../interfaces/content";
import { Button } from "@mui/material";

export default function Home() {
  const [contentPage, setContentPage] = useState<NewAndTrendingItem[]>([]);
  const [itemsToShow, setItemsToShow] = useState(9);

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 3);
  };

  useEffect(() => {
    fetch("http://localhost:3001/newAndTranding")
      .then((response) => response.json())
      .then((data) => setContentPage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          <div className="grid grid-cols-3 gap-4">
            {contentPage.slice(2, itemsToShow + 2).map((item, index) => (
              <NewAndTrendingLitteCard
                key={index}
                contentTrendingLittleCard={item}
              />
            ))}
          </div>

          {itemsToShow < contentPage.length - 2 && ( // verifica se ainda há mais itens para mostrar
            <Button
              onClick={handleLoadMore}
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
          )}
        </div>
      </section>
      <section>
        <h1>Ola</h1>
      </section>
    </>
  );
}
