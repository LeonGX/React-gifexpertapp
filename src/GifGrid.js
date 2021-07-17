import React from 'react'

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({categorie}) => {

    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(categorie)
    //     .then(setImages)
    // },[categorie])
    

    const {data:images,loading}=useFetchGifs(categorie);
    
    return (
        <div className='card-grid'>
            <h3>{categorie}</h3>
            {loading&&<p className='animate__animated animate__flash'>Loading</p>}
            <ul>
                {images.map(image=>{
                   return <GifGridItem key={image.id}{...image}/> 
                })}
            </ul>
        </div>
    )
}
