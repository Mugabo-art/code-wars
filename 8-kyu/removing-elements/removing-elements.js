function removeEveryOther(arr){
  //your code here
   return arr.filter((_, index) => index % 2 === 0);
}