const input = Deno.readTextFileSync("input.txt").split("\n");

let result = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] !== "X") {
      continue;
    }

    const h = j <= input[i].length - 4 && input[i][j + 1] === "M" &&
      input[i][j + 2] === "A" && input[i][j + 3] === "S";
    const hb = j >= 3 && input[i][j - 1] === "M" && input[i][j - 2] === "A" &&
      input[i][j - 3] === "S";
    const v = i <= input.length - 4 && input[i + 1][j] === "M" &&
      input[i + 2][j] === "A" && input[i + 3][j] === "S";
    const vb = i >= 3 && input[i - 1][j] === "M" && input[i - 2][j] === "A" &&
      input[i - 3][j] === "S";
    const dtr = i >= 3 && j <= input[i].length - 4 &&
      input[i - 1][j + 1] === "M" && input[i - 2][j + 2] === "A" &&
      input[i - 3][j + 3] === "S";
    const dbr = i <= input.length - 4 && j <= input[i].length - 4 &&
      input[i + 1][j + 1] === "M" && input[i + 2][j + 2] === "A" &&
      input[i + 3][j + 3] === "S";
    const dtl = i >= 3 && j >= 3 && input[i - 1][j - 1] === "M" &&
      input[i - 2][j - 2] === "A" && input[i - 3][j - 3] === "S";
    const dbl = i <= input.length - 4 && j >= 3 &&
      input[i + 1][j - 1] === "M" && input[i + 2][j - 2] === "A" &&
      input[i + 3][j - 3] === "S";

    if (h) {
      result++;
    }
    if (hb) {
      result++;
    }
    if (v) {
      result++;
    }
    if (vb) {
      result++;
    }
    if (dtr) {
      result++;
    }
    if (dbr) {
      result++;
    }
    if (dtl) {
      result++;
    }
    if (dbl) {
      result++;
    }
  }
}

console.log(result);
