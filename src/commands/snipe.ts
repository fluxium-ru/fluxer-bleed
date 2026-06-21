import type { Message } from "@fluxerjs/core";
import { getDeletedMessages } from "../stores/deletedMessages.js";

export default {
  name: "snipe",
  async execute(message: Message, args: string[]) {
    const content = await getDeletedMessages(message.channelId);
    if (!content) return;
    await message.reply(content.recent);
  },
};
