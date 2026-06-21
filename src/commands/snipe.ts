import type { Message } from "@fluxerjs/core";
import { getDeletedMessages } from "../stores/deletedMessages.js";

export default {
  name: "snipe",
  async execute(message: Message, args: string[]) {
    const content = getDeletedMessages();
    await message.reply(content.join("\n"));
  },
};
