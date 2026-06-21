const afkUsers: AFKUser = {
  test: {
    reason: "test reason",
  },
};

interface AFKUser {
  [userId: string]: {
    reason: string;
  };
}

export async function getAfk(userID: string) {
  return afkUsers[userID];
}

export async function setAfk(userId: string, reason?: string) {
  if (!reason) return;
  afkUsers[userId] = {
    reason: reason,
  };
}
