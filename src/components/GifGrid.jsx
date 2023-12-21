// Primero imports de react - Terceros - Nuestros. en ese orden
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    // Custom Hook useFetchGifs
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&  ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    // Podemos usar destructuracion o funcion que llama cada valor. o spred
                    images?.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>


        </>
    )
}
