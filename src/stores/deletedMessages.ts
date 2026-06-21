import { readFile, writeFile } from "fs/promises";
const FILE = "data/messageLogs.json";

interface ChannelLogs {
  [channelID: string]: {
    recent: string;
  };
}

export async function addDeletedMessage(content: string, channelID: string) {
  const raw = await readFile(FILE, "utf-8");
  const logs: ChannelLogs = JSON.parse(raw);

  logs[channelID] = {
    recent: content,
  };

  await writeFile(FILE, JSON.stringify(logs, null, 2));
}

export async function getDeletedMessages(channelID: string) {
  const raw = await readFile(FILE, "utf-8");
  const logs: ChannelLogs = JSON.parse(raw);

  return logs[channelID];
}
