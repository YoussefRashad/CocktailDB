import React, { useState, useEffect } from 'react'
import CocktailForm from '../components/CocktailForm'
import CocktailList from '../components/CocktailList'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("a")
    const [cocktails, setCocktails] = useState([])

    useEffect(()=>{
        setLoading(true);
        async function getData () {
            try{
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await response.json()
                const { drinks } = data
                if (drinks) {
                    const newCocktials = drinks.map((item)=>{
                        const { 
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strGlass} = item;
                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass
                        }
                    })
                    setCocktails(newCocktials)
                } else {
                    setCocktails([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getData()
    }, [searchTerm])

    return (
        <main>
            <CocktailForm setSearchTerm={setSearchTerm} />
            <CocktailList cocktails={cocktails} loading={loading} />
        </main>
    )
}

export default Home