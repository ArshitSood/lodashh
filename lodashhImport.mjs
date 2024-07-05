import { SimpleLodash } from "./lodashhExport.mjs";

const _ = new SimpleLodash();

let array = [1, 2, 3, 4, 5, 6, 7];

let array1 = [1, 2, 3, 4];
let array2 = [2, 3];
let array3 = [4, 5, 6];
//array = [0, 1, 2, 3, 4, false, undefined, NaN, 5, 6, 7];
console.log(_.compact(array));
console.log(_.chunk(array, 2));
let y = _.concat(array1, array2, array3);
console.log(y);
console.log(_.difference(array1, array2));
console.log(_.drop(array1, 2));
console.log(_.dropRight(array1, 2));

console.log(y);
console.log(_.fill(y, 'xX*Xx', 1, 3));

console.log(_.findIndex(y, 2));
console.log(_.findLastIndex(y, 2));

let nestedArray = [1, [2, [3, [4]], 5]];
let flatArray = _.flattenDepth(nestedArray, 2);
console.log(flatArray);
let flatArray2 = _.flattenDeep(nestedArray);
console.log(flatArray2);

let pairs = [['a', 1], ['b', 2], ['c', 3]];
let object = _.fromPairs(pairs);
console.log(object);


console.log(_.head(array));

console.log(_.intersection(array1, array2));

console.log(_.join(array, '-'));

console.log(_.pull(array, 3, 5));

let valuesToRemove = [2, 4];
console.log(_.pullAll(array, valuesToRemove));

console.log(_.pullAt(array, 1, 3));

console.log(_.remove(array, n => n % 2 === 0));

console.log(_.reverse(array));

console.log(_.take(array, 3))


console.log(_.takeRight(array, 3))


array1 = [1, 2, 3];
array2 = [2, 3, 4];
console.log(_.union(array1, array2));


array3 = [1, 2, 2, 3, 3, 3];
console.log(_.uniq(array3))


let array4 = [1, 2, 3];
let array5 = [2, 3, 4];
console.log(_.xor(array4, array5));

let w = _.without([3, 5, 5, 1], 1, 3);
let x = _.pull([3, 5, 5, 1], 1, 3); // pull same as without
let t = _.without([4, 7, 4, 8], 7, 4);
console.log(w);
console.log(t);

let z = _.nth([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(z)

array = [1, 2, 3, 4, 5, 6, 7];

let mapped = _.map(array, x => x * 2);
console.log(mapped); // [2, 4, 6, 8, 10]

let filtered = _.filter(array, x => x > 2);
console.log(filtered); // [3, 4, 5]

let found = _.find(array, x => x === 3);
console.log(found); // 3


console.log(_.countBy(array, x => x % 2));
console.log(_.every(array, x => x < 10));
console.log(_.includes(array, 3));
console.log(_.partition(array, x => x % 2));
console.log(_.reduce(array, (sum, x) => sum + x, 0));
console.log(_.reject(array, x => x % 2));
console.log(_.size(array));