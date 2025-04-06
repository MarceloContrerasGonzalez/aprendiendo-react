
export function News({news}){
    if (news.length === 0){
        return(
            <p>No se encontraron noticias relacionadas con tu busqueda</p>
        )
    }

    return(
        <section className='flex-container'>
      {news.map((article, index) =>(
        <article className='card' key={index}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage}  alt={article.title}/>
          <p>{article.description}</p>
          <a href={article.url} >Ver la noticia</a>
        </article>
      ))

      }
      </section>
    )
}