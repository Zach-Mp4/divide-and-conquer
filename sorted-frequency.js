function sortedFrequency(arr, target) {
    let firstNum = findFirstNum(arr, target);
    if (firstNum === -1) return -1;
    let count = firstNum;
    while(arr[count] === target){
        count++;
    }
    return count - firstNum; 
}


function findFirstNum(arr, target, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2)
      if(arr[low] === target) return low;
      if ((mid === target || arr[mid - 1] !== target) && arr[mid] === target) {
        return mid;
      } else if (arr[mid] !== target) {
        return findFirstNum(arr, target, mid + 1, high);
      }
      return findFirstNum(arr, target, low, mid - 1);
    }
    return -1;
  }
// module.exports = sortedFrequency