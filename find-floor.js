function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === x){
            return arr[mid];
        }
        else if (arr[mid] < x){
            floor = arr[mid];
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return floor;
}

