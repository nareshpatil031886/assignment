function generateOddSeriesCondition(a) {
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

generateOddSeriesCondition(4);
