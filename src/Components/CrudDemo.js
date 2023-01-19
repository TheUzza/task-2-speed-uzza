import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Table from './Table';

const CrudDemo = () => {
  const [persons, setPersons] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch('https://example.com/api/persons')
      .then(response => response.json())
      .then(data => setPersons(data))
      .catch(error => console.log(error));
  }, []);

  const onSubmit = data => {
    fetch('https://example.com/api/persons', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setPersons([...persons, data]))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register({ required: true })} />
        <input name="lastName" ref={register({ required: true })} />
        <input name="email" ref={register({ required: true })} />
        <input name="title" ref={register({ required: true })} />
        <button type="submit">Save</button>
      </form>
      <Table persons={persons} />
    </div>
  );
}

export default CrudDemo;
