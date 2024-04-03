import assert from "assert";

// Choose proper "import" depending on your PL.
import { mancalaResult } from "./t2-as/build/release.js";
// import { mancala_result as mancalaResult } from "./t2_rust/pkg/t1_rust.js"
// [Write your own "import" for other PLs.]

assert.strictEqual(mancalaResult(1,[11,12],2),30001);
assert.strictEqual(mancalaResult(1,[14],1),20001);
assert.strictEqual(mancalaResult(1,[13,12],2),20001);
assert.strictEqual(mancalaResult(1,[15,21,11],3),20008);
assert.strictEqual(mancalaResult(1,[11,21,12,13,21,14,21,15,21,16],10),15048);

console.log("🎉 You have passed all the tests provided.");
