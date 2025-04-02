import { Address, Cell, Contract, ContractProvider } from '@ton/core';
import { parseConfig } from './parsing';
import { cellToConfigDict } from './configDict';

export class ConfigContract implements Contract {
    static create(address?: Address) {
        return new ConfigContract(
            address ||
                Address.parseRaw(
                    '-1:5555555555555555555555555555555555555555555555555555555555555555'
                )
        );
    }

    readonly address: Address;

    private constructor(address: Address) {
        this.address = address;
    }

    async getConfigsRaw(provider: ContractProvider) {
        let state = await provider.getState();
        if (state.state.type !== 'active') {
            throw new Error('Contract is not active');
        }
        let sc = Cell.fromBoc(state.state.data!)[0].beginParse();
        return cellToConfigDict(sc.loadRef());
    }

    async getConfig(provider: ContractProvider) {
        return parseConfig(await this.getConfigsRaw(provider));
    }
}
