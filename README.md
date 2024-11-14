Movie Explorer is a React-based web application that allows users to search for movies, view detailed information, and explore favorite films. The app utilizes the OMDb API (Open Movie Database) to fetch movie data and display it to users.



clone :
git clone https://github.com/Kurubasaipraveen/Plattr-frontend-ass
cd movie
npm install
npm start

vercel-depoy=>:
https://plattr-frontend-ass.vercel.app/



Features
Search for Movies: Allows users to search for movies by title, which returns a list of movie results.
Movie Details Page: Displays detailed information about a movie, including:
Title
Plot/Description
Director
Cast
Release Date
Runtime
IMDb Rating (if available)
Movie Poster
Responsive Design: The app is designed to be mobile-friendly and responsive, ensuring a seamless experience across both desktop and mobile devices.
Error Handling: If the API request fails or no results are found, the app displays an appropriate error message.
Loading Indicators: While waiting for API responses, the app shows loading indicators to inform the user.
Favorite Movies: Users can "favorite" movies, which are stored locally and can be viewed in a favorites page.
Pagination: The movie search results are paginated to prevent overwhelming the user with too many results at once.
Genre Filtering: Allows users to filter movie search results by genre (e.g., Action, Comedy, Drama, etc.).
Infinite Scrolling: Loads more movie results automatically as the user scrolls down the search results page.
Technologies Used
React.js: JavaScript library for building dynamic user interfaces.
React Router: For routing and navigation between different pages (e.g., search results, movie details).
OMDb API: An external API used to fetch movie data based on search queries and movie IDs.
CSS: Custom styling for the app, ensuring a responsive and mobile-friendly design.
Bootstrap: Used for additional UI components and responsive grid system.
Local Storage: Used to store favorite movies locally for persistence across page reloads.


Usage
Search for Movies: On the home page, type a movie title in the search bar and click "Search". This will take you to the search results page.
View Movie Details: Click on any movie from the search results to view its detailed information, such as the plot, director, cast, and rating.
Favorite Movies: Users can "favorite" a movie by clicking a button on the movie details page. These movies are saved locally and can be viewed later in the favorites section.


Technologies and Libraries
React.js: A JavaScript library for building user interfaces.
React Router DOM: A routing library for navigation within the app.
OMDb API: An external API for fetching movie data.
Bootstrap: A front-end framework for styling and responsiveness.
CSS: Custom styles for the layout and appearance of the app



