var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Biography"] = 2] = "Biography";
    Genre[Genre["ScienceFiction"] = 3] = "ScienceFiction";
    Genre[Genre["Fantasy"] = 4] = "Fantasy";
})(Genre || (Genre = {}));
function addBook(books, newBook) {
    books.push(newBook);
    return books;
}
var books = [];
addBook(books, {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
    isAvailable: true,
    genre: Genre.Fiction
});
console.log(books);
function searchBooks(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
var fictionBooks = searchBooks(books, Genre.Fiction);
