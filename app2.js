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
    }</td><td>${this.book.isbn}</td>`;

    tb.appendChild(row);

    //console.log(row);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//action lister

document.getElementById("book-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const bookobj = new Book(title, author, isbn);

  const uiobj = new UI(bookobj);

  uiobj.addBookToList();
  uiobj.clearFields();
  //console.log(bookobj);
});
