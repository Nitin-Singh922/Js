function SayMyName() {
    console.log("Nitin");
}

console.log(SayMyName);
SayMyName();

//Addition Function
//function addTwoNUm(num1, num2) {
//    console.log(num1 + num2);
//}

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

const result = add(3, 6);
console.log("Result: ", result);

function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Nitin"));
console.log(loginUserMessage());

function calculateprice(...num) {
    return num;
}
console.log(calculateprice(100, 300));

//function with Object
const user = {
    username: "NitinSingh",
    email: "nitinsingh95@gmail.com"
}
function handlesObj(anyobject) {
    console.log(`Username is ${anyobject.username} and email is ${anyobject.email}`);
}

handlesObj(user);
