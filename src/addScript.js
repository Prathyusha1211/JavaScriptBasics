//printing something in the console
let name="Hi...";
console.log(name);

//checking variable scope when used let
let a=30;
if(true){
    let a=50;
    console.log(a);
}
console.log(a);

//using const key keyword
const colors=[];
colors.push('blue');
colors.push('red');
console.log(colors);

//declaring a Class
class User{
    constructor(name,password,email) {
        this.name=name;
        this.password=password;
        this.email=email;
    }
    static userCount(){
        console.log("there are 20 users");
    }
    register(){
        console.log(this.name+" is registered..");
    }
}

User.userCount();

let prathyu = new User("prathyu","4866","melam@gmail.com");
prathyu.register();

//Inheriting the class User
class Member extends User{
    constructor(name,password,email,membership) {
        super(name,password,email);
        this.package=membership;
    }

    member(){
        console.log(this.name+" has a "+this.package+" package");
    }
}

let shalu = new Member("Shalini","1234","shalu@gmail.com","monthly");
shalu.member();
shalu.register();

//Template to be displayed
let giveName = "Prathyu";
function makeUpperCase(word){
   return word.toUpperCase();
}
let template = `<h1>Hello ${makeUpperCase("miss ")},${giveName}</h1>
    <p>This is text from template div</p>`;
document.getElementById('template').innerHTML=template;

//String methods
let stringSample = "I like to code in java script";
console.log(stringSample.startsWith("like")); //startsWith checks whether the string started with the given word
console.log(stringSample.endsWith("script")); //endsWith checks whether the string ended with the given word
console.log(stringSample.includes("in")); //includes checks whether the string included in the taken string

//Number methods
console.log(Number.isInteger(2));
console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(2));
//binary number
console.log(0b111)
//hexa decimal
console.log(0xA);
//octal
console.log(0o543);

//Using default parameters
function greet($greeting = "Hello people"){
    console.log($greeting);
}
greet("hello Shalini")

//Using spread operator ...

let args1 = [1,2,3]
let args2 = [4,5,6]
function test(x,y,z){
    console.log(x+y+z);
}
test(...args2); // gives output 15
let args3 = [...args1,7,8,9];
console.log(args3); //give output [1,2,3,7,8,9] using spread operator we can add, duplicate,combine arrays
//test(...args1);
//test.apply(null,args1);

// Set and its inbuilt methods
let arr = [1,2,3,4];
let mySet = new Set(arr);
console.log(mySet.size); //gives size of the Set
mySet.add(100); // can add elements using .add
mySet.add("Hey"); // we can add any type of elements irrelevant to data type
mySet.delete(4); // we can delete any specific value using .delete
mySet.clear(); // it deletes all the entries in the set
mySet.add(45);
mySet.add(25);
console.log(mySet);
mySet.forEach(
    function (val){
        console.log("element is "+val);
    }
); // we can traverse the elements using forEach

//Map and its inbuilt functions
let myMap = new Map([['a1','Hi'],['a2','Hello'],['a3','people']])
myMap.set('a4','Great'); // can add elements with key value pair using .set
myMap.delete('a3'); // can delete a set using .delete by giving key
console.log(myMap.size);
console.log(myMap);

//using Arrow functions
function PreFixer(prefix){
    this.prefix = prefix;
}
PreFixer.prototype.prefixArray = function (arr){
    return arr.map((x)=>{
        console.log(this.prefix+x);
    });
}
let pre = new PreFixer('Hello ');
pre.prefixArray(['prathyu','shalu']);

let add = (a,b)=>{console.log(a+b)}
add(21,3);

// Promises (Immediately resolved promises)
let myProm = Promise.resolve('Ganesh');
myProm.then((res)=>{console.log(res);});


//Generators
function *gen(){
    console.log("Hello");
    yield "yield 1 ran";
    console.log("World");
    yield "yield 2 ran";
    return "Returned"
}
let g = gen();
//console.log(g.next().value);
//console.log(g.next().value);
for(let data of g){
    console.log(data);
}

