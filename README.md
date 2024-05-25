# Documentation - Culture Craft

Welcome to the Culture Craft site documentation. In this documentation, you will find detailed information about the website's functionality and features, as well as the technologies used in development.

## Overview

The Culture Craft site aims to connect users from the geek world to a place where they can interact with like-minded individuals, discovering games, movies, audios, videos, and art. 

### Main Features

1. **Home Page:**
   - **News and Trending:** Displays the latest news and trending items.
   - **Popular Items Section:** Showcases popular content.
   - **Most Watched Videos Section:** Highlights the most-watched videos.
   - **Content Cards:** Content is presented through cards that include details about the content.

2. **Content Listing Page:**
   - Displays a list of items related to the current page (e.g., movies, audios, videos, art, or games).
   - **Search Field:** Users can search for content by name or category.
   - **Filters:** 
     - Sort items by likes (ascending or descending).
     - Sort by date (ascending or descending).
     - Filter between recommended and new content.
     - Filter by category.
   - **Content Listing:** Shows content based on user-selected filters.

3. **Content Details Page:**
   - **Content Player:** Allows users to play the selected content.
   - **Content Information:** Provides information about the creator, content details, and comments.
   - **Related Items Section:** Displays items related to the currently viewed content.

## Technologies Used

- React
- React Router DOM
- Material UI
- Emotion
- FontAwesome
- TypeScript
- ESLint
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies using npm.

```bash
npm install
```

3. Install `json-server` globally to mock a REST API.

```bash
npm install -g json-server
```

4. Start the JSON server with the provided database file on port 3001.

```bash
json-server --watch db.json -p 3001
```

5. Run the development server.

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Contribution

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Contact

For any questions or collaboration opportunities, you can contact me through the following channels:

- Email: edifilho1409@outlook.com
- LinkedIn: [https://www.linkedin.com/in/edilson-almeida-2684a620a/](https://www.linkedin.com/in/edilson-almeida-2684a620a/)
- GitHub: [https://github.com/diinhoalmeida](https://github.com/diinhoalmeida)
- Portfolio: [https://portfolio-project-chi-six.vercel.app/](https://portfolio-project-chi-six.vercel.app/)

Thank you for using the site! We hope you have a pleasant and useful experience.
