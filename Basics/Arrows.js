const user = {
    username: "Nitin", 
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage();
//user.username = "Sumit";
//user.welcomeMessage();

//console.log(this);

//function one() { //this cannot use in function
//  let username = "Nitin";
//  console.log(this.username);
//}

const one = () => { //this is a Arrow Function
    let username = "Nitin";
    console.log(this.username);
}
one();

//Addition by Arrow function
//const Add = (num1, num2) => {
//    return num1+num2;
//}

const Add = (num1, num2) => num1+num2; //Implicit method in Arrow Function

console.log(Add(3, 7));