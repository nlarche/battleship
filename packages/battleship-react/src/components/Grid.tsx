import { useGrid } from "../hooks/grid";
import Cell from "./Cell";

function Grid() {
  const { displayableGrid, shoot } = useGrid();

  const click = (cell: any) => shoot(cell);

  return (
    <>
      {displayableGrid &&
        displayableGrid.map((row, i) => {
          return (
            <div className="rows" key={i}>
              <span className="header">{row[0].position.x}</span>
              {row.map((cell) => {
                return (
                  <div key={cell.position.y}>
                    {i === 0 ? (
                      <span className="header">{cell.position.y}</span>
                    ) : null}
                    <Cell cell={cell} click={click}></Cell>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}

export default Grid;
