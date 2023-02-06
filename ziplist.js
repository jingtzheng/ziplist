function zipList(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return arr3;
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log(zipList(arr1, arr2));
