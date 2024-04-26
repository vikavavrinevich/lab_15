//#1.1
// Створення об'єкта student
const student = { name: 'Vika', age: 18, gender: 'women' };

// Деструктуризація об'єкта student
const { name: studentName, age: studentAge, gender: studentGender } = student;


console.log(studentName); 
console.log(studentAge); 
console.log(studentGender); 
//#1.2
// Створення об'єкта car
const car = { engine: { cylinders: 4, horsepower: 200 } };

// Вкладена деструктуризація об'єкта car
const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;


console.log(engineCylinders); 
console.log(engineHorsepower); 
//#1.3
// Створення об'єкта book
const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' };

// Деструктуризація об'єкта book
const { title: bookTitle, author: bookAuthor } = book;

// Виведення результатів
console.log(bookTitle); 
console.log(bookAuthor); 
//#2
const  numbers =[1,2,3];
const[firstNumber, secondNumber,thirdNumber]=numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
//#2.1
const fruits =['apple','orange','banana'];
const[ firstFruit, ...otherFruits]=fruits;
const restFruits =otherFruits;
console.log(firstFruit);
console.log(restFruits);
//#2.2
const  arr1 =[1,2,3];
const arr2=[4,5,6];
const[numberFirst,numbersecond,numberThird]=arr1;
const[number4,number5,number6]=arr2;
const combinedArray=[numberFirst,numbersecond,numberThird,number4,number5,number6];
console.log(combinedArray);
//#3
function editCase(upCase){
let word=upCase.split(" ");
   for(let i=0;i<word.length;i++){
    if(i===0){
        word[i]=word[i][0].toUpperCase()+word[i].substring(1)
    }
    else{
        word[i]=word[i]
    }
    
   } 
   let result= word.join(" ")
   return result; 
    
}
console.log(editCase("name"));
//#4
function toCamelCase(cssNew) {    
    let words = cssNew.split("-");
        for (let i = 1; i < words.length; i++) {        
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        return words.join("");
    }
    
    console.log(toCamelCase("best-coder"));
    //#5
    function newYearFun() {
        const currentTime = Date.now();
        const currentYear = (new Date()).getFullYear();
        const newYearTime = new Date(currentYear + 1, 0, 1).getTime();
        const timeLeft = newYearTime - currentTime;
    
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    
    
    setInterval(newYearFun, 1000);
    
    
    newYearFun();

