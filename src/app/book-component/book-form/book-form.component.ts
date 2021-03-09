import {Component, OnInit} from '@angular/core';
import {BookService} from '../../shared/book.service';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Book} from '../../shared/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(public service: BookService, public pipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (this.service.book.id === 0) {
      this.addBook(form);
    } else {
      this.putBook(form);
    }
  }

  addBook(form: NgForm): void {
    this.service.addBook().subscribe(() => {
      this.service.refreshList();
      this.resetForm(form);
    });
  }

  putBook(form: NgForm): void {
    this.service.putBook().subscribe(() => {
      this.service.refreshList();
      this.resetForm(form);
    });
  }

  resetForm(form: NgForm): void {
    this.service.book = new Book();
    form.form.reset();
  }
}

