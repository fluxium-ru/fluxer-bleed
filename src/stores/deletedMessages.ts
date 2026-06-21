const deletedMessages: string[] = [];

export function addDeletedMessage(content: string) {
  deletedMessages.push(content);
}

export function getDeletedMessages() {
  return deletedMessages;
}
