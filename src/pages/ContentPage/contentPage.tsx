import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewAndTrendingMediumCard from "../../components/HomeComponents/newAndTrendingMediumCard";
import { SortSelect } from "../../components/ContentPageComponents/sortSelect";
import { SelectChangeEvent, TextField } from "@mui/material";
import { NewAndTrendingItem } from "../../interfaces/content";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const ContentPage = () => {
  const { pageName } = useParams();
  const [content, setContent] = useState<NewAndTrendingItem[]>([]);
  const [sortLikes, setSortLikes] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [filterType, setFilterType] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/${pageName}`);
        const data = await response.json();
        const pageContent = data[0][pageName + "Content"];
        setContent(pageContent);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(pageContent.map((item: NewAndTrendingItem) => item.category))
        );
        setCategories(uniqueCategories as []);
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

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value as string);
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const sortedAndFilteredContent = () => {
    let filteredContent = [...content];

    if (searchQuery) {
      filteredContent = filteredContent.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterType) {
      filteredContent = filteredContent.filter((item) =>
        filterType === "newContent" ? item.newContent : item.recommended
      );
    }

    if (category) {
      filteredContent = filteredContent.filter(
        (item) => item.category === category
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
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        fullWidth
        margin="normal"
        sx={{ bgcolor: "#1375c0" }}
      />

      <div className="grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-4">
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

        <SortSelect
          label="Filter by Category"
          value={category}
          onChange={handleCategoryChange}
          options={[
            { value: "", label: <em>None</em> },
            ...categories.map((cat) => ({
              value: cat,
              label: capitalizeFirstLetter(cat),
            })),
          ]}
        />
      </div>

      {sortedAndFilteredContent().length === 0 ? (
        <div className="w-full h-[450px] flex">

          <p className="text-4xl">No items found.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 pb-10">
          {sortedAndFilteredContent().map((item, index) => (
            <NewAndTrendingMediumCard
              key={index}
              contentTrendingMediumCard={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentPage;
