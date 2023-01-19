import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ updatePersonList }) => {
  const [person, setPerson] = useState({});
  const { register, handleSubmit } = useForm();

  const savePerson = data => {
    fetch('https://example.com/api/persons', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        updatePersonList(person);
      })
      .catch(error => console.log(error));
  }

  return (
    <form onSubmit={handleSubmit(savePerson)}>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <input name="email" ref={register({ required: true })} />
      <input name="title" ref={register({ required: true })} />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
