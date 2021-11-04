<h1 align="center">ES Module Defaults for TypeScript Libs</h1>

[![Unit Tests](https://github.com/charliewilco/esm-ts-defaults/actions/workflows/node.yml/badge.svg)](https://github.com/charliewilco/esm-ts-defaults/actions/workflows/node.yml)

Uses prettier, rollup & esbuild for the example.

## Install

```sh
yarn add @charliewilco/module
```

## Usage

```ts
import { SomeClass } from "@charliewilco/module";

const c = new SomeClass();

c.useMethod();
```
