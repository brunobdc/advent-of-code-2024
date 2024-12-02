const textList = Deno.readTextFileSync("input.txt").split("\n");

function validLevels(levels: number[]) {
  let direction: "increasing" | "decreasing" | "not-defined" = "not-defined";
  let isSafe = true;
  for (let i = 0; isSafe && i < (levels.length - 1); i++) {
    if (direction === "not-defined") {
      if (levels[i] < levels[i + 1]) {
        direction = "increasing";
      }
      if (levels[i] > levels[i + 1]) {
        direction = "decreasing";
      }
    }

    const dif = direction === "increasing"
      ? levels[i + 1] - levels[i]
      : levels[i] - levels[i + 1];

    if (direction === "not-defined" || dif < 1 || dif > 3) {
      isSafe = false;
    }
  }
  return isSafe;
}

let result = 0;
for (const textLine of textList) {
  const levels = textLine.split(" ").map((v) => parseInt(v));
  if (validLevels(levels)) {
    result++;
    continue;
  }
  for (let i = 0; i < levels.length; i++) {
    if (validLevels(levels.filter((_, index) => i !== index))) {
      result++;
      break;
    }
  }
}

console.log(result);
