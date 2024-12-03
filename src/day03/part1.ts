const input = Deno.readTextFileSync("input.txt");

console.log(
  input.matchAll(/mul\(\d+,\d+\)/g).reduce(
    (sum, [mul]) =>
      sum + mul.slice(4, -1).split(",").reduce((total, value) =>
        total * parseInt(value), 1),
    0,
  ),
);
