const content = document.querySelector(".container");

class Book {
  constructor(title, author, pages, read) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
  }
  getTitle() {
    return this._title;
  }
  getAuthor() {
      return this._author;
  }
  getPages(){
      return this._pages;
  }
  hasBeenRead() {
    return this._read;
  }
}
class Library {
  constructor() {
    this._library = [];
  }
  listBooks() {
    return this._library;
  }
  addBook(book) {
    this._library.push(book);
  }

  getBook(title) {
    this._library.forEach((book) => {
      if (book.getTitle() === title) {
        return book;
      }
    });
    return;
  }
  removeBook(title) {
    this._library = this._library.filter(function (book) {
      return book.getTitle() !== title;
    });
    return this._library;
  }
}

let myLibrary = new Library();

function addBookToLibrary(book) {
  myLibrary.addBook(book);
  content.appendChild(createBookElement(book));
  console.log(myLibrary.listBooks());
}

function removeBook(bookElement) {
  myLibrary.removeBook(bookElement.querySelector(".bookName").textContent);
  content.removeChild(bookElement);
  console.log(myLibrary.listBooks());
}

function createBookElement(book) {
  const bookContainer = document.createElement("div");
  bookContainer.className = "bookContainer";
  const bookName = document.createElement("h2");
  bookName.className = "bookName";
  const bookAuthor = document.createElement("h3");
  bookAuthor.className = "bookAuthor";
  const pages = document.createElement("h4");
  pages.className = "pages";
  const read = document.createElement("input");
  read.type = "checkbox";
  read.className = "toggle";
  const readText = document.createElement("h4");
  readText.className = "readText";
  readText.textContent = "Finished!";

  const deleteBook = document.createElement("a");
  deleteBook.href = "#";

  let icon = document.createElement("img");
  deleteBook.className = "deleteIcon";
  icon.setAttribute("src", "./icons/delete_white_24dp.svg");
  deleteBook.appendChild(icon);

  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookName);
  bookContainer.appendChild(pages);
  bookContainer.appendChild(read);
  bookContainer.appendChild(deleteBook);

  if (book.read) {
    bookContainer.appendChild(readText);
  }

  bookName.textContent = book.getTitle();
  bookAuthor.textContent = book.getAuthor();
  pages.textContent = book.getPages() + " pages.";
  read.checked = book.hasBeenRead();

  read.addEventListener("change", () => {
    if (read.checked) {
      console.log("checked");
      book.read = true;
      bookContainer.appendChild(readText);
    } else {
      book.read = false;
      bookContainer.removeChild(readText);
    }
  });

  deleteBook.addEventListener("click", () => {
    removeBook(bookContainer);
  });

  return bookContainer;
}

let hungerGames = new Book("The Hunger Games", "Suzanne Collins", 243, true);
let milkAndHoney = new Book("Milk and Honey", "Rupi Kaur", 127, false);

addBookToLibrary(hungerGames);
addBookToLibrary(milkAndHoney);

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
  content.style.opacity = "0";
}

let form = document.getElementById("bookForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

let formToggle = false;
document.querySelector("#read").addEventListener("change", () => {
  formToggle = !formToggle;
});

function submitForm() {
  let inputs = document.querySelectorAll(".form-input");
  let valid = true;
  inputs.forEach((element) => {
    console.log(element.value);
    if (element.value == "" || element.value == null) valid = false;
  });

  if (valid) {
    if (document.getElementById("read").value == "on") readInput = true;
    console.log("fun" + formToggle);
    addBookToLibrary(
      new Book(
        document.getElementById("book-title").value,
        document.getElementById("book-author").value,
        document.getElementById("book-pages").value,
        formToggle
      )
    );
    closeForm();
    form.reset();
    formToggle = false;
  } else {
  }
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  content.style.opacity = "1";
}

document.getElementById("add").addEventListener("click", () => {
  openTheForm();
});
