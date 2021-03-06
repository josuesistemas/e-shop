import {createContext, useContext, useState, useEffect} from 'react'

const ArticleFilterContext = createContext()

export function useArticleFilter(){
    return useContext(ArticleFilterContext)
}

export const ArticleFilter=({children})=>{

    const [filter, setFilter] = useState('')

    const value = {
        filter,
        setArticleFlter
    }

    function setArticleFlter(filter){
        return setFilter(filter)
    }

    useEffect(() => {
        setFilter('')
    }, [])

    return(
        <ArticleFilterContext.Provider value={value}>
            {children}
        </ArticleFilterContext.Provider>
    )
}