export default class BookList {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    add = () => {
      const booklist = JSON.parse(localStorage.getItem('array')) || [];
      const Title = this.title;
      const Author = this.author;
      if ((Title.length !== 0) && (Author.length !== 0)) {
        booklist.push(this);
        localStorage.setItem('array', JSON.stringify(booklist));
        this.display();
      }
    }

    display = () => {
      const booklist = JSON.parse(localStorage.getItem('array'));
      const list = document.querySelector('#list');
      const Title = this.title;
      const Author = this.author;
      const div = document.createElement('div');
      div.classList.add('div');
      div.innerHTML = `<div class="paradiv" <p>"${Title}" by "${Author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
      list.appendChild(div);
      for (let i = 0; i < booklist.length; i += 1) {
        const button = document.querySelectorAll('#button');
        button[i].addEventListener('click', BookList.remove);
      }
      const change = document.querySelectorAll('.div');
      for (let i = 0; i < booklist.length; i += 1) {
        if (i % 2 === 0) {
          change[i].classList.add('background');
        }
      }
    }

    static displayall = () => {
      const booklist = JSON.parse(localStorage.getItem('array')) || [];
      const list = document.querySelector('#list');
      for (let i = 0; i < booklist.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `<div class="paradiv"><p>"${booklist[i].title}" by "${booklist[i].author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
        list.appendChild(div);
        const button = document.querySelectorAll('#button');
        button[i].addEventListener('click', BookList.remove);
      }
      const change = document.querySelectorAll('.div');
      for (let i = 0; i < booklist.length; i += 1) {
        if (i % 2 === 0) {
          change[i].classList.add('background');
        }
      }
    }

    static remove() {
      const booklist = JSON.parse(localStorage.getItem('array'));
      const parent = document.querySelector('#list');
      const button = document.querySelectorAll('#button');
      const butto = Array.from(button).indexOf(this);
      const reele = this.parentNode.parentNode;
      parent.removeChild(reele);
      booklist.splice(butto, 1);
      localStorage.setItem('array', JSON.stringify(booklist));
    }
}