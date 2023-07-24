import React, { useState } from "react";

interface PersonData {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  notes: string;
}

const initialFormData: PersonData = {

    id: 0,
    firstName: "",
    lastName: "",
    company: "",
    phoneNumber: "",
    notes: "",
}

function AddPerson() {
  const [formData, setFormData] = useState<PersonData>(initialFormData);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("Submitted data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">
        Add someone to your phonebook!
      </h1>
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
          onChange={handleChange}
        />

        <label htmlFor="lastName" className="block font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
          onChange={handleChange}
        />

        <label htmlFor="lastName" className="block font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
          onChange={handleChange}
        />

        <label htmlFor="lastName" className="block font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
          onChange={handleChange}
        />

        <label htmlFor="lastName" className="block font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          className="mt-1 p-2 border rounded-md w-full h-32 focus:outline-none focus:border-primary"
          placeholder="Add any notes here..."
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary"
      >
        Submit
      </button>
    </form>
  );
}

export default AddPerson;
