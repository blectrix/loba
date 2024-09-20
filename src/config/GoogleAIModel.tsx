import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    GenerativeModel,
    ChatSession,
    GenerationConfig,
    SafetySetting,
  } from "@google/generative-ai";
  
  // Ensure the API key is properly typed
  const apiKey: string = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
  const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(apiKey);
  
  const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig: GenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  type HistoryItem = {
    role: "user" | "model";
    parts: { text: string }[];
  };
  
  export const chatSession: ChatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: `Reference to : {
     "time": 1550476186479,
     "blocks": [
        {
           "id": "oUq2g_tl8y",
           "type": "header",
           "data": {
              "text": "Editor.js",
              "level": 2
           }
        },
        {
           "id": "zbGZFPM-iI",
           "type": "paragraph",
           "data": {
              "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
           }
        },
        {
           "id": "qYIGsjS5rt",
           "type": "header",
           "data": {
              "text": "Key features",
              "level": 3
           }
        },
        {
           "id": "XV87kJS_H1",
           "type": "list",
           "data": {
              "style": "unordered",
              "items": [
                 "It is a block-styled editor",
                 "It returns clean data output in JSON",
                 "Designed to be extendable and pluggable with a simple API"
              ]
           }
        },
        {
           "id": "AOulAjL8XM",
           "type": "header",
           "data": {
              "text": "What does it mean «block-styled editor»",
              "level": 3
           }
        },
        {
           "id": "cyZjplMOZ0",
           "type": "paragraph",
           "data": {
              "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
           }
        }
     ],
     "version": "2.8.1"
  }`},
        ],
      },
      {
        role: "model",
        parts: [
          {text: `
  json
  {
    "time": 1687680559972,
    "blocks": [
      {
        "id": "h892r762r7",
        "type": "header",
        "data": {
          "text": "Grocery TODO List",
          "level": 1
        }
      },
      {
        "id": "f987y234g2",
        "type": "paragraph",
        "data": {
          "text": "This is your grocery list. Add items, mark them as done, and get your shopping done!"
        }
      },
      {
        "id": "1234567890",
        "type": "list",
        "data": {
          "style": "unordered",
          "items": [
            "Milk",
            "Eggs",
            "Bread",
            "Cheese",
            "Tomatoes"
          ]
        }
      }
    ],
    "version": "2.8.1"
  }
  
  **Explanation:**
  
  * **time:** This field stores the timestamp when the data was created or last modified.
  * **blocks:** This is the main array containing all the blocks of your editor.js content.
  * **id:** Unique identifier for each block.
  * **type:** Defines the type of block. In this example, we have three types:
      * **header:** Represents a heading.
      * **paragraph:** Represents a paragraph of text.
      * **list:** Represents an unordered list of items.
  * **data:** Contains the actual content of the block. 
      * **text:** Holds the text content for headers and paragraphs.
      * **level:** Defines the level of heading (1, 2, 3, etc.).
      * **style:** Defines the style of the list (unordered or ordered).
      * **items:** An array of strings representing the list items.
  
  **How to use it:**
  
  This JSON structure represents a basic grocery list in editor.js format. You can use it as a starting point and:
  
  * **Add more items to the list:** Add more items to the "items" array within the "list" block.
  * **Change the content:** Modify the "text" values in the "header" and "paragraph" blocks to add more information or change the title.
  * **Add more blocks:** Use other editor.js block types to create a more complex and interactive grocery list (e.g., checkboxes for done items, images, etc.).
  * **Use editor.js:** Integrate this JSON with the editor.js library to display and edit this content in a user-friendly interface.
  
  This JSON structure can be used to create a simple grocery list within an editor.js environment. You can expand on it further to include more features and functionality. 
  `},
        ],
      },
    ] as HistoryItem[],
  });
  
  // Uncomment the following lines to use the chat session
  // async function sendMessage(input: string): Promise<string> {
  //   const result = await chatSession.sendMessage(input);
  //   return result.response.text();
  // }
  
  // Example usage:
  // sendMessage("INSERT_INPUT_HERE").then(console.log);