const input = Deno.readTextFileSync("input.txt");

let lastIndex = 0;
let isDo = true;

let result = input.matchAll(/do\(\)|don't\(\)/g).reduce((sum, reg) => {
  // console.log(`${sum} - ${isDo} - ${lastIndex} - ${reg.index}`);
  if (isDo) {
    // console.log(input.slice(lastIndex, reg.index));
    sum += input.slice(lastIndex, reg.index).matchAll(/mul\(\d+,\d+\)/g)
      .reduce(
        (sum, [mul]) =>
          sum +
          mul.slice(4, -1).split(",").reduce(
            (total, value) => total * parseInt(value),
            1,
          ),
        0,
      );
  }

  lastIndex = reg.index;
  isDo = reg[0] === "do()";

  return sum;
}, 0);

if (isDo) {
  result += input.slice(lastIndex).matchAll(/mul\(\d+,\d+\)/g)
    .reduce(
      (sum, [mul]) =>
        sum +
        mul.slice(4, -1).split(",").reduce(
          (total, value) => total * parseInt(value),
          1,
        ),
      0,
    );
}

console.log(result);
