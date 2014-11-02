function GameObject() {}

GameObject.prototype = {
    constructor: GameObject
};

function Spaceship() {}

Spaceship.prototype = new GameObject();
Spaceship.prototype.constructor = Spaceship;

console.log(Spaceship.prototype);
console.log(GameObject.prototype);