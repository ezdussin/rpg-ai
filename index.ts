import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import context from './context';
import { Character } from './character';
import * as readline from 'readline';

const genAI = new GoogleGenerativeAI(`${process.env.API_KEY}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: context.game_context });

const main = new Character(
  "Roger",
  "Arcane Emporium",
  20,
  "male",
  "none",
  { copperCoins: 3, ironCoins: 1, goldCoins: 1 },
  "Native Portuguese",
  "Pretty poor past",
  []
);

const chat = model.startChat();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playing = async () => {
  rl.question("Action: ", async (actionInput) => {
    const response = await chat.sendMessage(`${JSON.stringify(main)}: ${actionInput}`);

    console.log("\n" + response.response.text());

    playing();
  });
};

playing();
