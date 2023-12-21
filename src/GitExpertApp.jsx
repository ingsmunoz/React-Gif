import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

  // Inicializado como un Arreglo
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    // Primera forma de adicionar otra categoria
    console.log(newCategory)
    setCategories([newCategory, ...categories]);

    // Segunda forma de adiccionar otra categoria.
    // setCategories( cat => [ ...cat, 'Valorant']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        // El patron de on = esta emitiendo Algo.
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      {
        categories?.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))

      }

      {/* Gif Item */}
    </>
  )
}
