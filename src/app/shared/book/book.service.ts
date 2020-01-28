import { Book } from "./book.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/message.service';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    formData: Book;
    readonly rootURL = 'https://localhost:44393/api/v1';
    list: Book[];
    constructor(private http: HttpClient,private messageService : MessageService) { }

    postBook() {
        return this.http.post(this.rootURL + '/Books', this.formData);
    }

    putBook() {
        return this.http.put(this.rootURL + '/Books/' + this.formData.Id, this.formData);
    }


    getBook(id: number): Observable<Book> {
        const url = `${this.rootURL}/Books/${id}`;
        return this.http.get<Book>(url).pipe(
            tap(_ => this.log(`fetched Book id=${id}`)),
            catchError(this.handleError<Book>(`getBook id=${id}`))
        );
    }

    deleteBook(Id) {
        return this.http.delete(this.rootURL + '/Books/' + Id);
    }

    refreshList() {
        this.http.get(this.rootURL + '/Books')
            .toPromise()
            .then(res => this.list = res as Book[]);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
}
