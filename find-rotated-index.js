function findRotatedIndex(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);
    console.log(`Low: ${low}`);
    console.log(`high: ${high}`);
    console.log(`mid: ${mid}`);
    console.log(`---------`);

    if (arr[mid] === num) {
        return mid;
    }

    if (arr[low] <= arr[mid]) {
        if (arr[low] <= num && num <= arr[mid]){
            return findRotatedIndex(arr, num, low, mid - 1);
        }
        else {
            return findRotatedIndex(arr, num, mid + 1, high);
        }
    }

    if (arr[mid] < num && num <= arr[high]) {
        return findRotatedIndex(arr, num, mid + 1, high);
    } else {
        return findRotatedIndex(arr, num, low, mid - 1);
    }
}
// module.exports = findRotatedIndex