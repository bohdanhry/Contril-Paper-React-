import React, { useState } from "react";
import AddressForm from "./components/AddressForm";
import SearchBar from "./components/SearchBar";
import AddressTable from "./components/AddressTable";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = (newBook) => {
    setBooks([...books, { id: Date.now(), ...newBook }]);
  };

  const handleUpdate = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm)
  );

  return (
    <div className="container">
      <h1>Address Book</h1>

      <AddressForm onAdd={handleAdd} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <AddressTable books={filteredBooks} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;