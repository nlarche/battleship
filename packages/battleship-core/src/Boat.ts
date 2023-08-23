import { Coordinates, FromString } from "./Coordinates";
import { Direction } from "./Direction";


export interface Boat {
    firstCell: Coordinates;
    size: number;
    direction: Direction

}

export function createBoat(size: number, firstCell: String, direction: Direction = 'HORIZONTAL'): Boat{
    return { size, direction, firstCell: FromString(firstCell) }
}