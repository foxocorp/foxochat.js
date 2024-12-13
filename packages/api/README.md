# Foxogram API

The API client for foxogram.js

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @foxogram/api
yarn add @foxogram/api
pnpm add @foxogram/api
```

## Usage

```ts
import { API } from "@foxogram/api";
import { REST } from "@foxogram/rest";

const rest = new REST().setToken(TOKEN);
const api = new API(rest);

try {
  await api.message.create(CHANNEL_ID, {
    content: "floof by coof",
  });
} catch (error) {
  console.error(error);
}
```
