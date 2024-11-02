// typeof
// java has 7 data types
//string 
// number
//NULL
//bigint
// undefined
//object
//bollean
//symbol
// const stringdemo = "Helo";
// console.log(typeof stringdemo);

// const number = 10
// console.log(typeof number);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof 124n);
// console.log(typeof Symbol());
// console.log(typeof x);

// //the typeof operator return only two  types
// // object and function
// console.log(typeof new Set());
// console.log(typeof new Map());
// console.log(typeof new Date());
// console.log(typeof [1, 2, 3, 4, 5]);
// console.log(typeof function(){});
// console.log("/n");

// let dfdf ="5";
// let fghgf = + dfdf;
// console.log(typeof fghgf);
// console.log("/n");
// console.log("/n");
// let xxxx = 123;
// console.log( String(123));
// console.log(typeof String(xxxx));

//
// const person = {
//     lastname: "nguyen",
//     firstname: "van",
//     age: 20

// }
// const {lastname, firstname, age, country="USA"} = person

// console.log(firstname + " " + lastname + " " + country);
// console.log();

// const {firstname: name} = person
// console.log(name);
// // String Destructuring
// const logo = "Phan Huu Dat";
// const [a,b,c,d,e,f] = logo;
// console.log(a+b+c+d+e+f);

// // array destructuring

// const apple = ["red", "green","blue"];
// const [color1,,color3] = apple;
// console.log(color1 + " " + color3);
// console.log(10>>>2);

// // convert decimal to binary
// console.log((100>>0).toString(2));
// function convertBinaryToDecimal(binary){
//     return parseInt(binary,2).toString(10);
// }
// console.log(convertBinaryToDecimal("100"));

// regular expression
// const dat = "trang"

// const searched = dat.search(/rang/i);
// console.log(searched);

// const resuft = "is this is this ti tiloamdfd dfdk dfdjdkdf fdfjkd dfjdfk"
// const resuft2 = resuft.match(/this/g);
// console.log(resuft2);

// const resuft3 = "this is this ti tiloamdfd dfdk dfdjdkdf fdfjkd dfjdfk"
// const resuft4 = resuft3.replace(/this/m,"that");
// console.log(resuft4);

// const resuft = "ts this this this ";
// const resuft2 = resuft.match(/thi/d);
// console.log(resuft2);

function myConvert(){
    console.log("convert");
    const number = document.getElementById("demo").value;
    let  test = document.getElementById("demo1").innerHTML ="";
    try{
        if(number.trim() == "")throw "empty";
        if(isNaN(number)) throw "not a number";
        // if(number < 10 || number > 100) throw "out of range";
        x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
    }catch(err){
        test.innerHTML = "this err is " + err;
    }
    
}
// function myFunction() {
//     const message = document.getElementById("demo1");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x.trim() == "")  throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
// }
