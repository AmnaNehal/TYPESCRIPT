interface Book{
    title: string;
    author: string;
    year: number;
    genre: string;
}

let books:Book[]=[
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Tragedy"
  },
];
books.forEach((book,index)=>{
    console.log(index,book);
});