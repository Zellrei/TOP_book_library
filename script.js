let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read == true) {
    this.read = 'Yes';
  } else this.read = 'No';
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
  const bookToAdd = new Book(formBookTitle.value, formAuthor.value, formPages.value, formRead.checked);
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

  let lineNodelist = document.getElementsByClassName('line');
  for (let i = 0; i < lineNodelist.length; i++) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
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