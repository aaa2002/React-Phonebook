import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../data/mockData";
import { useNavigate } from "react-router-dom";

function PersonView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentId = parseInt(String(id), 10);
  console.log(currentId);

  const person = mockData.find((item) => item.id === currentId);

  useEffect(() => {
    const person = mockData.find((item) => item.id === currentId);
    if (person) {
      setFormData(person);
    }
  }, [currentId]);

  useEffect(() => {
    const currentPerson =
      mockData[mockData.findIndex((item) => item.id === currentId)];
    document.title = `PhoneBook | ${currentPerson.firstName} ${currentPerson.lastName}`;
  });

  const handleDelete = () => {
    const indexToDelete = mockData.findIndex((item) => item.id === currentId);
    if (indexToDelete !== -1) {
      mockData.splice(indexToDelete, 1);
    }
    navigate("/");
  };

  const [editOn, setEditOn] = useState(false);
  const [data, setData] = useState(mockData);

  const handleEdit = () => {
    setEditOn(true);
  };

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
  };
  const [formData, setFormData] = useState<PersonData>(initialFormData);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSave = () => {
    setEditOn(false);

    const indexToUpdate = mockData.findIndex((item) => item.id === currentId);

    if (indexToUpdate !== -1) {
      mockData[indexToUpdate] = {
        ...mockData[indexToUpdate],
        ...formData,
      };
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="px-8 pt-8 bg-white shadow">
      {!editOn ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <button
              className="text-2xl hover:cursor-pointer hover:text-primary"
              onClick={handleEdit}
            >
              &#9998;&nbsp;&nbsp;
            </button>
            <h1 className="text-2xl font-bold mb-2">
              {person ? person.firstName + " " + person.lastName : ""}
            </h1>
          </div>
          <h2 className="text-lg text-gray-600 mb-4">
            {person ? person.company : ""}
          </h2>

          <div className="flex align-center mb-4">
            <h3 className="mr-2 font-semibold">Phone:</h3>
            <h3>{person ? person.phoneNumber : ""}</h3>
          </div>

          <hr className="border-gray-200 w-full" />

          <div className="flex flex-row">
            <p className="text-md text-gray-600 my-4">Notes:&nbsp;</p>
            <p className="mt-4">{person ? person.notes : ""}</p>
          </div>

          <hr className="border-gray-200 w-full" />

          <button
            className="inline-flex items-center my-5 cursor-pointer text-red-800 hover:text-red-500"
            onClick={handleDelete}
          >
            &#10007; Delete Contact
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSave}
          className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold mb-4">Edit</h1>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label
              htmlFor="lastName"
              className="block font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label
              htmlFor="lastName"
              className="block font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
              value={formData.company}
              onChange={handleChange}
            />

            <label
              htmlFor="lastName"
              className="block font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-primary"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <label
              htmlFor="lastName"
              className="block font-medium text-gray-700"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="mt-1 p-2 border rounded-md w-full h-32 focus:outline-none focus:border-primary"
              value={formData.notes}
              placeholder="Add any notes here..."
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default PersonView;
