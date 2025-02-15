const array2D_3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

function hasNegative(row: number[]): Promise<boolean> {
  return new Promise((resolve) => {
    resolve(row.some((num) => num < 0));
  });
}

Promise.all(array2D_3.map((row) => hasNegative(row)))
  .then((results) => {
    results.forEach((found, index) => {
      if (found) console.log("Row with negative:", array2D_3[index]);
    });
  })
  .catch((err) => console.error(err));
