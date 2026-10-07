// console.log("Hello JS");
// {
//     const name="Sahan"
//     var age=19
//     let address="Moratuwa"
//     console.log("Name    : ",name);
//     console.log("Age     : ",age);
//     console.log("Address : ",address);    
// }
// console.log("Name    : ",name);
// console.log("Age     : ",age);
// console.log("Address : ",address);

// let customerList =["Saman","Nimal","Kamal"]
// console.log(customerList);
// customerList="Kumara"
// console.log(customerList);

// const customerNameList =["Saman","Nimal","Kamal"]
// console.log(customerNameList);
// customerNameList.push("Kumara")
// //customerNameList="Kumara" --> Illegal
// console.log(customerNameList);

// customerNameList.pop()
// console.log(customerNameList);

// const Student=[];
// const StudentList=[];
// Student.push("Sahan");
// Student.push(18);
// Student.push("Moratuwa");
// StudentList.push(Student)
// console.log(StudentList);

// const productList=[
//     {name: "bun", inStock: true, price: 100},
//     {name: "milk", inStock: false, price: 120},
//     {name: "egg", inStock: true, price: 140},
//     {name: "bread", inStock: false, price: 160},
//     {name: "butter", inStock: true, price: 180}
// ]
// console.log(productList);

// let inStockProducts = productList.filter( product => product.inStock == true )
// console.log(inStockProducts);

// //Normal functions
// function addNumber(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(10,5));

// //Variable assigned function
// let getSum = function(num1,num2){
//     return num1+num2
// };
// console.log(getSum(10,5));

// //variable assigned arrow functions
// let getTotal = (num1,num2) => num1+num2;
// console.log(getTotal(10,5));

// //annonyms functions
// (num1,num2)=>num1+num2;
// (num1,num2) =>{
//     return num1+num2;
// }

//Array sort
// const numbers=[1,2,3,4,5,6,7,8,9,10]
// console.log(numbers);
// console.log(numbers.map(numbers=>numbers*2));

const StudentList = [
    {name: "Saman", age: 20, gender: "male"},
    {name: "Nimal", age: 21, gender: "male"},
    {name: "Kamal", age: 22, gender: "male"},
    {name: "Sunil", age: 23, gender: "male"},
    {name: "Kumara", age: 24, gender: "male"}
]
console.log(StudentList.find(Student=> Student.name == "Kumara"));

fetch("/customer.json").then(res => res.json()).then(data =>{
    console.log(data);    
});