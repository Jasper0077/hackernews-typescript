# Typescript - Apollo Server Tutorial

A note to record my typescript + Apollo tutorial. From [HOW TO GRAPHQL](https://www.howtographql.com/typescript-apollo/1-getting-started/) :fire:.  

## Setup

```
npm i --save-dev typescript ts-node-dev
npm i apollo-server@3.1.1 graphql@15.5.1 nexus@1.1.0
```

or

```
yarn add --dev typescript ts-node-dev
yarn add apollo-server@3.1.1 graphql@15.5.1 nexus@1.1.0
```

after installing the dependecies, setup your tsconfig, by running or just copy paste.
```
npx tsc --init
```

I added this into my npm script in `package.json`
```json
// ...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --transpile-only --no-notify api/index.ts",
  "build": "tsc"
},
// ...
```

Lastly, you can set up your git (optional) like this:

```git
git init
```

Add node_modules to `.gitignore`
```
node_modules
```

Do the normal `git add`, `git commit`, `git push` to your remote.

## Nexus Setup

Nexus comes handy when generating graphql schema. To set up, do:

```ts
// src/schema.ts
import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
    types: [],
    outputs: {
      typegen: join(__dirname, '..', 'nexus-typegen.ts'),
      schema: join(__dirname, '..', 'schema.graphql'),
    },
})
```

In your terminal run this to generate the `typegen` and `.graphql`,
```
npx ts-node --transpile-only src/schema
```

Add this to `package.json`:
```json
  "scripts": {
    // ...
    "gen": "ts-node --transpile-only src/schema.ts", // add this line
    "build": "tsc"
  },
```

- typegen: For auto-generated TypeScript interface and type definitions.
- graphql: For graphql schema definitions.
- You can run `npm run gen` to update your `schema.graphql` and `nexus-typegen.ts` file when there are any changes in your Nexus code.
- You can use `npm run dev` to start the web server and watch for any changes.


# Notes
1. Predefined scalar types in Graphql is `Int`, `Float`, `String`, `Boolean` and `ID`.