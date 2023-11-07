arr=[1,2,3,4,5];
arr.forEach(help);
function help(n,i, a)
{
  console.log(n,i,a);
}
console.log(arr.map((q,w)=>q+w));
console.log(arr.filter((n)=>n%2==0));
arr.forEach((n)=>console.log(n));
//object
let people={
  name:"me",
  roll:123,
  phone:12345678
};
console.log(people);
//object destructure
let {na,roll,phone,cal}={
  na:"me",
  roll:123,
  phone:12345678,
  cal:()=>1*5
};
console.log(na,roll,phone,cal());


console.log(people.roll);
// array destruture
const [one,two,three]=[1,2,3,4,5];
console.log(one);


// spread like copy paste

let person1={
  ...people,
};
console.log(person1.name);