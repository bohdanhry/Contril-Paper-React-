import React, { useState } from "react";

export default function AddressForm({ onAdd }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "The first name is required";
    if (!form.lastName.trim()) newErrors.lastName = "The last name is required";
    if (!form.phone.trim()) newErrors.phone = "The phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd(form);
    setForm({ firstName: "", lastName: "", phone: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <div>
        <label>First Name:</label>
        <input
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <button type="submit">Add</button>
    </form>
  );
}