import { Dictionary, Cell, beginCell } from '@ton/core';

const configKey = Dictionary.Keys.Int(32);
const configValue = Dictionary.Values.Cell();

type ConfigDict = Dictionary<number, Cell>;

export function cellToConfigDict(cell: Cell): ConfigDict {
    return Dictionary.loadDirect(configKey, configValue, cell);
}

export function configDictToCell(dict: ConfigDict): Cell {
    return beginCell().storeDictDirect(dict).endCell();
}
