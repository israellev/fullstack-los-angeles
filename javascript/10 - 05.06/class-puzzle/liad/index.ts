export {}

// //   1. Object Creation
// // Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

// const id = {

// Name : "liad" ,
// age : 24 ,
// Dateofbirth : "24/09/1999" ,
// Weight : 74 

// };

// console.log("name" + id.Name);
// console.log("age" + id.age);
// console.log("Dateofbirth" + id.Dateofbirth);
// console.log("Weight" + id.Weight);

// // 2. Object Methods
// // Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

// const id2 = {

//   Name : "liad" ,
//   age : 24 ,
//   Dateofbirth : "24/09/1999" ,
//   Weight : 74 ,
//   getSummary : function() {
//     return this.Name + this.age + this.Dateofbirth + this.Weight ;
//   }
//   };

//   console.log(id2.getSummary());

// // 3. Modifying Object Properties
// // Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.

// const id3 = {

//   Name : "liad" ,
//   age : 24 ,
//   Dateofbirth : "24/09/1999" ,
//   Weight : 74 ,
//   height : 1.75 ,
//   newHeight: function () {
//     this.height = 1.80;
//     return this.height;
//     }
//   };

//   console.log(id3.newHeight());



  const beg = {
    lastName : "liad" ,
    firstName : "beg" ,

  }

  const peretz = {
    lastName : "daniel" ,
    firstName : "peretz" ,
    
  }

  const benita = {
    lastName : "roi" ,
    firstName : "benita" ,
    
  }

  const friends = [beg,peretz,benita]

  console.log(friends)

