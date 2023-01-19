import React, { useState } from "react";
import DemoRouter from "./components/DemoRouter";
import CrudDemo from "./components/CrudDemo";
import UpdatePerson from "./components/UpdatePerson";
import "./components/App.css";

const App = () => {
  const [persons, setPersons] = useState([]);

  const updatePersonList = (person) => {
    setPersons([...persons, person]);
  };

  return (
    <DemoRouter>
      <CrudDemo updatePersonList={updatePersonList} />
      <UpdatePerson updatePersonList={updatePersonList} />
    </DemoRouter>
  );
};

export default App;
