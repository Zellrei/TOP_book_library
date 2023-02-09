let myLibrary = [];

/* function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read == true) {
    this.read = 'Yes';
  } else this.read = 'No';
} */

class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true) {
      this.read = 'Yes';
    } else this.read = 'No';
  }
}

const newBookBtn = document.getElementById('new-book-btn');

newBookBtn.addEventListener('click', () => {addBookToLibrary();
                                            clearDisplay();
                                            displayLibrary();});
function addBookToLibrary() {
  const formBookTitle = document.getElementById('Book title');
  const formAuthor = document.getElementById('Author');
  const formPages = document.getElementById('Pages');
  const formRead = document.getElementById('Read');
  console.log(formRead.checked);
  myLibrary.push(new Book(formBookTitle.value, formAuthor.value, formPages.value, formRead.checked));
  console.table(myLibrary);
}

function displayLibrary() {
  const gridContainer = document.getElementById('grid-cont-id');

  for (let i = 0; i < myLibrary.length; i++) {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'line';
    gridContainer.appendChild(parentDiv);

    const title = document.createElement('span');
    title.textContent = myLibrary[i].title;
    parentDiv.appendChild(title);
    const author = document.createElement('span');
    author.textContent = myLibrary[i].author;
    parentDiv.appendChild(author);
    const pages = document.createElement('span');
    pages.textContent = myLibrary[i].pages;
    parentDiv.appendChild(pages);
    const read = document.createElement('span');
    read.textContent = myLibrary[i].read;
    if (read.textContent == 'Yes') {
      read.classList.add('bookIsRead');
    } else {
      read.classList.add('bookIsNotRead');
    }
    read.addEventListener('click', () => {if (read.textContent == 'Yes') {
                                            read.classList.replace('bookIsRead', 'bookIsNotRead');
                                            read.textContent = "No";
                                            myLibrary[i].read = "No";
                                          } else {
                                            read.classList.replace('bookIsNotRead', 'bookIsRead');
                                            read.textContent = "Yes";
                                            myLibrary[i].read = "Yes";
                                          }})
    parentDiv.appendChild(read);
  }

  let lineNodelist = document.getElementsByClassName('line');
  for (let i = 0; i < lineNodelist.length; i++) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "🗑️Delete";
    lineNodelist[i].appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {myLibrary.splice(i, 1);
                                                bookIndex = 0;
                                                clearDisplay();                                          
                                                displayLibrary();});
  }
}

function clearDisplay () {
  const headerLine = document.getElementById('grid-cont-id');
  const linesToRemove = document.getElementsByClassName('line');
  if (linesToRemove.length > 0) {
    for(let i = linesToRemove.length; i > 0; i--) {
      headerLine.removeChild(linesToRemove[0]);
    }
  }
}

function clearLibrary () {
  myLibrary = [];
  clearDisplay();
}
