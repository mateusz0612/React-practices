import React, { useState } from "react";

export const PersonalDataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${formData.name} + ${formData.lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter lastname:
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
