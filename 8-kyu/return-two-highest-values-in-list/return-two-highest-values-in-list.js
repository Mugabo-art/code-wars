function twoHighest(arr) {
  let a = [...new Set(arr)];
  a.sort((a,b) => b-a);
  return a.slice(0, 2);
}