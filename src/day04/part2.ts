const input = Deno.readTextFileSync("input.txt").split("\n");

let result = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (
      input[i][j] !== "A" || i === 0 || i === input.length - 1 || j === 0 ||
      j === input[i].length
    ) {
      continue;
    }

    if (
      ((input[i - 1][j - 1] === "M" && input[i + 1][j + 1] === "S") ||
        (input[i - 1][j - 1] === "S" && input[i + 1][j + 1] === "M")) &&
      ((input[i - 1][j + 1] === "M" && input[i + 1][j - 1] === "S") ||
        (input[i - 1][j + 1] === "S" && input[i + 1][j - 1] === "M"))
    ) {
      result++;
    }
  }
}

console.log(result);
