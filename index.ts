enum Genre {
    Fiction,
    NonFiction,
    Biography,
    ScienceFiction,
    Fantasy
  }
  
  type Book = {
    title: string;
    author: string;
    publicationYear: number;
    isAvailable: boolean;
    genre: Genre;
  };
  
  interface BaseUser {
    id: number;
    username: string;
    email: string;
  }
  
  interface Guest extends BaseUser {
    guestSessionId: string;
  }
  
  interface RegisteredUser extends BaseUser {
    profile: string;
    lastLogin: Date;
  }
  
  type User = Guest | RegisteredUser;
  
  function addBook(books: Book[], newBook: Book): Book[] {
    books.push(newBook);
    return books;
  }

  const books:Book[] = []

 addBook(books,{
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
    isAvailable: true,
    genre: Genre.Fiction
  });

  console.log(books);

  function searchBooks(books:Book[],genre:Genre  ):Book[]{
    return books.filter(book => book.genre === genre);
  }

  const fictionBooks = searchBooks(books,Genre.Fiction)
  console.log(fictionBooks);

function updateAvailability(books:Book[],title:string,isAvailable:boolean):Book[]{
    return books.map(book => book.title === title ? { ...book, isAvailable } : book);
}

const updatedBooks = updateAvailability(
  books,
  "The Catcher in the Rye",
  false
);
console.log(updatedBooks);

function displayUserInfo(user:User):void{ 
  if("guestSessionId" in user){
    console.log(`Guest Session ID: ${user.guestSessionId}`);
  } else {
    console.log(`Registered User: ${user.profile}`);
  }
  } 
   
  const guestUser: Guest = {
    id: 1,
    username: "guest123",
    email: "guest@mail.com",
    guestSessionId: "ABC-123"
  };
  
  const registeredUser: RegisteredUser = {
    id: 2,
    username: "noam",
    email: "noam@mail.com",
    profile: "Full Stack Developer",
    lastLogin: new Date()
  };
  
  displayUserInfo(guestUser);
  displayUserInfo(registeredUser);
  
  