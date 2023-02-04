# [Typescript] Coding Problems Template
This is a template that can be used for any problems website ([hackerrank](https://hackerrank.com), [leetcode](https://leetcode.com), etc).

You only need to update the `main.ts` file as explained:

## Explaining the template
- `Input` type is the function arguments
- `Result` type is the function return type
- `cases` is the Array of testing inputs for your function
- `results` is the Array of expected outputs for your function
- `fn` is basically your function, you just need to edit the body and you can, as I did, destructure the args

## Run
To transpile and run, you need to have [NPM](https://www.npmjs.com/) and Typescript installed globally (`npm install -g typescript` => [package](https://www.npmjs.com/package/typescript)) then run these 2 commands:
- `tsc -p .\tsconfig.json`
- `node build/runner.js`

For example, in [Powershell](https://learn.microsoft.com/en-us/powershell/), you can do it in one line:
- `tsc -p .\tsconfig.json; node build/runner.js`
