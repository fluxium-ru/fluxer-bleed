import type { Message } from "@fluxerjs/core";
import type { Command } from "../types/command.js";

const brainrots = [
  "Tralalero Tralala",
  "Tung Tung Tung Sahur",
  "Brr Brr Patapim",
  "Bombardilo Crocodilo",
  "Chimpanzini Bananini",
];

export default {
  name: "brainrot",
  async execute(message: Message, args: string[]) {
    const ind: number = Math.floor(Math.random() * brainrots.length);
    const result: string | undefined = brainrots[ind];
    if (!result) return;
    await message.reply({ content: result });
  },
} satisfies Command;
