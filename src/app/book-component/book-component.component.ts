import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Book} from '../shared/book.model';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  constructor(public service: BookService, private router: Router, private jwtHelper: JwtHelperService) {
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  logout(): void {
    localStorage.removeItem('jwt');
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
