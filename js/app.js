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

const productList=[
    {name: "bun", inStock: true, price: 100},
    {name: "milk", inStock: false, price: 120},
    {name: "egg", inStock: true, price: 140},
    {name: "bread", inStock: false, price: 160},
    {name: "butter", inStock: true, price: 180}
]
console.log(productList);

let inStockProducts = productList.filter(
    function(product){
        return product.inStock == true;
    }
)
console.log(inStockProducts);
