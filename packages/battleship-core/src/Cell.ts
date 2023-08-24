import { Coordinates, FromString, Position, build } from "./Coordinates";

export interface Cell {
  position: Coordinates;
  containsBoat: boolean;
  shooted: boolean;
}

export function buildEmptyCell(position: Position): Cell {
  return {
    position: FromString(position),
    containsBoat: false,
    shooted: false,
  };
}

export function buildCellWithBoatFromPosition(position: Position): Cell {
  return buildCellWithBoat(FromString(position));
}

export function buildCellWithBoat(position: Coordinates): Cell {
  return { position, containsBoat: true, shooted: false };
}

export function buildEmptyCellFromIndexes(x: number, y: number): Cell {
  return {
    position: build(String.fromCharCode(x + 64), y.toString()),
    containsBoat: false,
    shooted: false,
  };
}

export function toshootedCell(cell: Cell) {
  return { ...cell, shooted: true };
}
