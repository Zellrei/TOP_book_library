let myLibrary = [];
let libIndex = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const newBookBtn = document.getElementById('new-book-btn');

newBookBtn.addEventListener('click', () => {addBookToLibrary();displayLibrary()});

function addBookToLibrary() {
  const formBookTitle = document.getElementById('Book title');
  const formAuthor = document.getElementById('Author');
  const formPages = document.getElementById('Pages');
  const formRead = document.getElementById('Read');

  const bookToAdd = new Book(formBookTitle.value, formAuthor.value, formPages.value, formRead.value);
  myLibrary.push(bookToAdd);
  console.table(myLibrary);

  libIndex += 1;
  return myLibrary;
}

function displayLibrary() {
  const gridContainer = document.getElementById('grid-cont-id');

  for (const books of myLibrary) {
    const title = document.createElement('span');
    title.textContent = books.title;
    gridContainer.appendChild(title);

    const author = document.createElement('span');
    author.textContent = books.author;
    gridContainer.appendChild(author);

    const pages = document.createElement('span');
    pages.textContent = books.pages;
    gridContainer.appendChild(pages);

    const read = document.createElement('span');
    read.textContent = books.read;
    gridContainer.appendChild(read);
  }

}

function clearLibrary () {
  const headerLine = document.getElementById('grid-cont-id');
  const linesToRemove = document.getElementsByClassName('line');
  if (linesToRemove.length > 0) {
    for(let i = linesToRemove.length; i > 0; i--) {
      headerLine.removeChild(linesToRemove[0]);
      console.log('deleted 1 line');
    }
  }
  else {
    console.log('no lines to delete');
  }
}