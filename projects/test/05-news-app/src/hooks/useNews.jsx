import { useState } from "react";

const useNews = () => {
  const [news, setNews] = useState([]);
  
  // Función para hacer la búsqueda de noticias
  const fetchNews = (query) => {

    fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
      })
      .catch(error => console.error("Error fetching news:", error));
  };

  return { news, fetchNews };
};

export default useNews;
