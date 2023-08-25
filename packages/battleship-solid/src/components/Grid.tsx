import { For, Show } from "solid-js";

import { useGrid } from "../signals/grid";
import Cell from "./Cell";

function Grid() {
  const { displayableGrid, shoot } = useGrid();

  const clickCell = (cell: any) => shoot(cell);
  return (
    <>
      <For each={displayableGrid()}>
        {(row, i) => (
          <div class="rows">
            <span class="header">{row[0].position.x}</span>
            <For each={row}>
              {(cell) => (
                <div>
                  <Show when={i() === 0}>
                    <span class="header">{cell.position.y}</span>
                  </Show>
                  <Cell cell={cell} click={clickCell}></Cell>
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </>
  );
}

export default Grid;
