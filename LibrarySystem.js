class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isAvailable = true;
  }

  displayDetails() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Genre: " + this.genre);
    console.log("Availability: " + (this.isAvailable ? "Available" : "Not Available"));
    console.log();
  }
}

class LibrarySystem {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  displayBooks() {
    console.log("All Books:");
    for (let book of this.books) {
      book.displayDetails();
    }
  }

  findAvailableBooksByGenre(genre) {
    const availableBooks = this.books.filter(book => book.genre === genre && book.isAvailable);
    return availableBooks;
  }

  checkoutBook(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log("Book '" + book.title + "' checked out successfully.");
    } else {
      console.log("Book '" + book.title + "' is not available for checkout.");
    }
  }

  returnBook(book) {
    if (!book.isAvailable) {
      book.isAvailable = true;
      console.log("Book '" + book.title + "' returned successfully.");
    } else {
      console.log("Book '" + book.title + "' is already available.");
    }
  }
}

// Example usage
const library = new LibrarySystem();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
library.addBook(book1);

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Classic");
library.addBook(book2);

const book3 = new Book("The Catcher in the Rye", "J.D. Salinger", "Classic");
library.addBook(book3);

library.displayBooks();

console.log("Available Classic Books:");
const availableBooks = library.findAvailableBooksByGenre("Classic");
for (let book of availableBooks) {
  book.displayDetails();
}

console.log("Checking out '" + book2.title + "'");
library.checkoutBook(book2);

console.log("Returning '" + book2.title + "'");
library.returnBook(book2);

library.displayBooks();
