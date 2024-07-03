export class SimpleLodash {
    static chunk(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result
    }
    static compact(array) {
        return array.filter(Boolean);
    }
    static concat(...arrays) {
        let result = [];
        for (let array of arrays) {
            result = result.concat(array)
        }
        return result;
    }
    static difference(array, values) {
        const result = [];
        for (let item of array) {
            if (!values.includes(item)) {
                result.push(item);
            }
        }
        return result;
    }
    static drop(array, n = 1) {
        return array.slice(n);
    }

    static dropRight(array, n = 1) {
        return array.slice(0, -n);
    }
    static fill(array, value, start = 0, end = array.length) {
        if (start < 0) {
            start = Math.max(array.length + start, 0);
        }
        if (end < 0) {
            end = Math.max(array.length + end, 0);
        }
        for (let i = start; i < end; i++) {
            array[i] = value;
        }
        return array;
    }

}
