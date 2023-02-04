type Input = {
    s: string,
}

type Result = string;

export const cases: Array<Input> = [
    {
        s: "string1",
    },
    {
        s: "string2",
    },
];

export const results: Array<Result> = [
    "result1",
    "result2",
];

export function fn(args: Input): Result {
    const { s } = args;
    
    return s;
}
