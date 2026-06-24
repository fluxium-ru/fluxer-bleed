import { Client, Events } from "@fluxerjs/core";
import config from "./config.js";
import dotenv from "dotenv";
import { commands, loadCommands } from "./command-loader.js";
import { addDeletedMessage } from "./stores/deletedMessages.js";
import { getAfk, removeAfk } from "./stores/afkLogs.js";

// setup jank
dotenv.config();
const bleed = new Client({ intents: 0 });

bleed.events
  .Ready(() => console.log("Bleed started!"))
  .events.MessageCreate(async (message) => {
    if (!bleed.user) return;
    if (message.author.id === bleed.user.id) return;

    // afk jank
    const isAfk = await getAfk(message.author.id);
    if (isAfk) {
      await removeAfk(message.author.id);
      await message.reply({ content: "Removed your AFK!" });
    }

    // checking if an afk user pinged
    if (message.mentions) {
      for (const item of message.mentions) {
        const res = await getAfk(item.id);
        if (res) {
          await message.reply(
            `${item.globalName} is afk with reason ${res.reason}`,
          );
        }
      }
    }

    // more jank
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/\s+/);

    const commandName = args.shift()?.toLowerCase();
    const command = commands.get(commandName);
    await command.execute(message, args);
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
