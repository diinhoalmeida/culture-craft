import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewAndTrendingMediumCard from "../../components/HomeComponents/newAndTrendingMediumCard";
import { SortSelect } from "../../components/ContentPageComponents/sortSelect";
import { SelectChangeEvent } from "@mui/material";
import { NewAndTrendingItem } from "../../interfaces/content";

const ContentPage = () => {
  const { pageName } = useParams();
  const [content, setContent] = useState<NewAndTrendingItem[]>([]);
  const [sortLikes, setSortLikes] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/${pageName}`);
        const data = await response.json();
        setContent(data[0][pageName + "Content"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [pageName]);

  const handleSortLikesChange = (event: SelectChangeEvent<string>) => {
    setSortLikes(event.target.value as string);
  };

  const handleSortDateChange = (event: SelectChangeEvent<string>) => {
    setSortDate(event.target.value as string);
  };

  const handleFilterTypeChange = (event: SelectChangeEvent<string>) => {
    setFilterType(event.target.value as string);
  };

  const sortedAndFilteredContent = () => {
    let filteredContent = [...content];

    if (filterType) {
      filteredContent = filteredContent.filter((item) =>
        filterType === "newContent" ? item.newContent : item.recommended
      );
    }

    if (sortLikes) {
      filteredContent.sort((a, b) =>
        sortLikes === "likesAsc"
          ? a.newLikes - b.newLikes
          : b.newLikes - a.newLikes
      );
    }

    if (sortDate) {
      filteredContent.sort((a, b) =>
        sortDate === "dateAsc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return filteredContent;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
        <SortSelect
          label="Sort by Likes"
          value={sortLikes}
          onChange={handleSortLikesChange}
          options={[
            { value: "", label: <em>None</em> },
            { value: "likesAsc", label: "Likes: Low to High" },
            { value: "likesDesc", label: "Likes: High to Low" },
          ]}
        />

        <SortSelect
          label="Sort by Date"
          value={sortDate}
          onChange={handleSortDateChange}
          options={[
            { value: "", label: <em>None</em> },
            { value: "dateAsc", label: "Date: Oldest First" },
            { value: "dateDesc", label: "Date: Newest First" },
          ]}
        />

        <SortSelect
          label="Filter by Type"
          value={filterType}
          onChange={handleFilterTypeChange}
          options={[
            { value: "", label: <em>None</em> },
            { value: "newContent", label: "New Content" },
            { value: "recommended", label: "Recommended" },
          ]}
        />
      </div>

      <div className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 pb-10">
        {sortedAndFilteredContent().map((item, index) => (
          <NewAndTrendingMediumCard
            key={index}
            contentTrendingMediumCard={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
