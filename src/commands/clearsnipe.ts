import { EmbedBuilder, type Message } from "@fluxerjs/core";
import { clearSnipe } from "../stores/deletedMessages.js";

export default {
  name: "clearsnipe",
  async execute(message: Message, args: string[]) {
    await clearSnipe(message.channelId);
    const embed = new EmbedBuilder().setTitle("Cleared Snipe!");
    await message.reply({ content: "", embeds: [embed] });
  },
};
