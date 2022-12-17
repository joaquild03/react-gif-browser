import PropTypes from 'prop-types';
import {GifItem} from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {

    const {imagenes, isLoading} = useFetchGifs(categoria);


    return (
        <>
            <h3>{categoria}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
                
             /*
                <LoadingMessage isLoading={isLoading}/>              
            
                isLoading
                ? (<h2>Cargando...</h2>)
                :null
             */
            }

            <div className="card-grid">
                {
                    imagenes.map( (imagen) => (
                        <GifItem
                            key={imagen.id}
                            { ...imagen}
                        />
                    ))
                }
                
            </div>
        </>

    )
}

GifGrid.prototype = {
    categoria: PropTypes.string
}