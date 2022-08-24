//EASY GOING

//write a loop that logs numbers 1 thr 20

// for(j = 1; j <= 20; j++){
//     console.log(j)
// }

//GET EVEN

// for(i = 0; i <= 200; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//FIZZ BUZZ

const numsList = Array.from(Array(51).keys())
// const fizzOrBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         return 'Fizz'
//     }
//     else if (item % 3 != 0 && item % 5 == 0) {
//         return 'Buzz'
//     } else {
//         return item
//     }
// })

// console.log(fizzOrBuzz)

// const fizzAndBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         if (item % 3 == 0 && item % 5 == 0) {
//             return 'FizzBuzz'
//         } else {
//             return 'Fizz'
//         }
//     }
//     else if (item % 5 == 0) {
//         return 'Buzz'
//     }
//     else {
//         return item
//     }
// })

// console.log(fizzAndBuzz)

// FANCY WAY TO DO FIZZ BUZZ
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

//WILD WILD LIFE

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

//1.change plantee birthday to one year old
plantee[2] = 5001
console.log(plantee)

//2.change wolfy hometown to gotham city

wolfy[3] = "Gotham City"
console.log(wolfy)

//3.give dart a second hometown by adding hawkins

dart[3] = ["Upside Down", "Hawkins"]
console.log(dart)

//4.remove "Wolfy" from wolfy array and replace with "Gameboy"

wolfy.shift()
console.log(wolfy)

wolfy.unshift("Gameboy")
console.log(wolfy)

/////////////////////////////////////////////////////////////////

//YELL AT THE NINJA TURTLES
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//use a for of loop to call touppercase() on each of elements and print the result

for (const element of ninjaTurtles) {
    console.log(element.toUpperCase())
}

///////////////////////////////////////////////////////////////////////////////////////


//Methods,Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

// //index of Titanic

// console.log(favMovies.indexOf('Titanic'))

// //1.sort method:arrange array in alphabetical order

// console.log(favMovies.sort())

// //2.use the method pop

// console.log(favMovies.pop())      //gives last one elemnent as output

// //3.push guardians of galaxy

// favMovies.push('Guardians Of Galaxy')
// console.log(favMovies)

// //4.reverse the array

// console.log(favMovies.reverse())

// //5.use shift method
// console.log(favMovies.shift())

// //unshift  -->adds to the beginnning of the array and returns the new length of the array
// favMovies.unshift('Jaws')
// console.log(favMovies)

// //7.splice Django and add Avatar(try finding the index of django instead of counting it yourself)The splice() method overwrites the original array. Syntax. array.splice(index, howmany, item1, ..
// console.log(favMovies.splice(favMovies.indexOf('Django Unchained'),1,"Avatar",))
// console.log(favMovies.length)

// //8.slice the last half of the array(challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
// //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) ...

// //9.store the value of your slice in a variable
// let afterSlice = favMovies.slice(0,Math.floor((favMovies.length)/2))

// //9.console log the variable
// console.log(afterSlice)
// //slice does not alter array permanently

// //10.final result
// console.log(favMovies)

// //11.find index of element fast and furious which is not in the array
// console.log(afterSlice.indexOf('Fast And Furious'))  //output -1
// //12.we declared the variable favmovies with const and yet we were allowed to change the array.weird? should we have used let?

// //12A.The keyword const is a little misleading. It does NOT define a constant array. It defines a constant reference to an array. Because of this, we can still change the elements of a constant array. 
// //There is no preferred one, its based on your choice of usage for that array or object. You have to understand mutation and reassigning clearly. If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let.

// ////////////////////////////////////////////////////////////////////////////


// //Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank",], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]];

//  //remove eggbert
//  whereIsWaldo.splice(1,1)
//  console.log(whereIsWaldo)

//  //CHANGE "NEFF" TO "nO ONE"
//  whereIsWaldo[1][2] = 'No One'
//  console.log(whereIsWaldo)

//  //access waldo from array
//  console.log(whereIsWaldo[2][1][1])

// /////////////////////////////////////////////////////////////////////////////////
 
// //Excited Kitten


// //1.write code that logs"Love me ...." 20 times

// for(i = 0; i < 20; i++){
//     console.log(`Love me,pet me!HSSSSS!`)
// }

// //2.for every even number in your loop, log["...human..........."] at random

// let array = ["...human...why you taking pictures of me?..." ,"...the catnip made me do it...", "...why does the red dot always get away..."] 
// for(i = 0;i < 20; i++){
//     if(i % 2 === 0){
//         console.log(`${array[Math.floor(Math.random()* array.length)]}`)
//     }else console.log(`Love me,pet me!HSSSSS!`)
// } 

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //FIND MEDIAN
// //if you check the length of the array/2, you might not get a whole number. so use math.floor()
// const nums=[14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]

// const sorted = nums.sort((a, b) => a - b);  //sorts the nums array in the order
// console.log(sorted)

// let median 
// let middle = Math.floor(sorted.length/2)
// for(let i = 0; i < sorted.length; i++){      //if the length of the array is even then add the two elements(whatever in the middle) and divide that sum by 2
//     if(sorted.length % 2 === 0){
//         median = (sorted[middle] + sorted[middle + 1])/2
//     }else{                                   // if the length is odd then median is the center element
//         median = sorted[middle]
//     }
// }console.log(median)

// /////////////////////////////////////////////////////////////////////////////////////////

// //H.What's in your closet? Return of the closets
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     'right sock',
//     "GA hoodie",
//     "green pants",
//     "yello knit hat",
//     "marshmallow peeops"
// ];

// //thom's closet is more complicated
// const thomsCloset = [
//     [
//         //shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up"
//     ], [
//         //pants
//         'grey jeans',
//         'jeans',
//         'PJs'
//     ],[
//         //accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// //Alien Attire

// //1.remove left shoe from kristyn closet and add to thoms accessories
// let kristynShoe = kristynsCloset.shift()
// console.log(kristynShoe)
// thomsCloset[2].push(kristynShoe)
// console.log(thomsCloset)
// ///////////////////////////////////////////////////////

// //DRESS US UP
// console.log("Hi! I am Kristyn. I am wearing " + thomsCloset[0][1] + " shirt and " + kristynsCloset[3] + " today.")
// console.log("I am going to wear " + thomsCloset[1][0] + " and  " + thomsCloset[0][3] + " shirt tomorrow!")
// console.log("Time to party! I am wearing " + thomsCloset[1][1] + ", " + thomsCloset[0][2] + " and " + thomsCloset[2][2] + "!")

// //////////////////////////////////////////////////////////////

// //DIRTY LAUNDRY

// //1.loop through kristyn closet and log the sentence"whirr......

// for(i = 0; i < kristynsCloset.length; i++){
//     console.log("WHIRR: Now washing " + kristynsCloset[i] + ".")
// }

// //2.Inventory of thoms closet
// //for(i = 0; i < thomsCloset.every; i++){
//      //console.log("My inventory is " + thomsCloset[i])
// //}

// console.log("shirts: " + thomsCloset[0] + 
// " pants: " +  thomsCloset[1] + 
// " accessories: " + thomsCloset[2])
 




