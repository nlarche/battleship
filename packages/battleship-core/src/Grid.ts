import {
  Coordinates,
  FromString,
  Position,
  getNext,
  isEqual,
} from "./Coordinates";
import {
  buildEmptyCellFromIndexes,
  buildCellWithBoat,
  type Cell,
  toshootedCell,
} from "./Cell";
import { Boat, generateBoat } from "./Boat";

export type GameState = "HIT" | "MISS" | "WIN" | "UNSET";

export class Grid {
  // #grid doesn't work with proxy (so in vuejs)
  size = 0;
  private grid: Cell[] = [];
  private cellWithBoat: Cell[] = [];
  private totalShootToWin = 0;
  constructor(size: number) {
    this.size = size;
    this.initialize(size);
  }

  cells(): Cell[] {
    return this.grid;
  }

  shoot(coordinates: Coordinates): GameState {
    const cell = this.selectFromCoordinates(coordinates);
    if (cell) {
      this.updateGrid(cell, toshootedCell(cell));
      if (cell.containsBoat) {
        this.totalShootToWin--;
        return this.totalShootToWin > 0 ? "HIT" : "WIN";
      }
    }
    return "MISS";
  }

  select(position: Position): Cell | undefined {
    const coordinates = FromString(position);
    return this.selectFromCoordinates(coordinates);
  }

  selectFromCoordinates(coordinates: Coordinates): Cell | undefined {
    return this.grid.find((cell: Cell) => isEqual(cell.position, coordinates));
  }

  addBoat(boat: Boat): void {
    this.totalShootToWin += boat.size;
    const boatCells: Cell[] = this.findBoatCells(boat);
    this.cellWithBoat = [...this.cellWithBoat, ...boatCells];
    boatCells.forEach((boatCell) => {
      this.updateGrid(boatCell, buildCellWithBoat(boatCell.position));
    });
  }

  hasAlreadyBoat(position: Position) {
    return this.cellWithBoat.some((cell) =>
      isEqual(cell.position, FromString(position))
    );
  }

  private initialize(size: number) {
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
        this.grid.push(buildEmptyCellFromIndexes(i, j));
      }
    }
  }

  private updateGrid(oldCell: Cell, cell: Cell) {
    const grid = this.grid;
    grid[grid.indexOf(oldCell)] = cell;
    this.grid = [...grid];
  }

  private findBoatCells(boat: Boat) {
    let currentCell = boat.firstCell;
    const boatCells: Cell[] = [];
    for (let i = 0; i < boat.size; i++) {
      currentCell =
        i === 0 ? currentCell : getNext(currentCell, boat.direction);
      const cell = this.selectFromCoordinates(currentCell);
      if (cell) {
        boatCells.push(cell);
      } else {
        throw Error("Boat out of limit");
      }
    }
    return boatCells;
  }
}
