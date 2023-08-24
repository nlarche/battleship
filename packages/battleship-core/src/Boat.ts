import { Coordinates, FromString, Position } from "./Coordinates";
import { Direction } from "./Direction";
import { Grid } from "./Grid";
import { convertNumberToLetter } from "./utils";

export interface Boat {
  firstCell: Coordinates;
  size: number;
  direction: Direction;
}

export function createBoat(
  size: number,
  firstCell: Position,
  direction: Direction = "HORIZONTAL"
): Boat {
  return { size, direction, firstCell: FromString(firstCell) };
}

const boats = [2, 3, 3, 4, 5];

export function generateBoat(grid: Grid): Boat[] {
  const gridSize = grid.size;
  // don't care about overlaping for now
  return boats.map((size: number) => {
    const direction = Math.random() < 0.5 ? "HORIZONTAL" : "VERTICAL";
    let maxHorizontal = size;
    let maxVertical = size;
    if (direction === "HORIZONTAL") {
      maxHorizontal = Math.max(
        1,
        Math.floor(Math.random() * (gridSize - size))
      );
    } else {
      maxVertical = Math.max(1, Math.floor(Math.random() * (gridSize - size)));
    }
    const position: Position = `${convertNumberToLetter(
      maxVertical
    )}${maxHorizontal}`;

    return createBoat(size, position, direction);
  });
}
