//Finding max and min without sorting
var array = new Array();
for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 100;
}
array.forEach(i => console.log(i));
var max = Math.max(...array);
var min = Math.min(...array);
for (var i = 0; i < array.length; i++) {
    if (array[i] == max || array[i] == min) {
        array.splice(i, 1);
        i-- ;
    }
}
var max = Math.max(...array);
var min = Math.min(...array);
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);


