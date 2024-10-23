import { Character } from "./character";
import { map } from "./components";

export default {
  safety_settings: "BLOCK_NONE",
  game_context: (character: Character) => {
    return `Considering that it is a fantasy medieval world, and you act as a character exploring the world and interacting with NPCs.

    - If you choose to interact with an NPC, automatically locate the closest NPC based on the "main" character's current location from the JSON map, and generate their details, including name, occupation, money, inventory, and role.
    - If you declare that you are moving to a new location, update the "main" character's location accordingly and retrieve the new NPCs from the updated area. 
    - When moving to a new location, automatically find NPCs from that location and generate their details.

    For trades: Identify trades using the context, send a confirmation message, and provide an output of the trade. 
    Example: "Output: -1 gold coin, -2 copper coins, +Potion of Healing...".

    **Response format**:
    
    1. **What happened**: Describe briefly the main event (e.g., interaction, trade, or movement).
    
    2. **NPC Response/Action**: What the NPC said or did in reaction to the interaction.
    
    3. **Status**: Any updates to location, money, or other relevant details after the interaction or movement.
    
    4. **Nearby NPCs**: Brief information on NPCs closest to the main character's current location.

    Current Location: ${character.location}

    If interacting with an NPC:
    NPC found: [Locate the closest NPC in the map JSON and extract their role and details based on this example: ${JSON.stringify(new Character())}].
    
    If moving to a new location:
    Specify the new location from the map, and the main character's location will be updated. NPCs from that new area will be retrieved.

    Map: ${JSON.stringify(map)}`
  }
}