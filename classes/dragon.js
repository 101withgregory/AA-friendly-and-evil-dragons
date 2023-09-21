// Your code here
class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }


  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    let fleetNames = []
    for(const dragon of dragons){
      fleetNames.push(dragon.name)
    }
    return fleetNames;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}