function points(games) {
  let totalPoints = 0;
  for(let game of games){
    let [x, y] = game.split(':').map(Number);
    if (x > y){
      totalPoints += 3;
    } else if (x === y){
      totalPoints += 1;
    }
    }
  return totalPoints;
  }