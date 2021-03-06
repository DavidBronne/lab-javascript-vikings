// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function (){
        return this.strength;
    };
    this.receiveDamage =function (damage) {
        this.health -= damage; 
    }
}

// Viking
function Viking(health, strength, name) {
    Soldier.call(this,health, strength);
    this.name = name;
    this.receiveDamage =function (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damge`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    this.battleCry = function () {
        return "Odin Owns You All!"
    }

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon() {}

// War
function War() {}
