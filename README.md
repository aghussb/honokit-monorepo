# HonoKit Monorepo

![cover](https://github.com/aghussb/honokit-monorepo/blob/main/docs/shotva-localhost_4173_.png)

A very simple monorepo starter using [pnpm](https://pnpm.io/) workspaces with shared types, built with [Hono](https://hono.dev/) and [SvelteKit](https://svelte.dev/docs/kit/introduction).

## Features

- Run tasks in parallel across apps / packages with pnpm
- Hono API [proxied with vite](./apps/web/vite.config.ts) during development
- Hono [RPC client](packages/api-client/src/index.ts) built during development for faster inference
- Shared tsconfig

## Local Setup

### Install dependencies

```sh
pnpm i
```

### Start Apps

```sh
pnpm run dev
```

### Build

```sh
pnpm run build
```

<!-- ## Example Implementation -->
<!---->
<!-- To see a working implementation of this boilerplate, check out the repository: -->
<!---->
<!-- * **[Simple Online Library](https://github.com/aghussb/simple-online-library)** -->

## Inspiration
- [bhvr](https://github.com/stevedylandev/bhvr)
- [monorepo-example-tasks-app](https://github.com/w3cj/monorepo-example-tasks-app)
