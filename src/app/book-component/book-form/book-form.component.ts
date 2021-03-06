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

  isClicked = false;
  formValid = true;
  isSaved = false;

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
        this.isSaved = true;
      },
      (error) => {
        this.formValid = false;
        console.log(error.message);
      });
  }

  putBook(form: NgForm): void {
    this.service.putBook().subscribe(() => {
        this.service.refreshList();
        this.resetForm(form);
        this.isSaved = true;
      },
      (error) => {
        this.formValid = false;
        console.log(error.message);
      });
  }

  resetForm(form: NgForm): void {
    form.form.reset();
    this.service.book = new Book();
  }
}

