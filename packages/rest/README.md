# FoxoChat REST

The HTTP REST API client for foxochat.js

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @foxochat/rest
yarn add @foxochat/rest
pnpm add @foxochat/rest
```

## Usage

```ts
import REST from "@foxochat/rest";
import { APIRoutes, RouteUrlsMap } from "@foxochat/api-types";

const rest = new REST({
  baseURL: RouteUrlsMap.production.api,
});

rest.token = TOKEN;

try {
  await rest.post(APIRoutes.messages(CHANNEL_ID), {
    body: {
      content: "floof by coof",
    },
  });
} catch (error) {
  console.error(error);
}
```
