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
function removeBook(bookElement){
    content.removeChild(bookElement);
}
function createBookElement(book) {
    const bookContainer = document.createElement('div');
    bookContainer.className = "bookContainer";
    const bookName = document.createElement('h2');
    bookName.className = "bookName";
    const bookAuthor = document.createElement('h3');
    bookAuthor.className = "bookAuthor";
    const pages = document.createElement('h4');
    pages.className = "pages";
    const read = document.createElement('input')
    read.type = "checkbox";
    read.className = "toggle";
    const readText = document.createElement('h4');
    readText.className = "readText";
    readText.textContent = "Finished!"

    const deleteBook = document.createElement('a');
    deleteBook.href="#";

    let icon = document.createElement("img");
    deleteBook.className="deleteIcon";
    icon.setAttribute("src","./icons/delete_white_24dp.svg")
    deleteBook.appendChild(icon);



    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookName);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    bookContainer.appendChild(deleteBook);

    if (book.read) {
        bookContainer.appendChild(readText);
    }

    bookName.textContent = book.title;
    bookAuthor.textContent = book.author;
    pages.textContent = book.pages + " pages.";
    read.checked = book.read;

    read.addEventListener('change', () => {
        if (read.checked) {
            console.log('checked');
            book.read = true;
            bookContainer.appendChild(readText);
        } else {
            book.read = false;
            bookContainer.removeChild(readText);
        }
    })

    deleteBook.addEventListener("click", () =>{
        removeBook(bookContainer);
    })

    return bookContainer;

}

const hungerGames = new Book("The Hunger Games", "Suzanne Collins", 243, true);
const milkAndHoney = new Book("Milk and Honey", "Rupi Kaur", 127, false);

addBookToLibrary(hungerGames);
addBookToLibrary(milkAndHoney);


function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
    content.style.opacity = "0";
}

let form = document.getElementById("bookForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


let formToggle= false;
document.querySelector("#read").addEventListener('change', () => {
        formToggle=!formToggle;
})

function submitForm() {
    let inputs = document.querySelectorAll(".form-input");
    let valid = true;
    inputs.forEach(element => { console.log(element.value); if (element.value == '' || element.value == null) valid = false;
    });

    if (valid) {
        if(document.getElementById("read").value=='on') readInput = true
        console.log("fun"+formToggle);
        addBookToLibrary(new Book(document.getElementById("book-title").value, document.getElementById("book-author").value, document.getElementById("book-pages").value, formToggle))
        closeForm();
        form.reset();
        formToggle=false;
    } else{

    }
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    content.style.opacity = "1";
}

document.getElementById("add").addEventListener('click', () => {
    openTheForm();
})


