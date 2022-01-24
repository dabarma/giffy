import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {
            loading ? <div>Loading...</div> : <div><h5>{decodeURI(keyword)}</h5> <ListOfGifs gifs={gifs}></ListOfGifs></div>
        }
    </>
}