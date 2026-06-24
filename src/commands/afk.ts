/*
 ** STILL IN DEV!!
 */
import type { Message } from "@fluxerjs/core";
import { getAfk, setAfk } from "../stores/afkLogs.js";

export default {
  name: "afk",
  async execute(message: Message, args: string[]) {
    await message.author;
    const result = await setAfk(
      message.author.id,
      args[0] || "Undefined reason",
    );
    if (!args[0]) {
      await message.reply("Set AFK.");
    } else {
      await message.reply(`Set AFK for: ${args[0]}`);
    }
  },
};
