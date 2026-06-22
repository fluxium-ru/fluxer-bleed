import { readFile, writeFile } from "node:fs/promises";
const FILE = "data/claimConfig.json";

interface ClaimData {
  [guildId: string]: {
    vanity: string;
    roleId: string;
  };
}

export async function getVanityConfig(guildId: string) {
  const raw = await readFile(FILE, "utf-8");
  const claimData: ClaimData = JSON.parse(raw);
  return claimData[guildId];
}
