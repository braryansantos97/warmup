class Cat {
  constructor(name, age) {
    this.name = name;
    this. age = age;
  };
  meow() {
    console.log('Meow');
  }
}

const luna = new  Cat('Luna', 1);
const lechitas = new Cat ('Lechitas', 2);

console.log(luna);
console.log(lechitas);
luna.meow()
lechitas.meow()

const petCat = (cat) => {
  cat.name = 'kitty'
}

let cats = [];
for (let i = 0; i < 6; i++) {
  cats[i] = new Cat('cat' + i, 2);
}
console.log(cats)
console.log(cats[3])

let catPerson = {
  cats: ['cat1', 'cat2']
}
console.log(catPerson.cats)


class Pirate {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = 100;
    this.damge = 10;
  }
  sayArrg = () => {
    console.log('Arrrg')
  };
  hit = (otherPirate) => {
    this.damge -= otherPirate.hp
  };
  buyBeer = () => {
    let beer = [];
    for(let i = 0; i < 6; i++) {
      i.push(beer)
    }
  };
};

const pirates = [];
for(let i = 0; i < 3; i++) {
  pirates[i] = new Pirate()
}

  console.log(pirates)
