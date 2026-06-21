import { readFile, writeFile } from "fs/promises";
const FILE = "data/messageLogs.json";

interface ChannelLogs {
  [channelID: string]: {
    content: string;
    authorId: string;
  };
}

export async function addDeletedMessage(
  content: string,
  authorId: string,
  channelID: string,
) {
  const raw = await readFile(FILE, "utf-8");
  const logs: ChannelLogs = JSON.parse(raw);

  logs[channelID] = {
    content: content,
    authorId: authorId,
  };

  await writeFile(FILE, JSON.stringify(logs, null, 2));
}

export async function getDeletedMessages(channelID: string) {
  const raw = await readFile(FILE, "utf-8");
  const logs: ChannelLogs = JSON.parse(raw);

  return logs[channelID];
}

export async function clearSnipe(channelId: string) {
  const raw = await readFile(FILE, "utf-8");
  const logs: ChannelLogs = JSON.parse(raw);
  delete logs[channelId];
  await writeFile(FILE, JSON.stringify(logs, null, 2));
}
