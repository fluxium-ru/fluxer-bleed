import type { Message } from "@fluxerjs/core";

export interface Command {
  name: string;
  aliases?: string[];
  execute(message: Message, args: string[]): Promise<void>;
}
