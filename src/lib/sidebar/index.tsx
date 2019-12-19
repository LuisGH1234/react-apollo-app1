import React from "react";
import { LibraryMusicSharp, SearchSharp } from "@material-ui/icons";

interface IElement {
    text: string;
    icon: JSX.Element;
    route: string;
}

const elements: IElement[] = [
    {
        text: "Inicio",
        icon: <LibraryMusicSharp />,
        route: "/home"
    },
    {
        text: "Buscar",
        icon: <SearchSharp />,
        route: "/search"
    }
];

export default elements;
