import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDQ1ZjUyYmFjZTAwZDVmYWU1YWEyMjkyMzMxNDFkOCIsInN1YiI6IjY0Nzc0MjBjODlkOTdmMDExNjJiMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cUhUXYoO_ck8fue5BsWO8vby6yqUMWZamSZnTzgCbuk",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await response.json();
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
