import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdatePerson = ({ updatePersonList }) => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://example.com/api/persons/${id}`)
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(error => console.log(error));
  }, [id]);

  const onSubmit = data => {
    fetch(`https://example.com/api/persons/${id}`, {
      method: 'PUT',
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} defaultValue={person.firstName} />
      <input name="lastName" ref={register({ required: true })} defaultValue={person.lastName} />
      <input name="email" ref={register({ required: true })} defaultValue={person.email} />
      <input name="title" ref={register({ required: true })} defaultValue={person.title} />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdatePerson;
