var prompt = require('prompt-sync')();
let factInput = parseInt(prompt('Enter a number to find prime factors: '));
var result = new Array();
while(factInput % 2 == 0){
    result.push(2);
    factInput = factInput / 2;
}
for(var i = 3; i <= factInput*factInput; i = i + 2){
    while(factInput % i == 0){
        factInput = factInput / i;
        result.push(i);
    }
}
if(factInput > 2){
    result.push(2);
}
console.log("The factors are :");
for(var i = 0 ; i < result.length ; i++){
    console.log(result[i]);
}
