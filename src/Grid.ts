import { Coordinates, FromString, getNext, isEqual } from "./Coordinates";
import { buildEmptyCellFromIndexes, buildCellWithBoat, type Cell } from "./Cell";
import { Boat } from "./Boat";

export class Grid {
    #grid: Cell[] = []
    constructor(size: number){
      this.#initialize(size);
    }
    
    #initialize(size: number) {
      for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
          this.#grid.push(buildEmptyCellFromIndexes(i, j));
  
        }
      }
    }
  
    select(position: String): Cell | undefined {
      const coordinates =  FromString(position);
      return this.#selectFromCoordinates(coordinates);
    }

    #selectFromCoordinates(coordinates: Coordinates): Cell | undefined {
      return this.#grid.find((cell: Cell) => isEqual(cell.position, coordinates))
    }
    
    addBoat(boat: Boat): void {        
        const boatCells: Cell[] = this.#findBoatCells(boat);

        boatCells.forEach(boatCell => {
          this.#grid.splice(this.#grid.indexOf(boatCell), 1)
          this.#grid.push(buildCellWithBoat(boatCell.position))
        })
    }

  #findBoatCells(boat: Boat) {
    let currentCell = boat.firstCell;
    const boatCells: Cell[] = [];
    for (let i = 0; i < boat.size; i++) {
      currentCell = i === 0 ? currentCell : getNext(currentCell, boat.direction);
      const cell = this.#selectFromCoordinates(currentCell);
      if (cell) {
        boatCells.push(cell);
      } else {
        throw Error('Boat out of limit')
      }
    }
    return boatCells;
  }
  }