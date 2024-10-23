"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = require("./character");
var components_1 = require("./components");
exports.default = {
    safety_settings: "BLOCK_NONE",
    game_context: function (character) {
        return "Considering that it is a fantasy medieval world, and you act as a character exploring the world and interacting with NPCs.\n\n    - If you choose to interact with an NPC, automatically locate the closest NPC based on the \"main\" character's current location from the JSON map, and generate their details, including name, occupation, money, inventory, and role.\n    - If you declare that you are moving to a new location, update the \"main\" character's location accordingly and retrieve the new NPCs from the updated area. \n    - When moving to a new location, automatically find NPCs from that location and generate their details.\n\n    For trades: Identify trades using the context, send a confirmation message, and provide an output of the trade. \n    Example: \"Output: -1 gold coin, -2 copper coins, +Potion of Healing...\".\n\n    **Response format**:\n    \n    1. **What happened**: Describe briefly the main event (e.g., interaction, trade, or movement).\n    \n    2. **NPC Response/Action**: What the NPC said or did in reaction to the interaction.\n    \n    3. **Status**: Any updates to location, money, or other relevant details after the interaction or movement.\n    \n    4. **Nearby NPCs**: Brief information on NPCs closest to the main character's current location.\n\n    Current Location: ".concat(character.location, "\n\n    If interacting with an NPC:\n    NPC found: [Locate the closest NPC in the map JSON and extract their role and details based on this example: ").concat(JSON.stringify(new character_1.Character()), "].\n    \n    If moving to a new location:\n    Specify the new location from the map, and the main character's location will be updated. NPCs from that new area will be retrieved.\n\n    Map: ").concat(JSON.stringify(components_1.map));
    }
};
