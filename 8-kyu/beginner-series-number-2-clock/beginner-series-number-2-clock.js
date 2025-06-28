function past(h, m, s){
  let hrsInMs = h * 60 * 60 * 1000;
  let MinInMs = m * 60 * 1000;
  let secInMs = s * 1000;
  return hrsInMs + MinInMs + secInMs;
  //#Happy Coding! ^_^
}