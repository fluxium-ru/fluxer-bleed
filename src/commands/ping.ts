import type { Message } from "@fluxerjs/core";
import { type Command } from "../types/command.js";

export default {
  name: "ping",
  async execute(message: Message, args: string[]) {
    await message.reply("Pong! 🏓");
  },
} satisfies Command;
