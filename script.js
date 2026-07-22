// ================================
// Library Management System
// script.js
// ================================

// Store all books
let books = [];

// -------------------------------
// Add Book
// -------------------------------
function addBook() {
    const name = document.getElementById("bookName").value.trim();
    const author = document.getElementById("author").value.trim();
    const quantity = document.getElementById("quantity").value;

    // Validation
    if (name === "" || author === "" || quantity === "") {
        alert("Please fill all fields.");
        return;
    }

    const book = {
        id: books.length + 1,
        name: name,
        author: author,
        quantity: Number(quantity)
    };

    books.push(book);

    displayBooks();
    clearFields();
}

// -------------------------------
// Display Books
// -------------------------------
function displayBooks() {
    const table = document.getElementById("bookTable");

    table.innerHTML = "";

    books.forEach(book => {

        table.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.quantity}</td>
                <td>
                    <button onclick="deleteBook(${book.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });

    updateDashboard();
}

// -------------------------------
// Delete Book
// -------------------------------
function deleteBook(id) {

    books = books.filter(book => book.id !== id);

    // Reassign IDs
    books.forEach((book, index) => {
        book.id = index + 1;
    });

    displayBooks();
}

// -------------------------------
// Update Dashboard
// -------------------------------
function updateDashboard() {

    document.getElementById("totalBooks").textContent = books.length;

    let totalQuantity = 0;

    books.forEach(book => {
        totalQuantity += book.quantity;
    });

    document.getElementById("availableBooks").textContent = totalQuantity;

    // No issue module yet
    document.getElementById("issuedBooks").textContent = 0;
}

// -------------------------------
// Clear Input Fields
// -------------------------------
function clearFields() {

    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("quantity").value = "";

}