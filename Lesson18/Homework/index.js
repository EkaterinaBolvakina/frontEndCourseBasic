// KONSTRUKTFUNKTIONEN (benutzen von .this), ERBEN von Eigenschaften und Nutzung von PROTOTYPEN

//--------------- CHARACTER -----------------------------
//Erstellung eines Objektes 'Character' mit der Konstruktorfunktion , die Eigenschaften fürs Objekt initialisiert 
function Character (name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
}

// Definition einer separaten Funktion, um das Objekt 'Character' vorzustellen
function introduce () {
    console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
}

// Die Funktion 'introduce' dem Prototypen von 'Character' hinzugefügt, damit sie von allen Instanzen von 'Character' verwendet werden kann.
Character.prototype.introduce = introduce;

//--------------- WARRIOR -----------------------------
// Erweiterte Konstruktorfunktion für den Krieger, die von Character erbt
function Warrior(name, health,level, weapon) {
    Character.call(this, name, health,level); // Verwende den Character-Konstruktor, um gemeinsame Eigenschaften zu initialisieren
    this.weapon = weapon;                     // Füge die spezifische Eigenschaft weapon hinzu
}

// Vererbung der introduce-Methode von Character
Warrior.prototype = Object.create(Character.prototype);

// Hinzufügen der attack-Methode für den Krieger
Warrior.prototype.attack = function() {
    console.log(`I'm attacking with ${this.weapon}!`);
};

//--------------- WIZARD -----------------------------
function Wizard(name, health, level, spell) {
    Character.call(this,name, health, level);
    this.spell = spell;
}

Wizard.prototype = Object.create(Character.prototype);

function castSpell() {
    console.log(`I spell you: ${this.spell}!!!`);
}

Wizard.prototype.castSpell = castSpell;

//--------------- RESULTS -----------------------------

const character1 = new Character("Nick", 100, 2);
const warrior1 = new Warrior("Warrior1", 150, 1,"Sword");
const wizard1 = new Wizard("Wizzard1", 90, 3, "Abra-kada-bra");

console.log("Character 1: ");
character1.introduce();

console.log("\nWarrior 1: ");
warrior1.introduce();
warrior1.attack();

console.log("\nWizzard 1: ");
wizard1.introduce();
wizard1.castSpell();











