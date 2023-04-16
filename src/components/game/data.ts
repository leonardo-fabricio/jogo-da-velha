
export type valueType = "O" | "X"| undefined

export interface ValueSquare{
    value: valueType,
    filled?: boolean
}

export const dataInitial: ValueSquare[] = [
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
    {value: undefined, filled: false},
]