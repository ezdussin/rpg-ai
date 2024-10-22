interface Money {
  copperCoins: number;
  ironCoins: number;
  goldCoins: number;
}

export class Character {
  name: string;
  location: string;
  age: number;
  gender: string;
  occupation: string;
  money: Money;
  language: string;
  backstory: string;
  inventory: string[];

  constructor(
    name = "",
    location = "",
    age = 0,
    gender = "",
    occupation = "",
    money: Money = { copperCoins: 0, ironCoins: 0, goldCoins: 0 },
    language = "",
    backstory = "",
    inventory: string[] = []
  ) {
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
}