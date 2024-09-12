
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix || []).flatMap((row, index) => index % 2 ? row.reverse() : row);;
}
