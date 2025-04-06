import { useState, useEffect } from "react";
import "./App.css";
import { News } from "./components/News";
import useNews from "./hooks/useNews";

function App() {
  const { news, fetchNews } = useNews();  // Llamamos al hook que trae las noticias
  const [text, setText] = useState("");  // Estado para el texto del input
  const [search, setSearch] = useState("tech");  // Estado para el texto del input

  // Realizamos una búsqueda inicial cuando el componente se monta por primera vez
  useEffect(() => {
    fetchNews(search);  // Usamos la función fetchNews para cargar noticias
  }, [search]);



  return (
    <main>
      <h1>News App</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}  // Actualizamos el estado de 'text' con lo que el usuario escribe
      />
      <button onClick={()=> setSearch(text)}>⚙️Buscar</button>  {/* Al hacer clic, ejecutamos la búsqueda */}
      <News news={news} />  {/* Pasamos las noticias al componente News para que las muestre */}
    </main>
  );
}

export default App;
