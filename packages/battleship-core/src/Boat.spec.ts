import { generateBoat } from "./Boat";
import { Grid } from "./Grid";

describe("generate boat", () => {
  it.only("should generateBoat", () => {
    const boats = generateBoat(new Grid(10));
    console.log(boats);
    expect(boats.length).toStrictEqual(5);
  });
});
