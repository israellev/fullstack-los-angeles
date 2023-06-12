export { }
// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.


const Book = {
    NameOfBook: "haderech lahatzlaha",
    author: "Ido Hagag",
    Year: 2020,
    feedback: "its A great book, recommended!",
    MoreName: null,
    Pages: 300,
    price: 30,

}
console.log(Book);//מדפיס את כל האובייקט
console.log(Book["Year"]); // מדפיס רק את השנה 
console.log(Book["author"]); // מדפיס את שם המחבר


// edit obj
Book.author = "Daniel Pererz",

    // add to obj 
    Book.MoreName = "Tzahi Hagag",

    console.log(Book);// מדפיס את האובייקט אחרי שהוספתי משתנה חדש

// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

const InalAbook = {
    NameOfBook: "haderech lahatzlaha",
    author: "Ido Hagag",
    Year: 2020,
    feedback: "its A great book, recommended!",
    MoreName: null,
    Pages: 300,
    price: 30,
    GetNumberOfPages: function () {
        return this.NameOfBook + this.author + this.Year + this.feedback + this.MoreName + this.Pages
    }


};
console.log(InalAbook.GetNumberOfPages());
//---------------------------------------------------------------------------------------------------

// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.

const Book2 = {
    NameOfBook: "haderech lahatzlaha",
    author: "Ido Hagag",
    Year: 2020,
    feedback: "its A great book, recommended!",
    MoreName: null,
    Pages: 300,
    price: 30,
    ThePriceOf: function () {
        this.price = 50
        return this.price;

    }

};
console.log(Book2.price);//30
console.log(Book2.ThePriceOf());//50
console.log(Book2.price+Book2.ThePriceOf());//100
console.log([Book2.price],[Book2.ThePriceOf()]);//50 , 50
//-------------------------------------------------------------------------------------------------------
const IBook3 = {
    NameOfBook: "haderech lahatzlaha",
    author: "Ido Hagag",
    Year: 2020,
    feedback: "its A great book, recommended!",
    MoreName: null,
    
    
}
IBook3.author="TZAHI HAGAG"// "TZAHI HAGAG"
console.log(IBook3.Year,IBook3.author); //"TZAHI HAGAG" , 2020
//----------------------------------------------------------------------------------------------------


// const friend = {

// }
//   const ROI=  {
//     name:"Roi Benita",
//     age: 21,
//     address :"kiriyat malachi",
//   }
//   const Daniel=  {
//     name:"Daniel Peretz",
//     age: 25,
//     address :"kiriyat malachi",

//   }
//   const Liad=  {
//     name:"Liad Beg",
//     age: 30,
//     address :"kiriyat malachi",
//   }
// console.log(friend.Liad);



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

  console.log(friends.);

 
    

    
    

  }

  



 
    
 
 
 
