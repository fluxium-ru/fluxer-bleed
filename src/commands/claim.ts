// janky way of doing this
// very flawed
import type { Message } from "@fluxerjs/core";
import { getVanityConfig } from "../stores/vanityClaim.js";

export default {
  name: "claim",
  async execute(message: Message, args: string[]) {
    const config = await getVanityConfig(message.guildId || "");
    const member = await message.guild?.fetchMember(message.author.id);
    console.log(member);
    console.log(message.author.globalName);
    if (!config) {
      await message.reply("Vanity not configed for this guild.");
      return;
    }
    const hasVanity =
      message.author.globalName?.includes(config.vanity) ||
      message.author.username.includes(config.vanity);

    // if the vanity is already configed
    if (hasVanity) {
      // if display name contains vanity
      await member?.addRole(config.roleId);
      await message.reply("Claimed!");
    } else {
      // if display name DOESNT contain vanity
      await message.reply(`You don't have ${config.vanity} in your display!`);
    }
  },
};
