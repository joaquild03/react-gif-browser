import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch']);

    const addCategoria = (onNewCategoria) => {
        if (categorias.includes(onNewCategoria)) return;

        setCategorias([onNewCategoria, ...categorias]);
    }

    return (
        <>
            <h1>GIF Expert</h1>

            <AddCategory 
            //setCategorias={setCategorias}
                onNewCategoria={addCategoria}
            />

            
            { 
                categorias.map((categoria) => (
                    <GifGrid key={categoria}
                    categoria={categoria} />
                )) 
            }
                
        </>
    )
}