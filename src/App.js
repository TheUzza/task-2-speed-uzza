import React, { useState } from 'react';
import DemoRouter from './DemoRouter';
import CrudDemo from './CrudDemo';
import UpdatePerson from './UpdatePerson';
import './app.css';

const App = () => {
  const [persons, setPersons] = useState([]);

  const updatePersonList = person => {
    setPersons([...persons, person]);
  }

  return (
    <DemoRouter>
      <CrudDemo updatePersonList={updatePersonList} />
      <UpdatePerson updatePersonList={updatePersonList} />
    </DemoRouter>
  );
}

export default App;
