

function empList(){

    let list = ["Harsh", "Vishal","Hitbulls","Javeed","Geetu","Surbhi","Tom"];

    console.log(list);


    list.forEach((data)=>{    //callback function
        console.log(data)
});



console.log("using filter method");
//filter method
list.filter((name)=> {return name.length > 6}).forEach((data)=>{console.log(data)})


console.log("using reduce method")
//reduce method
let salaries=[3000,4000,5000,2000,7000,1000];

let totalSal = salaries.reduce((s1,s2) => {return s1+s2})

console.log(totalSal);


console.log("using map method")

//map method
salaries.map((sal)=>{ 
 return sal+1000;
})
.forEach((data)=>{console.log(data)})



//pop method
console.log("Top value: "+list.pop())

console.log("Deleted value: "+list.splice(0,2))
console.log(list)

}  