//  ------------------------- OOP

/*

  THE FOUR PILLARS OF OOP

  - Encapsulation: Combining like properties and behaviors into a single unit (Class object).
  - Abstraction: Hiding inner workings, or only exposing specific tools to interface with inner workings.
  - Inheritance: The ability of objects to share properties and behavior.
  - Polymorphism: (Many Shapes) Children can inherit functionality, and also overwrite it or define their own.

*/

// Class Constructor

/* let value = 1;
class Adventurer {
    constructor(name='Adventurer'){
        // Hard Coded Class Properties
        this.health = 100;
        this.damage = 2;
        // Dynamic Class Properties
        this.name = name;
    }

    // Instance Method - Only available to Class instance
    listStats() {
        return `${this.name} has ${this.health} health and ${this.damage} damage`;
    }

    // Static Method - Only available to the Class
    static sayRandomQuote() {
        return 'I like cheese';
    }

    static createPlayerName() {
        
        const name = `Adventurer ${value}`;

        value++;

        return name;
    }
}; */

// Adventurer Class Instances
// Instantiate = create new instance of class object
/* const player1 = new Adventurer('John Doe');
const player2 = new Adventurer('Kevin Smith');

const player3Name = Adventurer.createPlayerName();
const player4Name = Adventurer.createPlayerName();

const player3 = new Adventurer(player3Name);
const player4 = new Adventurer(player4Name);

console.log(player1);
console.log(player2.listStats());
console.log(player3);
console.log(player4); */

// class Player {
//     constructor(name='Player', color="black"){
//         // Hard Coded Class Properties
//         this.health = 100;
//         this.damage = 5;
//         // Dynamic Class Properties
//         this.name = name;
//         this.color = color;
//     }

//     attack() {
//         return 'I am attacking you!!!';
//     }

//     upgradeWeapon() {

//     }
// }

// class Adventurer extends Player {
//     constructor(name='Adventurer', color){
//         super(name, color);
//     }

//     attack() {
//         return 'Take that bad guy!!!'
//     }
// }

// class Enemy extends Player {
//     constructor(name, color) {
//         super(null, 'Red');
//     }

//     attack() {
//         return 'I win today!!!'
//     }
// }

// const player1 = new Adventurer(null, 'blue');
// const enemy1 = new Enemy();

// console.log(player1.attack());
// console.log(enemy1.attack());


/* 

Bank

-balance
-interest rate
-Type

And the fallowing methods
-deposit
-withdraw
-bonus - overdraft protection

*/

/* 

bonus: create Checking and savings sub class

*/

class Bank {
    constructor(name, type = 'checking') {
        this.balance = 0;
        this.type = type;
        this.interestRate = 0;
        this.userName = name;
    }

    deposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        return this.balance -= amount;
    }
}

class CheckingAccount extends Bank {
    constructor(name) {
        super(name, 'checking')
        this.interestRate = .01;
    }
}

class SavingsAccount extends Bank {
    constructor(name) {
        super(name, 'savings')
        this.interestRate = .1;

    }
}

const person1Checking = new CheckingAccount('John');
const person1Saving = new SavingsAccount();

person1Saving.deposit(500);
person1Saving.withdraw(240);

console.log(person1Checking);
console.log(person1Saving);