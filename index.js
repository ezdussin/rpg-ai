"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var generative_ai_1 = require("@google/generative-ai");
var context_1 = require("./context");
var character_1 = require("./character");
var readline = require("readline");
var components_1 = require("./components");
var main = new character_1.Character();
var genAI = new generative_ai_1.GoogleGenerativeAI("".concat(process.env.API_KEY));
var model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: context_1.default.game_context(main) });
var chat = model.startChat({
    safetySettings: [
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_NONE,
        }
    ]
});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var askQuestion = function (question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
};
var playerCreation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nameInput, validSelection, _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askQuestion("Name: ")];
            case 1:
                nameInput = _a.sent();
                if (typeof nameInput === 'string')
                    main.name = nameInput;
                validSelection = false;
                _loop_1 = function () {
                    var locationPrompt, locations, locationCounter, _i, _b, region, _c, _d, location_1, locationInput, selectedIndex_1, selectedLocation;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                locationPrompt = 'Location:\n';
                                locations = [];
                                locationCounter = 1;
                                // Loop through regions and their locations
                                for (_i = 0, _b = components_1.map.regions; _i < _b.length; _i++) {
                                    region = _b[_i];
                                    locationPrompt += "\n*** ".concat(region.name, "\n\n");
                                    for (_c = 0, _d = region.locations; _c < _d.length; _c++) {
                                        location_1 = _d[_c];
                                        locationPrompt += "".concat(locationCounter, ". ").concat(location_1.name, "\n"); // Append location number
                                        locations.push({ index: locationCounter, region: region.name, location: location_1.name }); // Store locations
                                        locationCounter++; // Increment the counter for each location
                                    }
                                }
                                return [4 /*yield*/, askQuestion(locationPrompt + "\nSelect a location by number: ")];
                            case 1:
                                locationInput = _e.sent();
                                try {
                                    if (typeof locationInput !== 'string')
                                        throw Error();
                                    selectedIndex_1 = parseInt(locationInput, 10);
                                    selectedLocation = locations.find(function (loc) { return loc.index === selectedIndex_1; });
                                    if (selectedLocation) {
                                        main.location = selectedLocation.location;
                                        console.log("You have selected: ".concat(main.location));
                                        validSelection = true; // Set flag to true to exit the loop
                                    }
                                    else
                                        throw Error();
                                }
                                catch (e) {
                                    console.error("Invalid selection. Please try again."); // Prompt the user to try again
                                }
                                return [2 /*return*/];
                        }
                    });
                };
                _a.label = 2;
            case 2:
                if (!!validSelection) return [3 /*break*/, 4];
                return [5 /*yield**/, _loop_1()];
            case 3:
                _a.sent();
                return [3 /*break*/, 2];
            case 4:
                playing();
                return [2 /*return*/];
        }
    });
}); };
var playing = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        rl.question("Action: ", function (actionInput) { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chat.sendMessage("".concat(JSON.stringify(main), ": ").concat(actionInput))];
                    case 1:
                        response = _a.sent();
                        console.log("\n" + response.response.text());
                        playing();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
playerCreation();
