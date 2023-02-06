function ziplist(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i], arr2[i]);
  }
  return arr3;
}

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

console.log(ziplist(a, b));

function zipthesimpleway(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipthesimpleway(a, b));
