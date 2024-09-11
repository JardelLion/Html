let list = {
    0: "javascript",
    1: 'Symbol',
    length: 2,
    [Symbol.isConcatSpreadable]: true
};


let message = [
    'Learning'
].concat(list);

console.log(message);