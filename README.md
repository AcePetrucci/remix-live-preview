# Welcome to Item Bank Tooling!

This is a Monorepo containing both a `Storybook React Components library` and a `Remix application` to be used as a `ContentStack Live Preview app`.

## General Info

This Monorepo uses [pnpm](https://pnpm.io/), [nx](https://nx.dev/) and [turborepo](https://turborepo.org/) to manage both the `apps` and `libs` folder.

### Monorepo Structure

```
/apps
  /live-preview
  /[possible-new-app]
/libs
  /lp-components
  /[possible-new-lib]
```

## Live Preview

### Built with:

- [Remix](https://remix.run/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [ContentStack SDK](https://github.com/contentstack/contentstack-javascript)

## LP Components

### Built with:

- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

### -> First, install `nodejs LTS` with `NVM`:

Ref Linux/Mac: [Install Node using nvm](https://github.com/nvm-sh/nvm)

Ref Windows: [Install Node using nvm-windows](https://github.com/coreybutler/nvm-windows)

**Make sure you are using Node@^16.17.0**

### -> Then, install `pnpm` globally with `npm`:

```shell
$ npm i -g pnpm
```

### -> Then, install everything at the root of `item_bank_tooling`:

```shell
$ pnpm i
```

### -> Now you can read further each project to individually get them running:

### Apps

- [Live Preview](https://github.com/SalesPerformanceInt/item_bank_tooling/tree/main/apps/live-preview)

### Libs

- [LP Components](https://github.com/SalesPerformanceInt/item_bank_tooling/tree/main/libs/lp-components)
