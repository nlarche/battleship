import { Cell, Grid } from "battleship-core";
import { createSignal } from "solid-js";

const gridSize = 10;
const initial = new Grid(gridSize);

export function useGrid() {
  const [grid, setGrid] = createSignal(initial);

  const displayableGrid = () => {
    console.log(grid());
    return grid().toDisplayableGrid();
  };

  function shoot(cell: Cell) {
    initial.shoot(cell.position);
    setGrid(Object.assign(new Grid(gridSize), initial));
  }

  return { displayableGrid, shoot };
}
