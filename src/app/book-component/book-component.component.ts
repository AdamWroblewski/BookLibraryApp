import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Book} from '../shared/book.model';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  constructor(public service: BookService) {
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  deleteBook(id: number): void {
    this.service.deleteBook(id).subscribe(() => {
      this.service.refreshList();
    });
  }

  rewriteData(book: Book): void {
    this.service.book = book;
  }
}
