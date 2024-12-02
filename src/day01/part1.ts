const textList = Deno.readTextFileSync("input.txt").split("\n");

const firstList = [];
const secondList = [];

for (const line of textList) {
  const [first, second] = line.split("   ").map((v) => parseInt(v));

  // console.log(`${first} - ${second}`);

  let pushedFirst = false;
  let pushedSecond = false;
  for (let i = 0; !pushedFirst || !pushedSecond; i++) {
    if (!pushedFirst && !firstList[i]) {
      firstList.push(first);
      pushedFirst = true;
    }
    if (!pushedSecond && !secondList[i]) {
      secondList.push(second);
      pushedSecond = true;
    }

    if (!pushedFirst && firstList[i] && firstList[i] > first) {
      firstList.splice(i, 0, first);
      pushedFirst = true;
    }
    if (!pushedSecond && secondList[i] && secondList[i] > second) {
      secondList.splice(i, 0, second);
      pushedSecond = true;
    }
  }
}

// console.log(firstList.length);
// console.log(secondList.length);
let sum = 0;
for (let i = 0; i < firstList.length; i++) {
  // console.log(`${firstList[i]} - ${secondList[i]}`);
  sum += Math.abs(firstList[i] - secondList[i]);
}

console.log(sum);
