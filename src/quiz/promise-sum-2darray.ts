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

function computeSum2DArrayConcurrent(arr: number[][]): Promise<number> {
  return Promise.all(arr.map((row) => computeRowSum(row))).then((rowSums) =>
    rowSums.reduce((acc, cur) => acc + cur, 0)
  );
}

computeSum2DArrayConcurrent(array2D_1)
  .then((total) => console.log("Total sum (concurrent):", total))
  .catch((err) => console.error(err));
