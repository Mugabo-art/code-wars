function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(l => typeof l === 'number');
}