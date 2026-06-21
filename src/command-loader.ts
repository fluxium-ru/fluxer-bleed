import { readdir } from "fs/promises";
import { join } from "path";

export const commands = new Map();

export async function loadCommands() {
  const files = await readdir(join(process.cwd(), "dist", "commands"));
  for (const file of files) {
    if (!file.endsWith(".js")) continue;
    const command = await import(join(process.cwd(), "dist", "commands", file));

    commands.set(command.default.name, command.default);
  }
}
