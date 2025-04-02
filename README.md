# TON Global Config

Small library for working with TON config contract.

> This is a fork of [@tact-lang/ton-contract-config](https://github.com/tact-lang/ton-contract-config) by Steve Korshakov, updated to use `@ton/core` and `@ton/crypto` packages instead of the legacy `ton-core` and `ton-crypto`.

## Installation

```bash
yarn add ton-global-config @ton/core @ton/crypto
```

## Usage

```ts
import { ConfigContract, Config } from 'ton-global-config';

// Load config from network
const config = client.open(ConfigContract.create());
const rawConfig: Dictionary<number, Cell> = await config.getRawConfig(); // Dictionary<number, Cell>
const config: Config = await config.getConfig();
```

## License

MIT
