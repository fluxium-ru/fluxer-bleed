import { EmbedBuilder, type Message } from "@fluxerjs/core";
import { getDeletedMessages } from "../stores/deletedMessages.js";

export default {
  name: "snipe",
  async execute(message: Message, args: string[]) {
    const content = await getDeletedMessages(message.channelId);
    // if not message exists
    if (!content) {
      const embed = new EmbedBuilder()
        .setTitle("Error!")
        .setDescription("No snipes found.")
        .setColor("#ff0505");
      await message.reply({ embeds: [embed] });
      return;
    }
    const embed = new EmbedBuilder()
      .setTitle("Message Snipe 🔫")
      .setDescription(content.content)
      .setAuthor({
        name: `User ID: ${content.authorId}`,
      });
    await message.reply({ embeds: [embed] });
  },
};
