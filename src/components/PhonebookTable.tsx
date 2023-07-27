import React, { useEffect, useState } from "react";
import mockData from "../data/mockData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function PhonebookTable() {
  useEffect(() => {
    document.title = "PhoneBook | People";
  });

  const [companyName, setCompanyName] = useState("");

  const setCompany = (event: any) => {
    event.preventDefault();
    setCompanyName(event.target.value);
    console.log(companyName);
  };

  return (
    <>
      <div className="flex flex-row h-10 w-full justify-center">
        <select
          onChange={setCompany}
          className="text-center w-full bg-dark text-white hover:bg-secondary hover:cursor-pointer"
        >
          <option key={-1} value={""}>
            Select Company
          </option>
          {mockData.map((contact: any) => (
            <option key={contact.id} value={contact.company}>
              {contact.company}
            </option>
          ))}
        </select>
      </div>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg overflow-hidden rounded-lg">
        <thead className="bg-gray-100 text-md">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockData.map((contact: any) =>
            companyName === contact.company ? (
              <tr key={contact.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/view/${contact.id}`}
                    className="hover:text-dark hover:border-b border-primary"
                  >
                    {contact.firstName} {contact.lastName}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.notes}</td>
              </tr>
            ) : companyName === "" ? (
              <tr key={contact.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/view/${contact.id}`}
                    className="hover:text-dark hover:border-b border-primary"
                  >
                    {contact.firstName} {contact.lastName}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.notes}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </>
  );
}

export default PhonebookTable;
