import { fn, cases, results } from "./main";

function RunTestCases<T, R>(f: (args: T) => R, cases: Array<T>, results: Array<R>) {
    console.time("Ran all cases in");

    for (let i = 0; i < cases.length; i++) {
        console.time(`[Case ${i+1}]`);
        const answer = f(cases[i]);
        console.timeEnd(`[Case ${i+1}]`);

        console.log(answer == results[i] ? "Successful assertion" : "Assertion failed");
        console.log(`Have: ${answer}`);
        console.log(`Want: ${results[i]}`);
    }
    
    console.timeEnd("Ran all cases in");
}

RunTestCases(fn, cases, results);
