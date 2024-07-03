import { SimpleLodash } from "./lodashhExport.mjs";
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(SimpleLodash.chunk(array, 2));

array = [0, 1, 2, 3, 4, false, undefined, NaN, 5, 6, 7];
console.log(SimpleLodash.compact(array));

const array1 = [1, 2, 3, 4];
const array2 = [2, 3];
const array3 = [4, 5, 6];
let y = SimpleLodash.concat(array1, array2, array3)
console.log(y);
console.log(SimpleLodash.difference(array1, array2));
console.log(SimpleLodash.drop(array1, 2));
console.log(SimpleLodash.dropRight(array1, 2));

console.log(y);
console.log(SimpleLodash.fill(y, '%', 1, 4));