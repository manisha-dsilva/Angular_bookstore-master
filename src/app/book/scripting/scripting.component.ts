import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-scripting',
  templateUrl: './scripting.component.html',
  styleUrls: ['./scripting.component.css']
})
export class ScriptingComponent implements OnInit {

  private books : Book[] = [];

  selectedBook : Book;

  book : Book;

  searchText: string;

  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
}

onSelect(book : Book): void{
  console.log(book);
  this.selectedBook = book;
}

getBooks() : void {
  console.log("Inside component "+ this.books);
  this.bookService
  .getBooksByCategory("Scripting")
  .subscribe((data:any) => {
    console.log(data);
    this.books = data;
  });
}

deleteBook(book : Book): void{
  console.log("Inside component "+ book);
  this.bookService.deleteBook(book.bookName).subscribe();;
  this.getBooks();
}

searchBook() : void{
  console.log("Inside component "+ this.books);
  this.bookService
  .searchBookByBookName(this.searchText)
  .subscribe((data:any) => {
    console.log(data);
    this.books = data;
  });
}

}
