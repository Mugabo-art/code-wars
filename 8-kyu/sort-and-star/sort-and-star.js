function twoSort(s) {
    const sorted = s.slice().sort();  // Make a copy and sort the array alphabetically
     const firstString = sorted[0];  // Get the first string
  return firstString.split('').join('***');  // Split into characters and join with ***
}