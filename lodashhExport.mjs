export class SimpleLodash {
    chunk(array, size) { //It is used to break the array in to small chunks.
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result
    }

    compact(array) { //It is used to creates an array with all falsey values removed
        return array.filter(Boolean);
    }

    concat(...arrays) { //It is used to concatenating the arrays
        let result = [];
        for (let array of arrays) {
            result = result.concat(array)
        }
        return result;
    }

    difference(array, values) { //It is used to remove a single element or the array of elements from the original array.
        const result = [];
        for (let item of array) {
            if (!values.includes(item)) {
                result.push(item);
            }
        }
        return result;
    }

    drop(array, n = 1) { //It is used to drop the elements in a given array.
        return array.slice(n);
    }

    dropRight(array, n = 1) { //It is used to delete the elements from the right of the array.
        return array.slice(0, -n);
    }

    fill(array, value, start = 0, end = array.length) { //It is used to fill a set of values into the array in a given range
        if (start < 0) {
            start = Math.max(array.length + start, 0);
        }
        if (end < 0) {
            end = Math.max(array.length + end, 0);
        }
        for (let i = start; i <= end; i++) {
            array[i] = value;
        }
        return array
    }

    findIndex(array, num) { //It is used to find the index of the first occurrence of the element.
        return array.indexOf(num);
    }

    findLastIndex(array, num) { //It is used to find the element from the right of the array.
        return array.lastIndexOf(num);
    }
    flattenDepth(array, depth = 1) { //It is used to flatten up to depth time that is passed into the function.
        return array.flat(depth);
    }

    flattenDeep(array) { //It is used to completely flatten nested arrays.
        return array.flat(Infinity);
    }

    fromPairs(pairs) { //It returns an object composed form key-value pairs.
        const result = {};
        pairs.forEach(([key, value]) => {
            result[key] = value;
        });
        return result;
    }

    head(array) { //It is used to get the first element of an array.
        return array[0];
    }

    intersection(array1, array2) { //It is used to take the intersection of the one or more arrays.
        return array1.filter(item => array2.includes(item));
    }

    join(array, separator = ',') { //It is used to converts all elements in the array into a string separated by a separator.
        return array.join(separator);
    }

    pull(array, ...values) { //It is used to remove all the given values from a given array.
        return array.filter(item => !values.includes(item));
    }

    pullAll(array, values) { //2nd argument is an array
        //It is used to remove all the values from the first given array that are given in the second array.
        return array.filter(item => !values.includes(item));
    }

    pullAt(array, ...indexes) { //It removes the element corresponding to the given address.
        indexes.sort((a, b) => b - a);
        const pulled = [];
        for (let index of indexes) {
            pulled.push(array.splice(index, 1)[0]);
        }
        return pulled.reverse();
    }

    remove(array, value) { //it removes all elements from the array that predicate returns True.
        return array.filter(item => !value(item));
    }

    reverse(array) {
        return array.reverse();
    }

    take(array, n = 1) { //It creates a slice of an array with n elements from the beginning.
        if (n < 0) return [];
        return array.slice(0, n);
    }

    takeRight(array, n = 1) { //It is used to get the array of n elements from the end of the given array
        const length = array.length;
        if (n < 0) return [];
        return array.slice(Math.max(length - n, 0));
    }

    union(...arrays) { //It takes n number of arrays and creates an array of unique values in order.
        const result = [];
        arrays.forEach(arr => {
            arr.forEach(item => {
                if (!result.includes(item)) {
                    result.push(item);
                }
            });
        });
        return result;
    }

    uniq(array) { //It creates an array of unique values in order.
        const result = [];
        array.forEach(item => {
            if (!result.includes(item)) {
                result.push(item);
            }
        });
        return result;
    }

    xor(array1, array2) {
        // a XOR b = (a OR b) - (a AND b)
        const a = this.union(array1, array2);
        const b = this.intersection(array1, array2);
        return Array.from(a).filter(item => !b.includes(item));
    }

    without(array,...values){ //same as pull
        //creates a new array in a filtered form that is there are values to exclude and give new values as output.
        return array.filter(item => !values.includes(item));
    }
}

