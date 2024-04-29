console.log("Start");

// Map
function createCustomMap(args,callback){
    const customMapArray =[];
    for (let i = 0; i < args.length; i++) {
        customMapArray.push(callback(args[i]));
    }
    return customMapArray;
}
let list = [1,4,7,8];
let MapArray =createCustomMap(list,(num)=>num+2); //callback function of adding 2 to each element
console.log("Original "+list);
console.log("Map "+MapArray);

// Filter
function filter(args,callback){
    const filteredArray = [];
    for (let i = 0; i < args.length; i++) {
        if(callback(args[i])){
            filteredArray.push(args[i]);
        }
    }
    return filteredArray;
}
let FilterArray = filter(list,(num)=>num % 2 === 0); //callback function which filters even numbers
console.log("Filter "+FilterArray);

// Reduce
function reduce(args,callback){
    let maxValue=0;
    for (let i = 0; i < args.length; i++) {
        maxValue=callback(maxValue,args[i]);
    }
    return maxValue;
}
let ReduceArray = reduce(list,(maxValue,currentValue)=>{ return currentValue>maxValue?currentValue:maxValue}) //callback function which returns maximum value in the list
console.log("Reduce "+ReduceArray);

// forEach
function customForEach(args,callback){
    for (let i = 0; i < args.length; i++) {
        callback(args[i]);
    }

}
console.log("forEach : ");
customForEach(list,(num)=> {console.log(num*2);});



console.log("End");
