import { useState } from 'react';
import { AddCategory }  from './components/AddCategory';

const GifExpert = () => {

  const [categories, setCategories ] = useState(['Pokemon','Simpson']);
  const onAddCategory = ( newCategory ) =>{
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  
  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* Input */}
      <AddCategory onNewCategory = { event => onAddCategory(event) }
       />
    {/* Listado de GIFS */}
    <ol>
        {
         categories.map( (category) => (
          <div key = {category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))
        }
      </ol>
      {/* Gif Item */}
    </>
  )
}

export default GifExpert
