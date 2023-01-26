import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    /*
    esto se paso a un cutom hook 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []) */


    return (
        <>
            <h3>{category}</h3>
            {
                /*ways to make an ngif*/
                /*isLoading ? (<h2>Cargando...</h2>) : null*/
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        /*<li key={id}> {title}</li>*/
                        /*<GifItem key={image.id} title={image.title} url={image.url} />*/
                        /*uses the spread operator to use all their attibutes as props */
                        <GifItem key={image.id} {...image} />
                    )

                    )
                }
            </div>


        </>
    )
}
