import Book from './modules/Book.js';
import {
  toListContainer,
  toAddContainer,
  toContactContainer,
} from './modules/navbar.js';
import displayDate from './modules/display_time.js';

const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const newBook = new Book(inputTitle, inputAuthor);
newBook.getBooks();
newBook.addBook();
newBook.deleteBook();

const goToListContainer = document.getElementById('list');
const goToAddContainer = document.getElementById('add');
const goToContactContainer = document.getElementById('contact');
const date = document.getElementById('date');

goToListContainer.addEventListener('click', toListContainer);
goToAddContainer.addEventListener('click', toAddContainer);
goToContactContainer.addEventListener('click', toContactContainer);

date.innerHTML = displayDate();
