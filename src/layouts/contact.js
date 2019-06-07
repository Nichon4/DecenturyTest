import React from 'react';
import styled from 'styled-components'

export const Contact = ({data, editAction, deleteAction}) => {
  let {id, name, phone, email} = data;
  return (
    <StyledContact >
      <DataBox>{name}</DataBox>
      <DataBox>{phone}</DataBox>
      <DataBox>{email}</DataBox>
      <button onClick={() => editAction(data)}>Edit</button>
      <button onClick={() => deleteAction(id)}>Delete</button>
    </StyledContact>
  )
};

const StyledContact = styled.div`
  display: flex;
`;

const DataBox = styled.div`
border: black;
border-style: solid;
width: 200px;
`;