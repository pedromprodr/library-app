const content = document.querySelector(".container");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    content.appendChild(createBookElement(book));
}

function createBookElement(book) {
    const bookContainer = document.createElement('div');
    bookContainer.className = "bookContainer";
    const bookName = document.createElement('h2');
    bookName.className = "bookName";
    const bookAuthor = document.createElement('h3');
    bookName.className = "bookAuthor";
    const pages = document.createElement('h4');
    pages.className = "pages";
    const read = document.createElement('input')
    read.type = "checkbox";
    read.className = "toggle";
    const img = document.createElement('img')
    img.src = "/"

    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookName);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    

    bookName.textContent = book.title;
    bookAuthor.textContent = book.author;
    pages.textContent = book.pages+" pages.";
    read.checked = book.read;

    read.addEventListener('change', () => {
        if(read.checked){
            console.log('checked');
            book.read = true;
        }else{
            book.read = false;
        }
    })

    return bookContainer;
    
}

const hungerGames = new Book("The Hunger Games","Suzanne Collins", 243, true);
const milkAndHoney = new Book("Milk and Honey", "Rupi Kaur", 127, false);

addBookToLibrary(hungerGames);
addBookToLibrary(milkAndHoney);

