//Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  // console.log(book.author);

  const list = document.getElementById("book-list");

  const row = document.createElement("tr"); //create tr element

  //insert columns into tr

  row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${
    book.isbn
  }</td>
  
  <td><a href="#" class="delete">x</a></td>
  `;

  list.appendChild(row);

  this.showalert("Row Inserted Successfully!", "success");

  this.clearFields();

  document.querySelector(".delete").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("test confirmed");
  });

  //console.log(row);
};

//clear fiesds
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//error method

UI.prototype.showalert = function(message, className) {
  //create a element

  const div = document.createElement("div");
  div.className = `alert ${className}`;

  //add text node

  div.appendChild(document.createTextNode(message));

  //get parent

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  //insert alert
  container.insertBefore(div, form);

  //timeout after 3 secs
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

//event listeners

document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  const isbn = document.getElementById("isbn").value;

  //console.log(title + author + isbn);

  //instantiating the book
  const tbook = new Book(title, author, isbn);

  //console.log(tbook.author);

  const ui = new UI();

  //validations
  if (title === "" || author === "" || isbn === "") {
    //alert("failed");
    ui.showalert("Please fill all the fields !", "error");
  } else {
    ui.addBookToList(tbook);
  }

  //add book to list
});
