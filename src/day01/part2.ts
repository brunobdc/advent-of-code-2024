const textList = Deno.readTextFileSync("input.txt").split("\n");

const firstList = [];
const secondList = [];

for (const line of textList) {
  const [first, second] = line.split("   ").map((v) => parseInt(v));
  firstList.push(first);
  secondList.push(second);
}

let result = 0;
for (const fv of firstList) {
  result += fv * secondList.reduce((sum, sv) => sv === fv ? sum + 1 : sum, 0);
}

console.log(result);
