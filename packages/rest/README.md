# Foxogram REST

The HTTP REST API client for foxogram.js

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @foxogram/rest
yarn add @foxogram/rest
pnpm add @foxogram/rest
```

## Usage

```ts
import REST from "@foxogram/rest";
import { APIRoutes, RouteUrlsMap } from "@foxogram/api-types";

const rest = new REST({
  baseURL: RouteUrlsMap.production.api,
})

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
