import type { Cell } from "battleship-core";

function CellComponent(props: { cell: Cell; click: (cell: Cell) => void }) {
  return (
    <div
      class={`cell ${props.cell.shooted ? "cell-shooted" : ""} 
 ${props.cell.shooted && props.cell.containsBoat ? "cell-hited " : ""}`}
      onclick={() => props.click(props.cell)}
    ></div>
  );
}

export default CellComponent;
