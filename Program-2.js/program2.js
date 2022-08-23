function generatePyramid(num) {
  let number = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) console.log((number += i));
  }
}
generatePyramid(7);
