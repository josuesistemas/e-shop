import CardArticle from "./CardsArticle/CardArticle";


const ArticleList =({articles,title})=>{

    return(
        <>
            <h1 className='subtitle'>{title}</h1>
            <div className='articles'>
                {articles.map(article => (
                    <article key={article.id}>
                        {<CardArticle
                            article={article}
                        />}
                    </article>
                ))}
            </div>
        </>
    )
}

export default ArticleList;