let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    // do stuff here
}



const harryPotter = new Book('Harry Potter', 'JKR', '300', 'not read yet');
const theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');

console.log(harryPotter.info());
console.log(theHobbit.info());


function PrintStuff (myDocuments) {
    this.documents = myDocuments;
    }
    
    // We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
    PrintStuff.prototype.print = function () {
    console.log(this.documents);
    }
    
    // Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
    var newObj = new PrintStuff ("I am a new Object and I can print.");
    
    // newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
    newObj.print (); //I am a new Object and I can print.