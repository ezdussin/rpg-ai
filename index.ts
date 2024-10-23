import 'dotenv/config';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import context from './context';
import { Character } from './character';
import * as readline from 'readline';
import { map } from './components';

const main = new Character();

const genAI = new GoogleGenerativeAI(`${process.env.API_KEY}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: context.game_context(main) });

const chat = model.startChat({
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    }
  ]
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const playerCreation = async () => {
  const nameInput = await askQuestion("Name: ");
  if (typeof nameInput === 'string') main.name = nameInput;

  let validSelection = false; // Flag to track if the selection is valid
  while (!validSelection) { // Loop until a valid selection is made
    // Ask for the player's location
    let locationPrompt = 'Location:\n';
    let locations = []; // To store locations with their corresponding indices
    let locationCounter = 1; // Initialize a counter for locations

    // Loop through regions and their locations
    for (const region of map.regions) {
      locationPrompt += `\n*** ${region.name}\n\n`;
      for (const location of region.locations) {
        locationPrompt += `${locationCounter}. ${location.name}\n`; // Append location number
        locations.push({ index: locationCounter, region: region.name, location: location.name }); // Store locations
        locationCounter++; // Increment the counter for each location
      }
    }

    const locationInput = await askQuestion(locationPrompt + "\nSelect a location by number: ");

    try {
      if (typeof locationInput !== 'string') throw Error();
      // Validate input
      const selectedIndex = parseInt(locationInput, 10);
      const selectedLocation = locations.find(loc => loc.index === selectedIndex);

      if (selectedLocation) {
        main.location = selectedLocation.location;
        console.log(`You have selected: ${main.location}`);
        validSelection = true; // Set flag to true to exit the loop
      } else throw Error();
    } catch (e) {
      console.error("Invalid selection. Please try again."); // Prompt the user to try again
    }
  }

  playing();
}

const playing = async () => {
  rl.question("Action: ", async (actionInput) => {
    const response = await chat.sendMessage(`${JSON.stringify(main)}: ${actionInput}`);

    console.log("\n" + response.response.text());

    playing();
  });
};

playerCreation();

