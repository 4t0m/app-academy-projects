let Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}.`;
};

let kitty = new Cat("Mittens", "Gloves");
console.log(kitty.cuteStatement());
let kitty2 = new Cat("Midnight", "Darkness");
console.log(kitty2.cuteStatement());


Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}.`;
};

console.log(kitty.cuteStatement());
console.log(kitty2.cuteStatement());


Cat.prototype.meow = function () {
  return "Meow";
};

console.log(kitty.meow());
console.log(kitty2.meow());

kitty.meow = function() {
  return "MEOWWWWWW";
};

console.log(kitty.meow());
console.log(kitty2.meow());
