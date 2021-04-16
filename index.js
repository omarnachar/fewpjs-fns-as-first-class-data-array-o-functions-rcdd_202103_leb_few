function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}
function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`throw the frisbee for ${dogName} the ${dogBreed}`);
  return `throw the frisbee for ${dogName} the ${dogBreed}`
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, wakeDog, throwFrisbee, walkHome, unleashDog];

// function exerciceDog(dog, breed){
//   return routine.map(fn => fn(dog, breed))
// }
function exerciseDog(dogName, dogBreed) {
    const arr = []
    for(let i = 0; i < routine.length; i++) {
        arr.push(routine[i](dogName, dogBreed));
    }
    return arr;
}