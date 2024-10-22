"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, location, age, gender, occupation, money, language, backstory, inventory) {
        if (name === void 0) { name = ""; }
        if (location === void 0) { location = ""; }
        if (age === void 0) { age = 0; }
        if (gender === void 0) { gender = ""; }
        if (occupation === void 0) { occupation = ""; }
        if (money === void 0) { money = { copperCoins: 0, ironCoins: 0, goldCoins: 0 }; }
        if (language === void 0) { language = ""; }
        if (backstory === void 0) { backstory = ""; }
        if (inventory === void 0) { inventory = []; }
        this.name = name;
        this.location = location;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.money = money;
        this.language = language;
        this.backstory = backstory;
        this.inventory = inventory;
    }
    return Character;
}());
exports.Character = Character;
