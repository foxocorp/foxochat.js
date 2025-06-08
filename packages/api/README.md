# FoxoChat API

The API client for foxochat.js

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @foxochat/api
yarn add @foxochat/api
pnpm add @foxochat/api
```

## Usage

```ts
import API from "@foxochat/api";

const api = new API(rest);

api.rest.token = TOKEN;

try {
  await api.message.create(CHANNEL_ID, {
    content: "floof by coof",
  });
} catch (error) {
  console.error(error);
}
```
