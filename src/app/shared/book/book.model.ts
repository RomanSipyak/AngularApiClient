import { Category } from '../category/category.model';
import { Author } from '../author/author.model';
import { Language } from '../Language/language.model';

export class Book {
    Id: number;
    Title: string;
    Price: number;
    Description: string;
    Language: Language;
    BookCategories: Category[];
    BookAuthors: Author[];
}