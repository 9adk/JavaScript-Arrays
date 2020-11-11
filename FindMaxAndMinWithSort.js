//Finding max and min with sorting
var newArray = new Array();
for (var i = 0; i < 10; i++) {
    newArray[i] = Math.floor(Math.random() * 900) + 100;
}
newArray.forEach(i => console.log(i));
var max = Math.max(...newArray);
var min = Math.min(...newArray);
for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] == max || newArray[i] == min) {
        newArray.splice(i, 1);
        i-- ;
    }
}
var max = Math.max(...newArray);
var min = Math.min(...newArray);
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);
