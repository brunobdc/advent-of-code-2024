const input = Deno.readTextFileSync("input.txt").split("\n");
const index = input.indexOf("");
const pageOrderingRules = input.slice(0, index).map((v) =>
  v.split("|").map((n) => parseInt(n))
);
const pagesToProduce = input.slice(index + 1).map((v) =>
  v.split(",").map((n) => parseInt(n))
);

let result = 0;

for (const pages of pagesToProduce) {
  let valid = true;
  for (let i = 0; valid && i < pages.length - 1; i++) {
    const rule = pageOrderingRules.find((v) =>
      (v[0] === pages[i] && v[1] === pages[i + 1]) ||
      (v[0] === pages[i + 1] && v[1] === pages[i])
    );
    if (!rule || rule[0] === pages[i + 1]) {
      valid = false;
    }
  }
  if (!valid) {
    pages.sort((a, b) => {
      const rule = pageOrderingRules.find((v) =>
        (v[0] === a && v[1] === b) || (v[0] === b && v[1] === a)
      );
      if (!rule) {
        return 0;
      }
      if (rule[0] === a) {
        return -1;
      }
      return 1;
    });
    result += pages[(pages.length - 1) / 2];
  }
}

console.log(result);
