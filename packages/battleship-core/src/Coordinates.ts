import { Direction } from "./Direction";

declare const LatitudeTag: unique symbol;
type Latitude = string & { readonly [LatitudeTag]: "" }
export const latitude = (raw: string): Latitude => raw as Latitude


declare const LongitudeTag: unique symbol;
type Longitude = string & { readonly [LongitudeTag]: "" }
export const longitude = (raw: string): Longitude => raw as Longitude


export interface Coordinates {
    x: Latitude;
    y: Longitude;
}

export function build(x: string, y: string){
    return { x: latitude(x), y: longitude(y) }
}

export function FromString(position: String): Coordinates{
    const x = position.at(0);
    const y = position.slice(1);
    if (!x) {
        throw new Error('invalid poistion')
    }
    return build(x, y);
}

export function getNext(coordinates: Coordinates, direction: Direction){
    const x = direction === 'VERTICAL'? nextChar(coordinates.x): coordinates.x
    const y = direction === 'HORIZONTAL'? nextChar(coordinates.y): coordinates.y
    return build(x, y);
}

const nextChar = (char: String) => String.fromCharCode(char.charCodeAt(0) + 1 )

export function isEqual(a: Coordinates, b: Coordinates): Boolean {
    return a.x === b.x && a.y === b.y
}