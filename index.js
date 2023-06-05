import BookList from './modules/books.js';

import timeDate from './modules/timeDate.js';

import {
  newBook,
  showhide,
} from './modules/elements.js';

BookList.displayall();

document.querySelector('.add').addEventListener('click', newBook);

const link = document.querySelectorAll('.navli');
for (let i = 0; i <= link.length - 1; i += 1) {
  link[i].addEventListener('click', showhide);
}
