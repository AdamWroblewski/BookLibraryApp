import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private appUrl = 'https://localhost:44369/api/Book';
  book: Book = new Book();
  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  public addBook(): Observable<any> {
    return this.http.post(this.appUrl, this.book);
  }

  public deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.appUrl}/${id}`);
  }

  public putBook(): Observable<any> {
    return this.http.put(`${this.appUrl}/${this.book.id}`, this.book);
  }

  public refreshList(): void {
    this.http.get(this.appUrl)
      .toPromise()
      .then(res => {
        this.books = res as Book[];
      });
  }
}
