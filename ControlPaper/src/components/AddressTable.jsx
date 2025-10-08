import React, { useState } from "react";

export default function AddressTable({ books, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ firstName: "", lastName: "", phone: "" });

  const startEdit = (book) => {
    setEditingId(book.id);
    setEditForm(book);
  };

  const handleSave = () => {
    if (!editForm.firstName.trim() || !editForm.lastName.trim() || !editForm.phone.trim()) {
      alert("All fields are required!");
      return;
    }
    onUpdate(editForm);
    setEditingId(null);
  };

  if (books.length === 0) return <p className="no-data">No data to display.</p>;

  return (
    <table className="address-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>
              {editingId === book.id ? (
                <input
                  value={editForm.firstName}
                  onChange={(e) =>
                    setEditForm({ ...editForm, firstName: e.target.value })
                  }
                />
              ) : (
                book.firstName
              )}
            </td>
            <td>
              {editingId === book.id ? (
                <input
                  value={editForm.lastName}
                  onChange={(e) =>
                    setEditForm({ ...editForm, lastName: e.target.value })
                  }
                />
              ) : (
                book.lastName
              )}
            </td>
            <td>
              {editingId === book.id ? (
                <input
                  value={editForm.phone}
                  onChange={(e) =>
                    setEditForm({ ...editForm, phone: e.target.value })
                  }
                />
              ) : (
                book.phone
              )}
            </td>
            <td>
              {editingId === book.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={() => startEdit(book)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}