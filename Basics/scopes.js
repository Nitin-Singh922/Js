//var a = 30;
let a = 20;
if(true) {
    let a = 60;
    const b = 90;
    console.log("Inner: ", a);
}
//console.log(a);

function one() {
    const username = "nitin";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();