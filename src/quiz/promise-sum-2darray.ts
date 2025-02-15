const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function computeRowSum(row: number[]): Promise<number> {
  return new Promise((resolve) => {
    resolve(row.reduce((acc, num) => acc + num, 0));
  });
}

async function computeSum2DArrayConcurrent(arr: number[][]): Promise<number> {
  const rowSums = await Promise.all(arr.map((row) => computeRowSum(row)));
  return rowSums.reduce((acc, cur) => acc + cur, 0);
}

(async () => {
  try {
    const total = await computeSum2DArrayConcurrent(array2D_1);
    console.log("Total sum (concurrent):", total);
  } catch (err) {
    console.error(err);
  }
})();
