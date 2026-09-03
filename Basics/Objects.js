//Singleton
Object.create

//Object literals
const JsUser = {
    name: "Nitin",
    "full name": "Nitin Singh",
    age: 20,
    location: "Prayagraj",
    email: "nitin95@gmail.com"
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])

JsUser.email = "nitinsingh95@gmail.com"
//Object.freeze(JsUser) --> Objects ke elements me aab changes nhi honge
JsUser.email = "nitinsingh89@gmail.com"
console.log(JsUser["email"])

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//console.log(Object.keys(JsUser));
//console.log(Object.values(JsUser));
//console.log(Object.entries(JsUser));

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

const course = {
    coursename: "javaScript in hindi",
    price: "1099",
    courseInstructor: "ritesh"
}

const {coursename: Name} = course

//console.log(coursename);
console.log(Name);