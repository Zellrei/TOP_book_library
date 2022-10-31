let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const newBookBtn = document.getElementById('new-book-btn');

newBookBtn.addEventListener('click', () => {addBookToLibrary();
                                            clearDisplay();
                                            displayLibrary()});
function addBookToLibrary() {
  const formBookTitle = document.getElementById('Book title');
  const formAuthor = document.getElementById('Author');
  const formPages = document.getElementById('Pages');
  const formRead = document.getElementById('Read');

  const bookToAdd = new Book(formBookTitle.value, formAuthor.value, formPages.value, formRead.value);
  myLibrary.push(bookToAdd);
  console.table(myLibrary);
}

function displayLibrary() {
  const gridContainer = document.getElementById('grid-cont-id');

  for (const books of myLibrary) {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'line';
    gridContainer.appendChild(parentDiv);

    const title = document.createElement('span');
    title.textContent = books.title;
    parentDiv.appendChild(title);

    const author = document.createElement('span');
    author.textContent = books.author;
    parentDiv.appendChild(author);

    const pages = document.createElement('span');
    pages.textContent = books.pages;
    parentDiv.appendChild(pages);

    const read = document.createElement('span');
    read.textContent = books.read;
    parentDiv.appendChild(read);
  }
}

function clearLibrary () {
  myLibrary = [];
  clearDisplay();
}

function clearDisplay () {
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