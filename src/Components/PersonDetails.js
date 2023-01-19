import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://example.com/api/persons/${id}`)
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <p>Email: {person.email}</p>
      <p>Title: {person.title}</p>
    </div>
  );
}

export default PersonDetails;
