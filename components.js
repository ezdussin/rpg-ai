"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
exports.map = {
    "name": "Eldoria",
    "description": "A vast fantasy realm filled with diverse landscapes, ancient cities, and mysterious dungeons.",
    "regions": [
        {
            "name": "Valoria",
            "description": "The bustling capital city, known for its towering castles and thriving market.",
            "locations": [
                {
                    "name": "King's Square",
                    "type": "City Center",
                    "streets": [
                        {
                            "name": "Main Street",
                            "shops": [
                                {
                                    "name": "Ironclad Armory",
                                    "type": "Weapon Shop",
                                    "items": ["Sword", "Shield", "Bow", "Armor"],
                                    "npc": { "name": "Gorath", "role": "Blacksmith" },
                                },
                                {
                                    "name": "Arcane Emporium",
                                    "type": "Magic Shop",
                                    "items": ["Staff", "Scroll", "Mana Potion"],
                                    "npc": { "name": "Selene", "role": "Sorceress" },
                                },
                            ],
                        },
                        {
                            "name": "Market Alley",
                            "shops": [
                                {
                                    "name": "Golden Chalice Tavern",
                                    "type": "Tavern",
                                    "npc": { "name": "Borin", "role": "Bartender" },
                                },
                                {
                                    "name": "Silver Fang Inn",
                                    "type": "Inn",
                                    "npc": { "name": "Elara", "role": "Innkeeper" },
                                },
                            ],
                        },
                    ],
                },
                {
                    "name": "Royal Palace",
                    "type": "Castle",
                    "description": "Home of King Elden, ruling over Valoria with his council of knights.",
                    "npcs": [
                        { "name": "King Elden", "role": "Ruler of Valoria" },
                        { "name": "Sir Galen", "role": "Captain of the Guard" },
                    ],
                },
                {
                    "name": "Valoria Outskirts",
                    "type": "Suburb",
                    "description": "A quiet area surrounding the capital, with small farms and homesteads.",
                    "streets": [
                        {
                            "name": "Farmer's Lane",
                            "houses": [
                                {
                                    "owner": "Farmer Jon",
                                    "description": "A simple farm with wheat fields.",
                                }
                            ],
                        }
                    ],
                },
            ],
        },
        {
            "name": "Darkwood Forest",
            "description": "A dense and eerie forest filled with dangerous creatures and hidden ruins.",
            "locations": [
                {
                    "name": "Shadow Grove",
                    "type": "Forest Clearing",
                    "description": "An ancient, mysterious area where druids once gathered.",
                    "creatures": ["Wolves", "Giant Spiders"],
                    "npcs": [
                        {
                            "name": "Thorne",
                            "role": "Ranger",
                            "description": "A hunter who protects travelers from the dangers of the forest.",
                        }
                    ],
                },
                {
                    "name": "Lost Temple",
                    "type": "Dungeon",
                    "description": "An ancient ruin where dark rituals were once performed.",
                    "monsters": ["Undead Warriors", "Dark Sorcerer"],
                    "treasures": ["Enchanted Sword", "Cursed Amulet"],
                },
            ],
        },
        {
            "name": "Ardentia",
            "description": "A coastal city known for its large ports and maritime trade.",
            "locations": [
                {
                    "name": "Harbor District",
                    "type": "Port",
                    "streets": [
                        {
                            "name": "Dock Street",
                            "shops": [
                                {
                                    "name": "The Salty Sailor",
                                    "type": "Tavern",
                                    "npc": {
                                        "name": "Captain Drake",
                                        "role": "Retired Pirate",
                                    },
                                }
                            ],
                        }
                    ],
                    "npcs": [{ "name": "Captain Merick", "role": "Harbor Master" }],
                },
                {
                    "name": "Shipwright's Wharf",
                    "type": "Shipyard",
                    "description": "Where ships are built and repaired, vital to Ardentia's economy.",
                    "npcs": [{ "name": "Old Garvin", "role": "Shipbuilder" }],
                },
            ],
        },
        {
            "name": "Mount Khazad",
            "description": "A towering mountain home to the dwarves and rich in precious minerals.",
            "locations": [
                {
                    "name": "Ironforge Hold",
                    "type": "Dwarven City",
                    "description": "The capital of the dwarves, built deep within the mountain.",
                    "npcs": [{ "name": "Thane Borin", "role": "Dwarven King" }],
                    "streets": [
                        {
                            "name": "Forge Road",
                            "shops": [
                                {
                                    "name": "Hammer & Anvil",
                                    "type": "Blacksmith",
                                    "npc": {
                                        "name": "Grimnir",
                                        "role": "Master Blacksmith",
                                    },
                                }
                            ],
                        }
                    ],
                },
                {
                    "name": "Mines of Khazad",
                    "type": "Mine",
                    "description": "Rich in iron and precious gems, but also home to dangerous creatures.",
                    "creatures": ["Stone Golems", "Cave Trolls"],
                    "treasures": ["Emeralds", "Dwarven Battle Axe"],
                },
            ],
        },
    ],
};
