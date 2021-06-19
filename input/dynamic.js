const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');

for(let i = 0; i < input.length; i ++){
    eval(`var ${String.fromCharCode(i+65)} = ${parseInt(input[i])}`)//A,B,C,....
}
