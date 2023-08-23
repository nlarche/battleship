import { Coordinates, FromString, build } from "./Coordinates";

export interface Cell {
    position: Coordinates;
    containsBoat: boolean;
}

export function buildEmptyCell(position: string): Cell {
    return { position: FromString(position), containsBoat: false}
}

export function buildCellWithBoatFromPosition(position: string): Cell {
    return buildCellWithBoat(FromString(position))
}

export function buildCellWithBoat(position: Coordinates): Cell {
    return { position, containsBoat: true}
}

export function buildEmptyCellFromIndexes(x: number, y: number): Cell {
    return { position: build(String.fromCharCode(x + 64), y.toString()), containsBoat: false }
}
