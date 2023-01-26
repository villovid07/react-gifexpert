/**
 * se la saca acapara que la funcion no se reprocese cuando hayan
 * cambios es decir sea constante independietemente de si se crea o no el
 * componente
 * @param {} category
 */
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xunyOopwDPPaOskPmbY2ZfEPlSqY5qIU&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
