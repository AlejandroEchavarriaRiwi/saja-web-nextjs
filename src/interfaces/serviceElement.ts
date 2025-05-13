import { ReactElement } from "react";

export interface IServiceElement {
    icon: ReactElement,
    title:string,
    description:string
    path?:string
}