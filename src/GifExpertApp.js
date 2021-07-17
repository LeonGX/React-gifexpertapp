import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = ({categorie}) => {
    // const categories=['One Punch', 'Samurai X', 'Dragon Ball'];
    const[categories,setCategories]=useState(['Formula 1'])

    // const handleAdd=()=>{
    //     setCategories([...categories,'Evangelion'])
    // }
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        
        <ol>
           {categories.map(categorie=>
            <GifGrid 
            key={categorie}
            categorie={categorie}/>
           )}
        </ol>
        </>
    )
}
