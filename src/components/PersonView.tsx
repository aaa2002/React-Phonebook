import React, {useEffect} from "react";
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
    const currentPerson = mockData[mockData.findIndex((item) => item.id === currentId)];
    document.title = `PhoneBook | ${currentPerson.firstName} ${currentPerson.lastName}`;
  });

  const handleDelete = () => {
    const indexToDelete = mockData.findIndex((item) => item.id === currentId);
    if (indexToDelete !== -1) {
      mockData.splice(indexToDelete, 1);
    }
    navigate("/");
  };

  return (
    <div className="px-8 pt-8 bg-white shadow">
      {person ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-2">
            {person ? person.firstName + " " + person.lastName : ""}
          </h1>
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
        <p className="text-gray-500">No person found.</p>
      )}
    </div>
  );
}

export default PersonView;
