import { useEffect, useState } from "react";
import {getGif} from '../helpers/getGif';

export const useFetchGifs = (categoria) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImagenes = async() => {
        const newImagenes = await getGif(categoria);
        setImagenes(newImagenes);
        setIsLoading(false);
    }

    useEffect( () => {
        //getGif(categoria).then(newImagenes => setImagenes(newImagen));
        getImagenes();
    }, [])


    return {
        imagenes,
        isLoading
    }
}