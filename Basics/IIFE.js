//Immediately Invoked Function Expressions (IIFE)

//()()
(function one() {
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //Unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Nitin");