# Bleed

A modular bot built with Fluxer.js and TypeScript.

## Features

- Modular command system
- Dynamic command loading
- Snipe deleted messages
- AFK system
- Vanity invite claiming
- TypeScript support

## Installation

Clone the repository:

```bash
git clone https://github.com/fluxium-ru/fluxer-bleed.git
cd bleed
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
FLUXER_BOT_TOKEN=your_token_here
```

Start the bot:

```bash
npm run dev
```

## Project Structure

```txt
src/
├── commands/
│   ├── afk.ts
│   ├── snipe.ts
│   └── ...
├── stores/
│   ├── afk.ts
│   └── deletedMessages.ts
├── command-loader.ts
├── config.ts
└── main.ts
```

## Commands

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| ping       | Check if the bots online                       |
| snipe      | View the latest deleted message in the channel |
| clearsnipe | Clear stored deleted messages                  |
| afk        | Mark yourself as AFK                           |
| claim      | Check vanity requirements                      |

## Environment Variables

| Variable         | Description                    |
| ---------------- | ------------------------------ |
| FLUXER_BOT_TOKEN | Bot token used to authenticate |

## Adding Commands

Create a file inside `src/commands`:

```ts
export default {
  name: "ping",

  async execute(message, args) {
    await message.reply("Pong!");
  },
};
```

Commands are loaded automatically on startup.

## Development

Built with:

- TypeScript
- Node.js
- Fluxer.js

## License

MIT
