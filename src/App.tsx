import React from "react";
import logo from "./logo.svg";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PhonebookTable from "./components/PhonebookTable";
import NavBar from "./components/NavBar";
import AddPerson from "./components/AddPerson";
import PersonView from "./components/PersonView";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PhonebookTable />} />
          <Route path="/add" element={<AddPerson />} />
          <Route path="/view/:id" element={<PersonView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
