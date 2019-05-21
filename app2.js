class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor(Book) {
    this.book = Book;
  }

  addBookToList() {
    //get id

    const tb = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `<td>${this.book.title}</td><td>${
      this.book.author
    }</td><td>${this.book.isbn}</td><td><a href="#" class="delete">x</a></td>`;

    tb.appendChild(row);

    //remove row
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  //delete function()

  deleteBook(target) {
    if (target.className == "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  //static methods
  static alertusers(message, className) {
    //create a div and add it to before title
    const dv = document.createElement("div");
    dv.appendChild(document.createTextNode(message));
    dv.className = className;
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    //insert alert
    container.insertBefore(dv, form);

    //console.log(dv);

    setTimeout(() => {
      const cc = document.getElementsByClassName(`${className}`)[0].remove();
      //console.log(cc);
    }, 3000);
  }
}

//action lister

document.getElementById("book-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.alertusers("Please do enter all the values", "error");
  } else {
    const bookobj = new Book(title, author, isbn);

    const uiobj = new UI(bookobj);

    uiobj.addBookToList();

    UI.alertusers("Inserted Successfully!", "success");
    uiobj.clearFields();
    // uiobj.deleteFunction();
  }

  //console.log(bookobj);
});

//event listener for delete
document.getElementById("book-list").addEventListener("click", e => {
  e.preventDefault();
  // console.log(123);
  const ui = new UI();
  //console.log(e.target);
  ui.deleteBook(e.target);
  UI.alertusers("removed Succesffully!", "success");
});
