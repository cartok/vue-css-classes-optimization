export function createRowIndices (amount: number) {
  return new Array(Math.round(amount)).fill(null).map((_, i) => ++i)
}
