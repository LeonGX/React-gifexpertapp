export const getGifs=async(categorie)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&api_key=X9PbNwYHE4rTtB2744bKyPed6BbYxPA9&limit=10`
    const resp=await fetch(url);
    const {data}=await resp.json();
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    // console.log(gifs)
    return gifs;
}