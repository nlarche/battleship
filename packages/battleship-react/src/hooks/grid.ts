import { useMemo, useState } from "react";
import { Cell, Grid } from "battleship-core";

export function useGrid() {
  const gridSize = 10;
  const [grid, setGrid] = useState(new Grid(gridSize));

  const displayableGrid = useMemo(() => {
    return grid.toDisplayableGrid();
  }, [grid]);

  function shoot(cell: Cell) {
    grid.shoot(cell.position);
    setGrid(Object.assign(new Grid(gridSize), grid));
  }

  return { grid, displayableGrid, shoot };
}
