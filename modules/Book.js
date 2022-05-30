const addBtn = document.querySelector('#add-btn');
const form = document.querySelector('#form');
const removeBtn = document.querySelectorAll('.remove-book');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const booksContainer = document.getElementById('books-inner-container');

const listContainer = document.getElementById('list-container');
const addContainer = document.getElementById('add-container');
const contactContainer = document.getElementById('contact-container');

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  getBooks = () => {
    if (localStorage.getItem('books')) {
      this.books.map((book) => {
        const bookElement = document.createElement('li');
        bookElement.setAttribute('id', book.id);
        const bookElMarkup = `
            <div class="content-container">
            <p>"${book.title}" by</p>
            <p>${book.author}</p>
            <button class="remove-book">Remove</button>
            </div>
            
          `;
        bookElement.innerHTML = bookElMarkup;
        booksContainer.appendChild(bookElement);
      });
    }
  };

  addBook = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { title, author } = this;
      if (title.value !== '' && author.value !== '') {
        const book = {
          id: new Date().getTime(),
          title: title.value,
          author: author.value,
        };
        this.books.push(book);
        localStorage.setItem('books', JSON.stringify(this.books));
        const bookElement = document.createElement('li');
        bookElement.setAttribute('id', book.id);
        const bookElMarkup = `
          <div class="content-container">
          <p>"${book.title}" by </p>
          <p>${book.author}</p>
          <button class="remove-book">Remove</button>
          </div>
          
        `;
        bookElement.innerHTML = bookElMarkup;
        booksContainer.appendChild(bookElement);
        inputTitle.value = '';
        inputAuthor.value = '';
        listContainer.classList.remove('none');
        addContainer.classList.add('none');
        contactContainer.classList.add('none');
      }
    });
  };

  deleteBook = () => {
    booksContainer.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('remove-book')
        || e.target.parentElement.classList.contains('remove-book')
      ) {
        const bookId = e.target.closest('li').id;
        this.books = this.books.filter(
          (book) => book.id !== parseInt(bookId, 10),
        );
        localStorage.setItem('books', JSON.stringify(this.books));
        document.getElementById(bookId).remove();
      }
    });
  };
}
