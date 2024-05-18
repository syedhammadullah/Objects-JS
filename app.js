// OBJECTS.....
let myName = "Hammad";
let keyy = "Specialstudent";
let student = {
  [keyy]: "Hassan",
  key: "value",
  name: myName, // mera naam show hoga
  age: 18,
  rollNo: "WMA-211015",
  isAbsent: false,
  hobbies: ["cricket", "football", "Web Development"], // Array in Object
  teacher: {
    age: 25,
    name: { firstname: "Shehzad", lastname: "Iqbal" }, // object in object
  },
  test: {}, // this is empty object
};

console.log(student);
// console.log(undefined.age); //error ayega agar undefined likho ge sirf
console.log(student?.teacher?.name?.firstname); //error nhi ayega kyunke ? agadia hai

// New Query

let mobile = {
  ram: 8,
  model: "test",
  company: "samsung",
  company: "iPhone", // samsung will be overridden
  isGaming: false,
  nested: { name: "ubaid" },
  0: "shehzad",
  1: "waseem",
  1: "waseem", // not recommended
};

let a = "company";

console.log(mobile[0]);
console.log(mobile[1]); // looks like array because array is a construct
console.log(mobile.company);
console.log(mobile[a]);
