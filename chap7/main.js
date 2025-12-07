//object litaral

//student object
student = {
  name: "Amina",
  age: 20,
  course: "Data Science"
};
console.log(student);

//car object
car={
    brand: "toyoto",
    model: "corola",
    year: "2020",
};
console.log(car)
//Mobile Phone Object

phone = {
    company: "Samsung",
    storage: "128GB",
    battery: "85%"
};
console.log(phone);

//constroctor

//Employee Constructor
function Employee(name, salary, role) {
    this.name = name;
    this.salary = salary;
    this.role = role;
}
emp1 = new Employee("Khalid", 500, "Manager");
console.log(emp1);

//product constructor
function product (productname,price,instock){
    this.product=productname,
    this.price=price,
    this.instock=instock
}
product1=new product('shaax',2,true)
console.log(product1)
product2=new product('baris',5,true)
console.log(product2)
product3=new product('qando',3,true)
console.log(product3)
product4=new product('miis',9,true)
console.log(product4)

//Book Constructor

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
book1 = new Book("JavaScript Basics", "John Doe", 250);
console.log(book1);
//class
//Teacher Class
class Teacher {
  constructor(name, subject, experience) {
    this.name = name;
    this.subject = subject;
    this.experience = experience;
  }
}
teacher1 = new Teacher("Fatima", "Math", 5);
console.log(teacher1);

//bank-account-class
class bankaccount{
    constructor(acountnum,owner,balance){
        this.acountnum=acountnum;
        this.owner=owner;
        this.balance=balance;
    }
}
bankaccount1=new bankaccount('c123','qays',200)
console.log(bankaccount1)
bankaccount2= new bankaccount('c1234','salax',200)
console.log(bankaccount2)

//Animal Class

class Animal {
  constructor(type, color, age) {
    this.type = type;
    this.color = color;
    this.age = age;
  }
}

animal1 = new Animal("Cat", "White", 2);
console.log(animal1);

/////Accessing & Updating Elements

//Laptop Object

let laptop = {
  brand: "Dell",
  ram: "8GB",
  price: 700
};

console.log(laptop.brand);
laptop.ram = "16GB";
console.log(laptop);

///User Profile

const user = {
  username: "Ali2025",
  email: "ali@example.com",
  age: 22
};

console.log(user.email);
user.email = "ali.new@example.com";
console.log(user);

//Hotel Room
const room = {
  roomNumber: 105,
  price: 50,
  type: "Single"
};

console.log(room.price);
room.price = 40;
console.log(room);

///Adding New Elements (Dot & Bracket Notation)

//Add "owner" and "last-service-date"
const car2 = {
  brand: "Honda",
  model: "Civic",
  year: 2019
};
car2.owner = "Omar";                       // dot notation
car2["last-service-date"] = "2025-01-01";  // bracket notation
console.log(car2);

//Add “age” and “favorite-subject”
const student2 = {
  name: "Maryam",
  grade: "A",
  school: "AlFaaro Academy"
};
student2.age = 18;                           // dot
student2["favorite-subject"] = "Physics";    // bracket
console.log(student2);

////Iterating Through Objects (3 Questions)

//Restaurant Menu
const menu = {
  burger: 5,
  pizza: 8,
  juice: 3
};
for (let item in menu) {
  console.log(item + ": $" + menu[item]);
}

//City Information
const city = {
  population: 500000,
  mayor: "Hassan",
  area: "200 sq km"
};
for (let key in city) {
  console.log(key + ": " + city[key]);
}

//Classroom Schedule
const schedule = {
  math: "8:00 AM",
  english: "10:00 AM",
  science: "1:00 PM"
};
for (let subject in schedule) {
  console.log(subject + ": " + schedule[subject]);
}

///Converting Objects to JSON & JSON to Objects

//Movie Object → JSON
const movie = {
  title: "Inception",
  duration: "2h 30m",
  rating: 9
};
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

//Convert JSON String → JavaScript Object

const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';
const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);
console.log(obj.country);

//Weather Object → JSON → Object
const weather = {
  temperature: 32,
  humidity: "70%",
  condition: "Sunny"
};
const weatherJSON = JSON.stringify(weather); // convert to JSON
const backToObject = JSON.parse(weatherJSON); // convert back
console.log(backToObject);


