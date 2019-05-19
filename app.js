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

  //add book to list

  ui.addBookToList(tbook);
});
