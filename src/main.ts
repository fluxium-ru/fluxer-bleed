import { Client, Events } from "@fluxerjs/core";
import config from "./config.js";
import dotenv from "dotenv";
import { commands, loadCommands } from "./command-loader.js";
import { addDeletedMessage } from "./stores/deletedMessages.js";

// setup jank
dotenv.config();
const bleed = new Client({ intents: 0 });

bleed.events
  .Ready(() => console.log("Bleed started!"))
  .events.MessageCreate(async (message) => {
    // more jank
    if (!message.content.startsWith(config.prefix)) return;
    if (!bleed.user) return;
    if (message.author.id === bleed.user.id) return;

    const commandName = message.content.slice(config.prefix.length).trim();
    const command = commands.get(commandName);
    await command.execute(message, []);
  })
  .events.MessageDelete(async (message) => {
    if (!message.content) return;
    if (!message.authorId) return;
    addDeletedMessage(message.content, message.authorId, message.channelId);
  });

async function start() {
  if (!process.env.FLUXER_BOT_TOKEN) {
    return;
  }
  await bleed.login(process.env.FLUXER_BOT_TOKEN);
}

await loadCommands();
await start();
