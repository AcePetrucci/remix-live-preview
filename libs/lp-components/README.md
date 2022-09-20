# LP Components

LP Components is a pure [React](https://reactjs.org/) component library that only runs a [Storybook](https://storybook.js.org/) application at [http://localhost:6006](http://localhost:6006).

The `dev` script runs both the Storybook and the React Components with [Vite](https://vitejs.dev/) concurrently.

## Built with:

- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/developers/)
- [Tailwind](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

First, follow the steps mentioned at the root [README](https://github.com/SalesPerformanceInt/item_bank_tooling).

Then, you can either run the Storybook from this folder, or at the root folder.

### -> To run it from this folder:

```shell
$ pnpm dev
```

### -> To run it at the root folder:

```shell
$ pnpm dev:lib
```

## Build

### -> To build LP Components:

```shell
$ pnpm build
```

### -> To build only the Storybook:

```shell
$ pnpm build:storybook
```

### -> To build only the React Components:

```shell
$ pnpm build:components
```

### -> To build LP Components at the root folder:

```shell
$ pnpm build:lib
```
