function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        if (arr[left] <= arr[right]){
            return left;
        }

        const mid = Math.floor((left + right) / 2);
        const nextIndex = (mid + 1) % arr.length;
        const prevIndex = (mid - 1 + arr.length) % arr.length;

        if (arr[mid] < arr[nextIndex] && arr[mid] < arr[prevIndex]){
            return mid;
        }
        
        if (arr[mid] <= arr[right]) {
            right = mid;
        } else if (arr[mid] >= arr[left]) {
            left = mid + 1;
        }
    }
    return 0;
}

// module.exports = findRotationCount