enum Genre {
    Fiction,
    NonFiction,
    Biography,
    ScienceFiction,
    Fantasy
  }

type Book ={
    title: string;
    author: string;
    publicationYear: number;
    isAvailable: boolean;
    genre: Genre;
};

interface BasedUser {
    id: number;
    username: string;
    email: string;
}

interface Guest extends BasedUser {
    guestSessionId: string;
}

interface RegisteredUser extends BasedUser {
    profile:string;
    lastLogin: Date;
}

type User = Guest | RegisteredUser;