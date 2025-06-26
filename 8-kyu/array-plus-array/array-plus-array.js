function arrayPlusArray(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let totalSum = combined.reduce((a,b) => a+b,0)
  return totalSum; //something went wrong
}