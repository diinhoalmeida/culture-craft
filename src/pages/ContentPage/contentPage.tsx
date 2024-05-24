import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewAndTrendingMediumCard from "../../components/HomeComponents/newAndTrendingMediumCard";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ContentPage = () => {
  const { pageName } = useParams();
  const [content, setContent] = useState([]);
  const [sortLikes, setSortLikes] = useState('');
  const [sortDate, setSortDate] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/${pageName}`);
        const data = await response.json();
        setContent(data[0].moviesContent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [pageName]);

  const handleSortLikesChange = (event) => {
    setSortLikes(event.target.value);
  };

  const handleSortDateChange = (event) => {
    setSortDate(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const sortedAndFilteredContent = () => {
    let filteredContent = [...content];

    if (filterType) {
      filteredContent = filteredContent.filter(item => 
        filterType === 'newContent' ? item.newContent : item.recommended
      );
    }

    if (sortLikes) {
      filteredContent.sort((a, b) => 
        sortLikes === 'likesAsc' ? a.newLikes - b.newLikes : b.newLikes - a.newLikes
      );
    }

    if (sortDate) {
      filteredContent.sort((a, b) => 
        sortDate === 'dateAsc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    return filteredContent;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel sx={{color: '#fff'}} id="sort-likes-label">Sort by Likes</InputLabel>
          <Select
            labelId="sort-likes-label"
            value={sortLikes}
            onChange={handleSortLikesChange}
            label="Sort by Likes"
            sx={{ backgroundColor: '#1375c0', color: '#fff' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="likesAsc">Likes: Low to High</MenuItem>
            <MenuItem value="likesDesc">Likes: High to Low</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel sx={{color: '#fff'}} id="sort-date-label">Sort by Date</InputLabel>
          <Select
            labelId="sort-date-label"
            value={sortDate}
            onChange={handleSortDateChange}
            label="Sort by Date"
            sx={{ backgroundColor: '#1375c0', color: 'white' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="dateAsc">Date: Oldest First</MenuItem>
            <MenuItem value="dateDesc">Date: Newest First</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel sx={{color: '#fff'}} id="filter-type-label">Filter by Type</InputLabel>
          <Select
            labelId="filter-type-label"
            value={filterType}
            onChange={handleFilterTypeChange}
            label="Filter by Type"
            sx={{ backgroundColor: '#1375c0', color: 'white' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="newContent">New Content</MenuItem>
            <MenuItem value="recommended">Recommended</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-3 gap-4 pb-10">
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
