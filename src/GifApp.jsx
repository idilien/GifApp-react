
// const APIKey = e4YJjX48KDGOo6Qkar16LjNuC0vUuxLn

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory =(New) =>{

      if(categories.includes( New))return;

      setCategories ([New,...categories])
      
    }

  return (
    <>
          
                    <h1>Gif App</h1>

                    <AddCategory 
                    onNewCategory={ onAddCategory}
                    />

         
                        {
                        categories.map(category =>( 
                            <GifGrid 
                                  key={category} 
                                  category={category}
                            />

                            ))
                        }  
                  
    </>
  )
}

export default GifApp