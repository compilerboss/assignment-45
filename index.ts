//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
let personName :string="Haseeb"
console.log("Hello",personName);
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let variable:string='husnain'
let uppercase =variable.toUpperCase()
console.log(uppercase)
let variable1:string="ABDULLAH"
let lowercase=variable1.toLowerCase()
console.log(lowercase)
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let Famouscquote : string= "A person who never made a mistake never tried anything "
    console.log(`Albert Einstein,${Famouscquote}`)
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
var list:string[]=["ali","hassan","umar"];
list.forEach((name)=>{
    console.log(`${name} you are invited on dinner`);
    
})
var num:number[]=[1,2,5,7,3,4];
var correct = num.sort();
console.log(correct);
//Famous Quote.
var famousQuote:string="Eighty percent of success is showing up";
console.log(`Woddy Allen "${famousQuote}"`);
//
console.log(`----------------------------------------------------------------------------------------------`);

console.log(`                                             ${5+3}                                           `);

console.log(`----------------------------------------------------------------------------------------------`);
//Reveal Your Favourite Number.
var num1:number=5;
console.log(`My Favourite Number is ${num1}`);
//Names Of Friends.Print At Once And Text Personly To All
var name1:string[]=["talha","fahad","hassan","umar"];
for (let index = 0; index < name1.length; index++) {
    console.log(name1[index],"=> Hello My Friend");
    
    
}
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these 
var list1:string[]=["Bike", "Car","Aeroplane"];
for (let index=0;index<list1.length;index++){
    console.log("It is an essay way to travel through" ,list1[index])
    
}
//Question # 8:Seeing the World: Think of at least five places in the world you’d like to visit.
var famousPlaces:string[]=["the great wall of china","effil tower","statue of liberty","big ben","dubai"];
console.log(famousPlaces);
// In Alphabeticaly Ordered
var alpa =famousPlaces.sort()
console.log(alpa);
//Orginal array remains same
console.log(famousPlaces);
//In Reverse Alphabet Order
var alpa1=famousPlaces.reverse()
console.log(alpa1);
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'
var alienColour:string="yellow";
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alienColour=="yellow") {
    console.log("1st statement=>",'you earned 5 points');
}
else{
    console.log("1st statement=>","you are fail to earn points");
    
}
//Write one version of this program that passes the if test and another that fails.
var alienColour1:string="green"
if (alienColour1=="yellow") {
    console.log("2nd statement=>","you earn 5 points");
    
}
else{
    console.log("2nd statement=>","you are fail to earn pooints");
    
}
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var colour:string="red"
if (colour=="green") {
    console.log("you earned only 5 points");
    
}
else{
    console.log("you earned 10 points");
    
}
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien
function alienColours(){
    var colour1:string="red";
if (colour1=="green") {
    console.log('you earned 5 points');
    
}
else if (colour1=="yellow"){
    console.log("you earned 10 points");
    
}  
else if(colour1=="red") {
    console.log("you earned 15 points");
    
}
else{
    console.log("you did not earn any point");
    
}};
alienColours();
//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder

function stagesOfLife() {
    var num1:number= 15;
    if (num1<2) {
        console.log("the person is a baby");
        
    }
    else if (num1 >= 2 && num1 < 4) {
        console.log("the person in a toddler");
        
    }
    else if (num1 >= 4 && num1 < 13) {
        console.log("the person is kid");
        
    }
    else if (num1 >= 13 && num1 < 20) {
        console.log("the person is teenager");
        
    }
    else if (num1 >= 20 && num1 < 65) {
        console.log("the person is adult");
        
    }
    else if (num1 > 65) {
        console.log("the person is an elder");
        
    }

    };
    stagesOfLife()
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
    var fruites:string[]=["bannana","mangoes","oranges","peach"]
    function favoritefruits() {
        if (fruites.includes("mangoes")) {
            console.log("yes fruites[] includes mangoes");
            
        }
    };
favoritefruits();
var fruites1:string[]=["mangoes","bannanas","oranges"];
function favorite_fruits() {
    if (fruites1.includes("mangoes")) {
        console.log("you realy likes mangoes");
        
    }
    if (fruites1.includes("gauvas")){
        console.log("you really likes gauvas");
        
    }
    if (fruites1.includes("oranges")) {
        console.log("you really likes oranges");
        
    }
    if (fruites1.includes("apples")) {
        console.log("you really likes apples");
        
    }
    if (fruites.includes("pineapple")) {
        console.log("you really likes pineapple");
        
    }
};
favorite_fruits();
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userName2:string[]=["admin","ali","hamza","umar","talha"];
for (let index = 0; index < userName2.length; index++) {
    console.log(userName2[index],"=>","Thanks For Logging In.");
    
};
for ( let userName of userName2) {
    if (userName==="admin") {
        //Special Gretting For Admin.
        console.log("Hello Admin would you like to see status report");
        
    }else{
        //Generic Gretting For Other Users.
        console.log(`Hello ${userName} thanks for logging`);
        
    }
        
    }
    //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
    let userName3:string[]=["ali","hamza","umar","hassan"];
    if (userName3.length==0) {
        console.log("We need to find some users");
        
    }else{
        console.log("user are exist in array");
        
    };
    //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
let current_users:string[]=["hassan","umar","ali","hasnain","talha"];
let new_users:string[]=["HASSAN","taha","naveed","afaq","fahad"];
let current_user=current_users.map((current_users)=>current_users.toLowerCase());
let new_user = new_users.map((new_user)=>new_user.toLowerCase());
for(let user of new_user){
    if (new_user===current_user) {
        console.log(`the username ${new_user} is already taken`);
        
    }else{
        console.log(`the username ${new_user} is available`);
        
    }
}
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
   //let old_users:string[]=["umer","talha","hassan","hassnain","haseeb"];
   let numbers:number[]=[1,2,3,4,5,6,7,8,9];
   for(let number of numbers){
    let notation:string="th"
    if (number===1) {
        notation="st"
    }else if (number===2) {
        notation="nd"
    }else if (number===3) {
        notation="rd"
    }
    console.log(`${number}${notation}`);
    
   };
   //Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza
   let favPizza:string[]=["lazania","stuffer","kabab crust"];
   for (let index = 0; index < favPizza.length; index++) {
    console.log(favPizza[index]);
    console.log(`I like ${favPizza[index]} pizza`);

   };
   console.log(`My favourite fast food is pizza. I really likes ${favPizza}`);
   
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned
function city_country(city:string,country:string) {
    return`${city},${country}`
};
let cities=[
    ["Lahore","Pakistan"],
    ["Paris","France"],
    ["Tokyo","Japan"]
];
for(let city of cities){
    console.log(city_country(city[0],city[1]))
    
};
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let listOfRivers:string[]=["river of chenab","river of jehlum","river if sindh",];
let listOfMountain:string[]=["mounteverst","k2","koh-e-himaliya","ganga choti"];
let listOfCity:string[]=["london","washing DC","istanbul","faisalabad"];
let listOfLanguage:string[]=["english","french","urdu","punjabi","farsi"];

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
type mountaintype={name:string,height:number,location:string}
let mountains:mountaintype []=[
    {
        name:"K2",
        height:8611 ,
        location:"pakistan"
    },{
        name:"mounteverst",
        height:8818,
        location:"china"
    },{
        name:"kho-e-himaliya",
        height:9670,
        location:"pakistan"
    },{
        name:"ganga choti",
        height:7895,
        location:"kashmir"
    }
];

type rivertype={name:string,location:string}
let river:rivertype []=[
    {
        name:"chenab",
        location:"multan"
    },{
        name:"jehlum",
        location:"jehlum"
    },{
        name:"sindh",
        location:"sindh"
    }
];

type citytype={name:string,countryname:string}
let city:citytype []=[
    {
        name:"london",
        countryname:"england"
    },{
        name:"washington DC",
        countryname:"america"
    },{
        name:"istanbul",
        countryname:"turky"
    },{
        name:"faisalabad",
        countryname:"pakistan"
    }
];





