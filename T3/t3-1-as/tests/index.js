import assert from "assert";
import { mancalaBoard } from "../build/release.js";
// assert.strictEqual(add(1, 2), 3);
// assert.strictEqual(mancalaBoard(1,  [13, 15, 23, 16, 25, 11, 16, 15, 26, 12, 22, 13, 11, 21, 14, 25, 24, 16, 26, 23, 15],21), []);
assert.strictEqual(mancalaBoard(1,[13, 16, 22, 21, 14, 24, 16, 12, 16, 15, 26, 14, 11, 13, 16, 23, 14, 16, 15, 22, 25, 12, 26, 16, 21, 26, 25, 14, 24, 16, 15, 16, 13, 16, 14, 26, 23, 15, 16, 12, 25, 26, 22, 14, 23, 15, 24, 26, 25, 16, 13, 16],52),[]);
console.log("ok");
