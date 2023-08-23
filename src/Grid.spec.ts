import { createBoat } from "./Boat";
import { buildCellWithBoatFromPosition, buildEmptyCell } from "./Cell";
import { Grid } from "./Grid";

describe("select a cell", () => {
  it("should select the right cell", () => {
    expect(new Grid(6).select("B3")).toStrictEqual(buildEmptyCell("B3"));
  });
  it("should select the right cell", () => {
    expect(new Grid(1).select("A1")).toStrictEqual(buildEmptyCell("A1"));
  });
});


describe("Build grid with boat", () => {
  it("should a boat of size 1", () => {
    const grid = new Grid(1)
    grid.addBoat(createBoat(1, 'A1'))
    expect(grid.select("A1")).toStrictEqual(buildCellWithBoatFromPosition("A1"));
  });

  it("should had a boat of size 2 horizontaly", () => {
    const grid = new Grid(3)
    grid.addBoat(createBoat(2, 'A1'))
    expect(grid.select("A1")).toStrictEqual(buildCellWithBoatFromPosition("A1"));
    expect(grid.select("A2")).toStrictEqual(buildCellWithBoatFromPosition("A2"));
    expect(grid.select("A3")).toStrictEqual(buildEmptyCell("A3"));

  });
  
  it("should had a boat of size 2 verticaly", () => {
    const grid = new Grid(3)
    grid.addBoat(createBoat(2, 'A1','VERTICAL'))
    expect(grid.select("A1")).toStrictEqual(buildCellWithBoatFromPosition("A1"));
    expect(grid.select("B1")).toStrictEqual(buildCellWithBoatFromPosition("B1"));
    expect(grid.select("A2")).toStrictEqual(buildEmptyCell("A2"));
    expect(grid.select("B2")).toStrictEqual(buildEmptyCell("B2"));
  });

  it("should had a boat of size 3 verticaly from C6", () => {
    const grid = new Grid(10)
    grid.addBoat(createBoat(3, 'C6','VERTICAL'))
    expect(grid.select("C6")).toStrictEqual(buildCellWithBoatFromPosition("C6"));
    expect(grid.select("D6")).toStrictEqual(buildCellWithBoatFromPosition("D6"));
    expect(grid.select("E6")).toStrictEqual(buildCellWithBoatFromPosition("E6"));
    expect(grid.select("A2")).toStrictEqual(buildEmptyCell("A2"));
    expect(grid.select("B2")).toStrictEqual(buildEmptyCell("B2"));
  });

  it("Should throw error if boat is out of limit", () => {
    const grid = new Grid(3)
    try {
      grid.addBoat(createBoat(3, 'B4','HORIZONTAL'))
    } catch (error) {
      expect(error).toBeDefined
    }
    
  });

})
