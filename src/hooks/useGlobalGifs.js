import { useContext } from "react/cjs/react.development";
import GifsContext from "../context/GifsContext";

export default function useGlobalGifs() {
    return useContext(GifsContext).gifs;
}