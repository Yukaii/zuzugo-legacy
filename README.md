# Zuzugo

## Setup

```bash
npm install
npm i -g lerna
lerna boostrap
```

## Development build

```bash
lerna run build:watch --stream
# you can also limit build scope
# lerna run build:watch --stream --scope zenchi-zennou
npm run test -- --watch
```
