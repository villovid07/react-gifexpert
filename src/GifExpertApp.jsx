import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        //push muta objetos por eso no funciona 
        //myCategories.push("Arcane");}

        if (categories.includes(newCategory)) {
            return;
        }
        setCategories(cat => [...cat, newCategory]);
    }

    const apiKey = "xunyOopwDPPaOskPmbY2ZfEPlSqY5qIU";


    return (
        <>
            {/**titulo */}
            <h1>GifExpertApp</h1>
            {/** Input */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/**Listado de gifts */}
            {/* is the same tha the following one
            categories.map(category => {
                return (<div>
                    <h3>{category}</h3>
                    <li>{category}</li>
                </div>);
            })*/}
            {
                categories.map((category) => (
                    <GiftGrid key={category} category={category} />)
                )
            }
        </>
    )
}
