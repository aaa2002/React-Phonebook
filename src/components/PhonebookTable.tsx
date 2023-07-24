import React, {useEffect} from "react";
import mockData from "../data/mockData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function PhonebookTable() {
  useEffect(() => {
    document.title = "PhoneBook | People";
  });
  return (
    <>
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
          {mockData.map((contact: any) => (
            <tr key={contact.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/view/${contact.id}`} className="hover:text-dark hover:border-b border-primary">
                  {contact.firstName} {contact.lastName}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {contact.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PhonebookTable;
