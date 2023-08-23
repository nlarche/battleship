import { Cell } from "./src/Cell";
describe("test shout function", () => {
  it("Should not shout if cell contains boat", () => {
    expect(shout({ containsBoat: false})).toBe(false);
  });
  it("should shout if cell contains boat", () => {
    expect(shout({ containsBoat: true})).toBe(true);
  });
});


// declare const priceTag: unique symbol
// type Price = number & { readonly [priceTag]: "" }




function shout(cell: Pick<Cell, "containsBoat">): Boolean{
  return cell.containsBoat
}

