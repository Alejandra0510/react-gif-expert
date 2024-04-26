//Petición Http
export const getGifs = async( category ) => {

    const ruta     = `https://api.giphy.com/v1/gifs/search?api_key=ruggDkiFMmbhHnvvlRQaSQRMWPe5z3Sa&q=${ category }&limit=10`;
    const resp     = await fetch(ruta);
    const { data } = await resp.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}