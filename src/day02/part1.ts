const textList = Deno.readTextFileSync("input.txt").split("\n");

let result = 0;
for (const textLine of textList) {
  const line = textLine.split(" ").map((v) => parseInt(v));
  let direction: "increasing" | "decreasing" | "not-defined" = "not-defined";
  let isSafe = true;
  for (let i = 0; isSafe && i < (line.length - 1); i++) {
    if (direction === "not-defined") {
      if (line[i] < line[i + 1]) {
        direction = "increasing";
      }
      if (line[i] > line[i + 1]) {
        direction = "decreasing";
      }
    }

    const dif = direction === "increasing"
      ? line[i + 1] - line[i]
      : line[i] - line[i + 1];

    if (direction === "not-defined" || dif < 1 || dif > 3) {
      isSafe = false;
    }
  }

  if (isSafe) {
    result++;
  }
}

console.log(result);
