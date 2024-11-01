// //create new Set
// const letters = new Set(['a','b','c']);

// // add elements

// letters.add('d');
// letters.add('e');

// // values chi xuat hien 1 lan trong set
// const number = new Set([1,2,3,4,5]);
// // the add() methods
// number.add(2);
// number.add(3);
// number.add(4);
// number.add(5);
// // console.log(number.size);


// // lay cac value trong set
// // su dung for of 
// let text = "";
// for(const value of number){
//     text += value + "\n";
// }
// console.log(text);

// // typeof set
// console.log(typeof letters);
// // so sanh typeof cua number va set
// console.log(number instanceof Set);

// // the has() methods
// // tim kiem phan tu 3 co trong set hay khong
// console.log("phan tu 3 co trong set number : "+ number.has(3));

// // the forEach() methods

// number.forEach((value) => {
//     console.log(value);
// })

// // the values() methods === the keys() method 
// // tra ve tung value trong cac value cua set
// // The values() method returns an Iterator object with the values in a Set:
// // Example 1
 
// // Create a Set
// const sets = new Set(['a', 'b', 'c']);

// // get all values
// const value = sets.values();
// for(const ans of value )
// {
//     console.log(ans);
// }
// // Example 2
// for(const value of sets.values()){
//     console.log(value);
// }

// // Example 3
// for(const value of sets.keys()){
//     console.log(value);
// }


// // the entries() methods
// // vi trong set khong co khoa nen tra ve {value, value}

// // Example
// console.log("\n")

// for(const [index,value] of sets.entries()){
//     console.log(value);
// }

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// const numb = fruits.get("apples");
//   console.log(numb);


const fruits = new Map(
    [
        ["Apples",1],
        ["Oranges", 200],
        ["Bananas", 300]
    ]
)
// return value of key
console.log(fruits.get("Apples"));

// set value of key
fruits.set("Apples", 2);
console.log(fruits.set("Apples",3330));

// typedof

console.log(typeof fruits); 

console.log(fruits instanceof Map);

const trang = new Map();
// set trong map

trang.set("Name", "Thoi");
trang.set("Age", 19);
trang.set("Address", "HaNoi");

for(const [key,value] of trang){
     console.log(key+" :" + value);

}
// size trong map

console.log(trang.size);

// delete trong map

trang.delete("Name");

for(const [key,value] of trang){
    console.log(key +" : " + value);
}

// clear trong map: removed all elements in Map
// trang.clear();
//  trang.size();
// has trong map

console.log(trang.has("dfjdfkdj"))

